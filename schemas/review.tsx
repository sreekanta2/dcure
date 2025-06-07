import { z } from "zod";

export const reviewsSchema = z.object({
  comment: z.string().nonempty("Comment is required"),
  rating: z.number().min(1, "Rating is required"),
  doctorId: z.string().nonempty("Doctor Id is required"),
  patientId: z.string().nonempty("Patient Id is required"),
});
