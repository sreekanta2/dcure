"use client";
import { useSidebar } from "@/store";
import { ChevronLeft, ChevronRight, Download, Info, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type MedicalImage = {
  id: string;
  url: string;
  name: string;
  date: string;
  type: string;
  description?: string;
};

const MedicalGalleryView = () => {
  const [selectedImage, setSelectedImage] = useState<MedicalImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(true);

  // Mock data - in a real app, this would come from an API
  const medicalImages: MedicalImage[] = [
    {
      id: "1",
      url: "/images/all-img/blog-3.jpg",
      name: "MRI Scan - Brain",
      date: "2023-10-15",
      type: "MRI",
      description: "Axial view showing normal brain structures",
    },
    {
      id: "2",
      url: "/images/all-img/xray.jpeg",
      name: "X-Ray - Right Wrist",
      date: "2023-09-28",
      type: "X-Ray",
      description: "AP and lateral views showing healed fracture",
    },
    {
      id: "3",
      url: "/ultrasound-1.jpg",
      name: "Ultrasound - Abdomen",
      date: "2023-08-12",
      type: "Ultrasound",
      description: "Normal liver and gallbladder appearance",
    },
    {
      id: "4",
      url: "/ct-scan-1.jpg",
      name: "CT Scan - Chest",
      date: "2023-07-05",
      type: "CT Scan",
      description: "No pulmonary nodules detected",
    },
    {
      id: "5",
      url: "/mri-scan-2.jpg",
      name: "MRI Scan - Knee",
      date: "2023-06-18",
      type: "MRI",
      description: "Sagittal view showing meniscus",
    },
    {
      id: "6",
      url: "/xray-2.jpg",
      name: "X-Ray - Chest",
      date: "2023-05-22",
      type: "X-Ray",
      description: "PA view with clear lung fields",
    },
  ];

  const openImage = (image: MedicalImage) => {
    const index = medicalImages.findIndex((img) => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setShowInfo(true);
  };

  const navigate = (direction: "prev" | "next") => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % medicalImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + medicalImages.length) % medicalImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(medicalImages[newIndex]);
  };
  const downloadImage = (imageUrl: string, imageName: string) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = imageUrl;

    // Set the download attribute with a proper filename
    link.download = `${imageName.replace(/\s+/g, "_")}_${new Date()
      .toISOString()
      .slice(0, 10)}.${imageUrl.split(".").pop()}`;

    // Append to the document, trigger click, and then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const { collapsed } = useSidebar();
  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeImage();
      } else if (e.key === "ArrowRight") {
        navigate("next");
      } else if (e.key === "ArrowLeft") {
        navigate("prev");
      } else if (e.key === "i") {
        setShowInfo(!showInfo);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-background p-4  relative border rounded-md shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-default-800">
          Medical Imaging Gallery
        </h1>
        <p className="text-default-600 mt-2">
          Review your diagnostic imaging results and reports
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {medicalImages.map((image) => (
          <div
            key={image.id}
            className="bg-background rounded-xl shadow-sm border border-default-100 overflow-hidden hover:shadow-md transition-all cursor-pointer group"
            onClick={() => openImage(image)}
          >
            <div className="aspect-square bg-gradient-to-br from-default-50 to-default-100 flex items-center justify-center relative">
              <Image
                fill
                src={image.url}
                alt={image.name}
                className="object-contain w-full h-full p-2 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all" />
            </div>
            <div className="p-4 border-t border-default-100">
              <h3 className="font-medium text-default-800 truncate">
                {image.name}
              </h3>
              <div className="flex justify-between items-center mt-2 text-sm">
                <span className="px-2 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium">
                  {image.type}
                </span>
                <span className="text-default-500">{image.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4  ${
            !collapsed ? "collapsed  " : "not-collapsed "
          }`}
        >
          <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col">
            {/* Top controls */}
            <div className="flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent z-10">
              <button
                onClick={closeImage}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Toggle info"
                >
                  <Info className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    downloadImage(selectedImage.url, selectedImage.name)
                  }
                  className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Download"
                >
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main image content */}
            <div className="flex-1 relative overflow-hidden">
              {/* Navigation arrows */}
              <button
                onClick={() => navigate("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 z-10 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => navigate("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 z-10 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image display */}
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Image info panel */}
              {showInfo && (
                <div className="absolute bottom-0   right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-6 text-white">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {selectedImage.name}
                        </h3>
                        <div className="flex items-center mt-1 space-x-3 text-sm">
                          <span className="px-2.5 py-1 bg-white/10 rounded-full">
                            {selectedImage.type}
                          </span>
                          <span className="text-white/80">
                            {selectedImage.date}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-white/70">
                        {currentIndex + 1} of {medicalImages.length}
                      </div>
                    </div>

                    {selectedImage.description && (
                      <div className="mt-3 p-3 bg-white/5 rounded-lg">
                        <p className="text-white/90">
                          {selectedImage.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalGalleryView;
