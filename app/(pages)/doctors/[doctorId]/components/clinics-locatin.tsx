"use client";
import { Icon } from "@iconify/react";

interface ClinicProps {
  clinics: {
    id: string;
    name: string;
    price: number;
    address: string;
    schedule: {
      day: string;
      hours: string;
    }[];
    phone?: string;
    distance?: string;
  }[];
}

const openDirections = (address: string) => {
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  window.open(googleMapsUrl, "_blank");
};

export default function ClinicLocation({ clinics }: ClinicProps) {
  return (
    <section id="clinics" className="w-full py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Our Clinic Locations
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find our specialized clinics with detailed information about
            services, operating hours, and locations
          </p>
        </div>

        <div className="grid gap-8">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="relative overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Clinic Info */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {clinic.name}
                        </h2>
                        {/* <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-100 dark:border-blue-800">
                          ${clinic.price.toLocaleString()} / visit
                        </span> */}
                      </div>

                      <div className="flex items-start text-gray-700 dark:text-gray-300">
                        <Icon
                          icon="heroicons:map-pin-20-solid"
                          className="w-5 h-5 mt-0.5 mr-2 text-blue-600 dark:text-blue-400"
                        />
                        <span className="flex-1">{clinic.address}</span>
                      </div>

                      {clinic.phone && (
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <Icon
                            icon="heroicons:phone-20-solid"
                            className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
                          />
                          <a
                            href={`tel:${clinic.phone.replace(/\D/g, "")}`}
                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {clinic.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Schedule */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        Operating Hours
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {clinic.schedule.map((slot, idx) => (
                          <div
                            key={idx}
                            className="border border-gray-100 dark:border-gray-700 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/30 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                          >
                            <h4 className="font-medium text-gray-900 dark:text-gray-100">
                              {slot.day}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                              {slot.hours}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col justify-between lg:w-56">
                    <div className="space-y-4">
                      {clinic.distance && (
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/30 px-3 py-2 rounded-lg">
                          <Icon
                            icon="heroicons:map-20-solid"
                            className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400"
                          />
                          <span>{clinic.distance} away</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col space-y-3 pt-4">
                      <button className="w-full px-6 py-3 bg-primary hover:bg-primary-700 text-white rounded-lg transition-all flex items-center justify-center font-medium shadow-sm hover:shadow-md">
                        <Icon
                          icon="heroicons:calendar-20-solid"
                          className="w-5 h-5 mr-2"
                        />
                        Book Appointment
                      </button>
                      <button
                        className="w-full px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all flex items-center justify-center font-medium shadow-sm hover:shadow-md"
                        onClick={() => openDirections(clinic.address)}
                      >
                        <Icon
                          icon="heroicons:arrow-top-right-on-square-20-solid"
                          className="w-5 h-5 mr-2"
                        />
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
