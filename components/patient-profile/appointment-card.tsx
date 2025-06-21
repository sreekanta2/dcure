// components/PatientProfile/AppointmentCard.tsx
import { AppointmentCardProps } from "@/types/patient";
import { CalendarIcon, ClockIcon } from "lucide-react";

export const AppointmentCard = ({ appointment }: AppointmentCardProps) => (
  <div className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">
          <CalendarIcon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-medium text-gray-800 dark:text-white">
            {appointment.doctor}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            {appointment.date} • {appointment.time}
          </p>
        </div>
      </div>
      {appointment.status && (
        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full">
          {appointment.status}
        </span>
      )}
    </div>
  </div>
);
