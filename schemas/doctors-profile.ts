import { z } from "zod";

export const doctorBasicFormSchema = z.object({
  name: z.string().nonempty("First name is required"),
  displayName: z.string().optional(),
  designation: z.string().optional(),
  phoneNumber: z.string().nonempty("Phone number is required"),
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  address: z.string().nonempty("Address is required"),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().nonempty("Country is required"),
});
export const doctorExperienceSchema = z.object({
  id: z.string().optional(),
  title: z.string().nonempty("Title is required"),
  organization: z.string().nonempty("Hospital is required"),
  yearsOfExperience: z
    .string()
    .min(0, "Year of experience is required positive number"),
  location: z.string().nonempty("Location is required"),
  employmentsType: z
    .enum(["fulltime", "parttime"], {
      errorMap: () => {
        return { message: "Role must be one" };
      },
    })
    .refine((val) => ["fulltime", "parttime"].includes(val), {
      message: "Invalid role provided.",
    }),
  description: z.string().nonempty("Job description is required"),
  startDate: z.date({
    message: "Start date is required",
  }),
  endDate: z.date().optional(),
  currentlyWorking: z.boolean(),
  thumbnail: z.string().optional(),
});
export const doctorInsuranceSchema = z.object({
  name: z.string().nonempty("name is required"),
  insuranceType: z.string().optional(),
  thumbnail: z.string().optional(),
  id: z.string().optional(),
});

export const doctorAwardsSchema = z.object({
  name: z.string().nonempty("Title is required"),
  date: z.date().optional(),
  organization: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
});
export const doctorClinicSchema = z.object({
  name: z.string().nonempty("Title is required"),
  address: z.string().nonempty("address is required"),
  price: z.string().nonempty("price required positive number"),
  latitude: z.string().nonempty("latitude is required"),
  longitude: z.string().nonempty("longitude is required"),
  id: z.string().optional(),
});

export const doctorScheduleSchema = z.object({
  date: z.date({
    message: " date is required",
  }),
  startTime: z.string().min(2, "Start time  required"),
  endTime: z.string().min(2, "End time  required"),
  type: z.string(),
  price: z.string(),
});
export const doctorLanguageSchema = z.object({
  languageId: z.string().optional(),
  name: z.string().optional(),
});
export const doctorSpecialtySchema = z.object({
  name: z.string().optional(),
  specialtyId: z.string().optional(),
  description: z.string().optional(),
  price: z.string().min(2, "price is required"),
  thumbnail: z.string().optional(),
});
