import { EmploymentType, UserRole } from "./common";

export interface IUser {
  id: string;
  name?: string;
  email: string;
  emailVerified?: Date;
  image?: string;
  password?: string;
  role: UserRole;
  isTwoFactorEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface IAccount {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken?: string;
  accessToken?: string;
  expiresAt?: number;
  tokenType?: string;
  scope?: string;
  idToken?: string;
  sessionState?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IExperience {
  id: string;
  doctorId: string;
  title: string;
  organization: string;
  yearsOfExperience: string;
  location?: string;
  startDate: Date;
  endDate?: Date | null;
  description?: string;
  employmentsType: EmploymentType;
  currentlyWorking: boolean;
  thumbnail?: string;
}

export interface IInsurance {
  id: string;
  doctorId: string;
  name: string;
  insuranceType: string;
  thumbnail: string | null;
}
export interface IVerificationToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}
export interface IForgotPasswordToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}
export interface IDoctorProfile {
  id: string;
  userId: string;
  phoneNumber: string;
  bio?: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IPatientProfile {
  id: string;
  userId: string;
  phoneNumber: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IAddress {
  id: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  doctorId?: string;
  patientId?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IReview {
  id: string;
  doctorId: string;
  patientId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
}
export interface IAward {
  id: string;
  doctorId: string;
  name: string;
  organization: string | null;
  description: string | null;
  date: Date | null;
}
export interface IClinic {
  id: string;
  doctorId: string;
  name: string;
  address: string;
  price: string;
  latitude: string;
  longitude: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IAvailability {
  id: string;
  doctorId: string;
  date: string;
  createdAt: Date;
  updatedAt: Date;
  timeSlots: ITimeSlot[];
}
export interface ITimeSlot {
  id: string;
  availabilityId: string;
  startTime: string;
  endTime: string;
  price: number;
  type: string;
  clinicId: string | null;
  createdAt: Date;
  updatedAt: Date;
}
export interface IDoctorLanguage {
  id: string;
  doctorId: string;
  languageId: string;
}
export interface ILanguages {
  id: string;
  name: string;
}
export interface ISpecialty {
  id: string;
  name: string;
}
export interface ITreatment {
  id: string;
  doctorId: string;
  description: string | null;
  price: string;
  thumbnail?: string | null;
  specialty: ISpecialty;
}
