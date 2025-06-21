"use client";
import CustomImage from "@/components/ImageComponent";
import { PatientProfile } from "@/components/patient-profile/page-view";

import { Badge } from "@/components/ui/badge";
import { avatar } from "@/config/user/user.config";
import { CakeIcon, DropletIcon, ScaleIcon, UserIcon } from "lucide-react";
import { useState } from "react";

export default function PatientPageView({ patients }: { patients: any }) {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const handleSelectPatient = (patient: any) => {
    setSelectedPatient(patient);
    // Handle patient selection logic here
    console.log("Selected Patient:", patient);
  };
  const handleBackToList = () => {
    setSelectedPatient(null);
  };
  return (
    <div className="w-full bg-card/50 p-4 rounded-lg shadow-md  ">
      {/* Header Section */}

      {/* Patients List */}
      {!selectedPatient ? (
        <div>
          <header className="mb-4">
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">
              My Patients
            </h1>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
          </header>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {patients?.data.map((patient: any) => (
              <article
                key={patient.id}
                className="w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all p-4 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Patient Image */}
                  <div className="flex flex-col items-center sm:items-start gap-3">
                    <CustomImage
                      src={patient?.image || avatar}
                      alt={patient?.name || ""}
                      aspectRatio="1/1"
                      containerClass="w-20 h-20 sm:w-24 sm:h-24"
                      className="rounded-lg border border-gray-100 dark:border-gray-700"
                    />
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        ID: {patient.id || "N/A"}
                      </Badge>
                      <Badge
                        variant="soft"
                        color="success"
                        className="text-xs px-2 py-0.5 capitalize"
                      >
                        {patient.status || "Active"}
                      </Badge>
                    </div>
                  </div>

                  {/* Patient Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {patient.name}
                      </h2>
                      <button
                        className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                        onClick={() => handleSelectPatient(patient)}
                      >
                        View Profile
                      </button>
                    </div>

                    {/* Patient Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/20">
                          <UserIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Gender
                          </p>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200 capitalize">
                            {patient.gender || "N/A"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-orange-50 dark:bg-orange-900/20">
                          <CakeIcon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Age
                          </p>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {patient.age || "N/A"} Years
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-green-50 dark:bg-green-900/20">
                          <DropletIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Blood Group
                          </p>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {patient.bloodGroup || "N/A"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-purple-50 dark:bg-purple-900/20">
                          <ScaleIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Weight
                          </p>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {patient.weight || "N/A"} kg
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <PatientProfile handleBackToList={handleBackToList} />
        </div>
      )}
    </div>
  );
}
