import { Badge } from "@/components/ui/badge";
import { ITreatment } from "@/types/doctor";

const specialties = [
  "Orthopedic Consultation",
  "Delivery Blocks",
  "Ultrasound Injection",
  "Tooth Bleaching",
  "Cosmetic",
];

interface SpecialtiesProps {
  treatments: ITreatment[];
}
export default function Specialty({ treatments }: SpecialtiesProps) {
  return (
    <div className="space-y-1" id="specialty">
      <h1 className="text-lg">Specialty</h1>
      <div className="  flex gap-4 flex-wrap">
        {treatments.map((treatment, index) => (
          <Badge key={index} variant="soft" className="px-4 py-2 rounded-md">
            {treatment.specialty.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
