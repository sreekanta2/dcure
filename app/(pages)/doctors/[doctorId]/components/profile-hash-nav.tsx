import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const hashLinks = [
  { label: "Chambers", id: "clinics" },
  { label: "Experience", id: "experience" },
  { label: "Review", id: "review" },
];

export default function ProfileHashTag({ doctorId }: { doctorId: string }) {
  return (
    <ScrollArea className="w-full pb-4">
      <div className="flex gap-2 min-w-max">
        {hashLinks.map((link) => (
          <Button key={link.id} variant="soft">
            <Link href={`/doctors/${doctorId}#${link.id}`}>{link.label}</Link>
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
