interface Patient {
  name: string;
  image: string;
}

// Define the Review type
export interface IReview {
  id: string;
  patient: Patient;
  rating: number;
  comment: string;
  createdAt?: string;
  updatedAt?: string;
}
//
// types/patient.ts
export interface Appointment {
  id: string;
  doctor: string;
  doctorImage: string;
  specialization: string;
  date: string;
  time: string;
  status?: string;
  reason?: string;
  diagnosis?: string;
  prescription?: {
    id: string;
    images: string[];
    medications?: any[];
    notes?: string;
  };
  report?: {
    id: string;
    name: string;
    type: string;
    date: string;
    images: string[];
    summary: string;
  };
}

export interface Patient2 {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodGroup: string;
  weight: number;
  height: string;
  bp: string;
  allergies: string;
  image: string;
  lastVisit: string;
  upcomingAppointments: Appointment[];
  pastAppointments: Appointment[];
}

export interface ImageViewerState {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  type: "prescription" | "report" | "";
  appointmentId: string;
}

export interface ImageViewerModalProps {
  state: ImageViewerState;
  zoomLevel: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  setZoomLevel: (value: number | ((prev: number) => number)) => void;
}

export interface PastAppointmentCardProps {
  appointment: Appointment;
  onViewPrescription: () => void;
  onViewReport: () => void;
}

export interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export interface AppointmentCardProps {
  appointment: Appointment;
}
