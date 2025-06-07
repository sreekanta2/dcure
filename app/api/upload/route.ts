import { mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = ["logo", "favicon"].map(
      (key) => formData.get(key) as File | null
    );

    if (!files.some((file) => file)) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), "public/upload");
    await mkdir(uploadDir, { recursive: true });

    const uploadedFiles = await Promise.all(
      files.map(async (file) => {
        if (file) {
          const buffer = Buffer.from(await file.arrayBuffer());
          const filePath = path.join(uploadDir, file.name);
          await writeFile(filePath, buffer);
          return { key: file.name, url: `/upload/${file.name}` };
        }
      })
    );

    return NextResponse.json({ uploadedFiles: uploadedFiles.filter(Boolean) });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload files" },
      { status: 500 }
    );
  }
}
