import { z } from "zod";

export const patientFormSchema = z.object({
  name: z.string().nonempty("First name is required"),
  displayName: z.string().nonempty("Display name is required"),
  dateOfBirth: z.date({ message: "date is required" }),
  phoneNumber: z.string().nonempty("Phone number is required"),
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  address: z.string().nonempty("Address is required"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  zipCode: z.string().nonempty("Zip code is required"),
  country: z.string().nonempty("Country is required"),
});
