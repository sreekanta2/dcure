import profileImage from "@/public/images/doctor-profile/doctor-20.jpg";
import { ChevronRight, Heart, MapPin, Star } from "lucide-react";
import Image from "next/image";

export const FavoriteDoctors = () => {
  const favoriteDoctors = [
    {
      id: "DOC-1001",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 128,
      location: "MedLife Clinic, New York",
      image: "/doctors/doctor-1.jpg",
      isAvailable: true,
      isFavorite: true,
    },
    {
      id: "DOC-1002",
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      rating: 4.8,
      reviews: 92,
      location: "City General Hospital",
      image: "/doctors/doctor-2.jpg",
      isAvailable: false,
      isFavorite: true,
    },
    {
      id: "DOC-1003",
      name: "Dr. Emily Wilson",
      specialty: "Pediatrician",
      rating: 4.7,
      reviews: 156,
      location: "Children's Health Center",
      image: "/doctors/doctor-3.jpg",
      isAvailable: true,
      isFavorite: true,
    },
  ];

  return (
    <div className=" border rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Favorite Doctors
        </h2>
        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="space-y-4">
        {favoriteDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex items-center p-4 border  bg-card rounded-lg hover:shadow-md transition-all"
          >
            <div className="relative mr-4">
              <div className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                <Image
                  src={profileImage}
                  alt=""
                  width={72}
                  height={96}
                  className="rounded-full w-18 h-18"
                />
              </div>
              {doctor.isAvailable && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {doctor.specialty}
                  </p>
                </div>
                <button className="text-red-500 hover:text-red-600">
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>

              <div className="flex flex-wrap items-center mt-2">
                <div className="flex items-center mr-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {doctor.rating}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                    ({doctor.reviews})
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  {doctor.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
