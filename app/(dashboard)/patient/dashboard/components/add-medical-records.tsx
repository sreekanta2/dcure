"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store";
import {
  File,
  FileArchive,
  FileText,
  Image as ImageIcon,
  Plus,
  UploadCloud,
  X,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type MedicalRecord = {
  id?: string;
  file: File;
  name: string;
  date: string;
  type: string;
  description: string;
  previewUrl?: string;
};

const AddMedicalRecordModal = ({
  isOpen,
  onClose,
  onUploadSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: () => void;
}) => {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [currentRecord, setCurrentRecord] = useState<Partial<MedicalRecord>>({
    date: new Date().toISOString().split("T")[0],
    type: "X-Ray",
  });
  const [isUploading, setIsUploading] = useState(false);
  const collapsed = useSidebar();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const newRecord: MedicalRecord = {
          file,
          name: file.name.split(".")[0],
          date: currentRecord.date || new Date().toISOString().split("T")[0],
          type: currentRecord.type || "Other",
          description: currentRecord.description || "",
          previewUrl: file.type.startsWith("image/")
            ? URL.createObjectURL(file)
            : undefined,
        };
        setRecords((prev) => [...prev, newRecord]);
      });
    },
    [currentRecord]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
    multiple: false,
  });

  const removeRecord = (index: number) => {
    setRecords((prev) => {
      const newRecords = [...prev];
      if (newRecords[index].previewUrl) {
        URL.revokeObjectURL(newRecords[index].previewUrl!);
      }
      newRecords.splice(index, 1);
      return newRecords;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setCurrentRecord((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      onUploadSuccess();
      setRecords([]);
      setCurrentRecord({
        date: new Date().toISOString().split("T")[0],
        type: "X-Ray",
      });
      onClose();
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) return <ImageIcon className="h-5 w-5" />;
    if (fileType === "application/pdf") return <FileText className="h-5 w-5" />;
    if (fileType.includes("word")) return <FileText className="h-5 w-5" />;
    if (fileType.includes("zip") || fileType.includes("rar"))
      return <FileArchive className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        !collapsed ? "collapsed  " : "not-collapsed "
      }`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-gray-900 bg-opacity-75 dark:bg-opacity-90"
            onClick={onClose}
          ></div>
        </div>

        {/* Modal container */}
        <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Add Medical Records
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Record Type
                  </label>
                  <select
                    name="type"
                    value={currentRecord.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white"
                  >
                    <option value="X-Ray">X-Ray</option>
                    <option value="MRI">MRI</option>
                    <option value="CT Scan">CT Scan</option>
                    <option value="Ultrasound">Ultrasound</option>
                    <option value="Lab Report">Lab Report</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={currentRecord.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    name="description"
                    rows={2}
                    value={currentRecord.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white"
                    placeholder="Brief description of the record"
                  />
                </div>
              </div>

              {/* Dropzone */}
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500"
                }`}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center space-y-2">
                  <UploadCloud className="h-10 w-10 text-blue-500 dark:text-blue-400" />
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {isDragActive
                      ? "Drop files here"
                      : "Drag & drop files here"}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Supports images (JPG, PNG), PDFs, and documents
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Select Files
                  </Button>
                </div>
              </div>

              {/* Preview Section */}
              {records.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Files to upload ({records.length})
                  </h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {records.map((record, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-md"
                      >
                        <div className="flex items-center space-x-3">
                          {record.previewUrl ? (
                            <div className="relative h-10 w-10">
                              <Image
                                src={record.previewUrl}
                                alt="Preview"
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                          ) : (
                            <div className="h-10 w-10 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded">
                              {getFileIcon(record.file.type)}
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-medium text-gray-900 dark:text-white truncate max-w-xs">
                              {record.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {record.type} •{" "}
                              {(record.file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeRecord(index)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Footer with action buttons */}
          <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isUploading || records.length === 0}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              {isUploading
                ? "Uploading..."
                : `Upload ${records.length} File${
                    records.length !== 1 ? "s" : ""
                  }`}
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-600 text-base font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicalRecordModal;
