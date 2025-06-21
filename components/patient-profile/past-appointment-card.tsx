// components/PatientProfile/PastAppointmentCard.tsx
import profileImage from "@/public/images/doctor-profile/doctor-20.jpg";
import { PastAppointmentCardProps } from "@/types/patient";
import Image from "next/image";

export const PastAppointmentCard = ({
  appointment,
  onViewPrescription,
  onViewReport,
}: PastAppointmentCardProps) => (
  <div className="bg-card rounded-lg shadow-sm p-4">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex items-center gap-4">
        <div className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
          <Image
            src={profileImage}
            alt=""
            width={72}
            height={96}
            className="rounded-full w-18 h-18"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-800 dark:text-white">
            {appointment.doctor}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {appointment.specialization}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            {appointment.date} • {appointment.time}
          </p>
          {appointment.diagnosis && (
            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
              Diagnosis: {appointment.diagnosis}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        {appointment.prescription?.images && (
          <button
            onClick={onViewPrescription}
            className="px-3 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            View Prescription
          </button>
        )}
        {appointment.report?.images && (
          <button
            onClick={onViewReport}
            className="px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            View Report
          </button>
        )}
      </div>
    </div>
  </div>
);
