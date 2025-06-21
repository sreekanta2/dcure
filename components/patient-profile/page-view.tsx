"use client";

import profileImage from "@/public/images/doctor-profile/doctor-20.jpg";
import { ImageViewerState } from "@/types/patient";
import {
  ActivityIcon,
  ArrowLeft,
  DropletIcon,
  ScaleIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AppointmentCard } from "./appointment-card";
import { ImageViewerModal } from "./image-view-modal";
import { PastAppointmentCard } from "./past-appointment-card";
import { StatCard } from "./start-card";

const patient = {
  id: "PAT-1001",
  name: "John Doe",
  age: 42,
  gender: "Male",
  bloodGroup: "O+",
  weight: 75,
  height: "175 cm",
  bp: "120/80 mmHg",
  allergies: "Penicillin, Pollen",
  image: "/patient-avatar.jpg",
  lastVisit: "2023-11-15",
  upcomingAppointments: [
    {
      id: "APT-1001",
      doctor: "Dr. Sarah Smith",
      doctorImage: "/doctor-avatar1.jpg",
      specialization: "Cardiology",
      date: "2023-11-25",
      time: "10:30 AM",
      status: "Confirmed",
      reason: "Follow-up on hypertension",
    },
  ],
  // Adding image arrays to prescriptions and reports
  pastAppointments: [
    {
      id: "APT-0923",
      doctor: "Dr. Michael Johnson",
      doctorImage: "/doctor-avatar2.jpg",
      specialization: "General Physician",
      date: "2023-10-10",
      time: "2:15 PM",
      diagnosis: "Acute sinusitis",
      prescription: {
        id: "RX-2023-001",
        images: [
          "/images/doctor-profile/doctor-20.jpg",
          "/images/doctor-profile/doctor-21.jpg",
        ],
        medications: [
          // ... existing data
        ],
        notes: "Finish full course of antibiotics.",
      },
      report: {
        id: "REP-2023-001",
        name: "Blood Test Report",
        type: "CBC",
        date: "2023-10-08",
        images: [
          "/images/doctor-profile/doctor-20.jpg",
          "/images/doctor-profile/doctor-20.jpg",
        ],
        summary: "Mild leukocytosis (WBC 11.2).",
      },
    },
    {
      id: "APT-0923",
      doctor: "Dr. Michael Johnson",
      doctorImage: "/doctor-avatar2.jpg",
      specialization: "General Physician",
      date: "2023-10-10",
      time: "2:15 PM",
      diagnosis: "Acute sinusitis",
      prescription: {
        id: "RX-2023-001",
        images: [
          "/images/doctor-profile/doctor-20.jpg",
          "/images/doctor-profile/doctor-21.jpg",
        ],
        medications: [
          // ... existing data
        ],
        notes: "Finish full course of antibiotics.",
      },
      report: {
        id: "REP-2023-001",
        name: "Blood Test Report",
        type: "CBC",
        date: "2023-10-08",
        images: [
          "/images/doctor-profile/doctor-20.jpg",
          "/images/doctor-profile/doctor-20.jpg",
        ],
        summary: "Mild leukocytosis (WBC 11.2).",
      },
    },
    {
      id: "APT-0923",
      doctor: "Dr. Michael Johnson",
      doctorImage: "/doctor-avatar2.jpg",
      specialization: "General Physician",
      date: "2023-10-10",
      time: "2:15 PM",
      diagnosis: "Acute sinusitis",
      prescription: {
        id: "RX-2023-001",
        images: [
          "/images/doctor-profile/doctor-20.jpg",
          "/images/doctor-profile/doctor-21.jpg",
        ],
        medications: [
          // ... existing data
        ],
        notes: "Finish full course of antibiotics.",
      },
      report: {
        id: "REP-2023-001",
        name: "Blood Test Report",
        type: "CBC",
        date: "2023-10-08",
        images: [
          "/images/doctor-profile/doctor-20.jpg",
          "/images/doctor-profile/doctor-20.jpg",
        ],
        summary: "Mild leukocytosis (WBC 11.2).",
      },
    },
  ],
};

interface PatientProfileProps {
  handleBackToList?: () => void;
}

export const PatientProfile = ({ handleBackToList }: PatientProfileProps) => {
  const [viewerState, setViewerState] = useState<ImageViewerState>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    type: "",
    appointmentId: "",
  });

  const [zoomLevel, setZoomLevel] = useState(1);

  const openImageViewer = (
    images: string[],
    type: "prescription" | "report",
    appointmentId: string
  ) => {
    setViewerState({
      isOpen: true,
      images,
      currentIndex: 0,
      type,
      appointmentId,
    });
    setZoomLevel(1);
  };

  const closeImageViewer = () => {
    setViewerState({
      isOpen: false,
      images: [],
      currentIndex: 0,
      type: "",
      appointmentId: "",
    });
  };

  const nextImage = () => {
    setViewerState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
    setZoomLevel(1);
  };

  const prevImage = () => {
    setViewerState((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
    setZoomLevel(1);
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));

  useEffect(() => {
    if (!viewerState.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "+":
          zoomIn();
          break;
        case "-":
          zoomOut();
          break;
        case "Escape":
          closeImageViewer();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewerState.isOpen]);

  return (
    <div className="min-h-screen relative p-4">
      <div className="flex items-center gap-4 mb-4">
        <button onClick={handleBackToList}>
          <ArrowLeft className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors" />
        </button>
      </div>

      {/* Patient Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-md overflow-hidden">
            <Image
              src={profileImage}
              alt={patient.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {patient.name}
            </h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                ID: {patient.id}
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                {patient.bloodGroup || "Blood Group N/A"}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
          <StatCard
            icon={<UserIcon className="w-5 h-5" />}
            label="Age/Gender"
            value={`${patient.age} / ${patient.gender}`}
          />
          <StatCard
            icon={<ScaleIcon className="w-5 h-5" />}
            label="Weight"
            value={`${patient.weight} kg`}
          />
          <StatCard
            icon={<DropletIcon className="w-5 h-5" />}
            label="Last BP"
            value={patient.bp || "120/80 mmHg"}
          />
          <StatCard
            icon={<ActivityIcon className="w-5 h-5" />}
            label="Allergies"
            value={patient.allergies || "None"}
          />
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Upcoming Appointments
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          {patient.upcomingAppointments?.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>

      {/* Past Appointments */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Past Appointments
        </h2>
        <div className="space-y-4">
          {patient.pastAppointments?.map((appointment) => (
            <PastAppointmentCard
              key={appointment.id}
              appointment={appointment}
              onViewPrescription={() =>
                appointment.prescription?.images &&
                openImageViewer(
                  appointment.prescription.images,
                  "prescription",
                  appointment.id
                )
              }
              onViewReport={() =>
                appointment.report?.images &&
                openImageViewer(
                  appointment.report.images,
                  "report",
                  appointment.id
                )
              }
            />
          ))}
        </div>
      </div>

      {viewerState.isOpen && (
        <ImageViewerModal
          state={viewerState}
          zoomLevel={zoomLevel}
          onClose={closeImageViewer}
          onNext={nextImage}
          onPrev={prevImage}
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          setZoomLevel={setZoomLevel}
        />
      )}
    </div>
  );
};
