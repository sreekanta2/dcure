export type UserRole = "patient" | "doctor" | "admin" | "pharmacy-admin";
export type EmploymentType = "fulltime" | "parttime";
export type SearchParams = {
  gender?: string;
  availability?: string;
  specialties?: string[];
  rating?: string;
  experience?: string;
  language?: string;
};
