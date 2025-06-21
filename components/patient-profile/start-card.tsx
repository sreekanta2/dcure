// components/PatientProfile/StatCard.tsx
import { StatCardProps } from "@/types/patient";

export const StatCard = ({ icon, label, value }: StatCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {value}
        </p>
      </div>
    </div>
  </div>
);
