"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const generalSettingFormSchema = z.object({
    websiteName: z
      .string()
      .min(2, "Name should be at least 2 characters long")
      .max(50, "Name should not exceed 50 characters"),
    logo: z.instanceof(File).optional(),
    favicon: z.instanceof(File).optional(),
  });
  type FormData = z.infer<typeof generalSettingFormSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(generalSettingFormSchema),
    defaultValues: {
      websiteName: "",
      logo: undefined,
      favicon: undefined,
    },
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);

    try {
      const formData = new FormData();
      if (data.logo) formData.append("logo", data.logo);
      if (data.favicon) formData.append("favicon", data.favicon);

      // Upload files
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Upload failed");

      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error("Upload failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-6 bg-card rounded-md space-y-4">
      <h1 className="text-2xl font-bold   bg-card/50 text-default-600   ">
        General Settings
      </h1>
      <hr />
      {/* <Image src={`../../../../public/`} alt="" width={500} height={500} /> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-fit space-y-4">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="websiteName"
              label="Website Name"
              iconAlt="user"
            />
            <CustomFormField
              fieldType={FormFieldType.FILE_UPLOAD}
              control={form.control}
              name="logo"
              label="Website Logo"
              iconAlt="user"
            />
            <CustomFormField
              fieldType={FormFieldType.FILE_UPLOAD}
              control={form.control}
              name="favicon"
              label="Favicon"
              iconAlt="user"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
