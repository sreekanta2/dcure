import { api } from "@/config/axios.config";
import { patients } from "./data";

export const getPatients = async ({
  page,
  limit,
  status,
}: {
  page: number;
  limit: number;
  status?: boolean;
}) => {
  let filteredData;
  // console.log(isActive);
  if (status === true) {
    filteredData = patients.filter((patient) => patient.isActive === true);
  } else if (status === false) {
    filteredData = patients.filter((patient) => patient.isActive === false);
  } else filteredData = patients;

  // Calculate start and end indices for pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Slice the filtered data for pagination
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // Calculate pagination metadata
  const totalRecords = filteredData.length; // Use filteredData length for accurate pagination
  const totalPages = Math.ceil(totalRecords / limit);
  // console.log({ filteredData });

  return {
    status: "success",
    message: "Successfully fetched data",
    data: paginatedData,
    pagination: {
      totalRecords,
      totalPages,
      currentPage: page,
      perPage: limit,
      hasNextPage: endIndex < totalRecords,
      hasPrevPage: startIndex > 0,
    },
  };
};
export const getPatient = async (doctoId: string) => {
  try {
    const response = await api.get(`/patients/${doctoId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
