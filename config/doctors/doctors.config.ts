import { doctorsData } from "./data";

export const getDoctors = async ({
  page,
  limit,
  filter,
}: {
  page: number;
  limit: number;
  filter?: {
    name: string;
    gender: string;
    language: string;
    specialty: string;
  };
}) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = doctorsData.slice(startIndex, endIndex);
  const totalRecords = doctorsData.length;
  const totalPages = Math.ceil(totalRecords / limit);

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
export const getDoctor = async (
  doctorId: string,
  page: number,
  limit: number
) => {
  // Find doctor by ID
  const doctor = doctorsData.find((item) => item.id === "1");
  if (!doctor) {
    return { status: "fail", message: "Doctor not found" };
  }

  // Pagination parameters

  // Paginate reviews
  const totalReviews = doctor.reviews.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedReviews = doctor.reviews.slice(startIndex, endIndex);

  return {
    status: "success",
    message: "Doctor data fetched successfully",
    data: {
      ...doctor, // Spread full doctor data
      reviews: paginatedReviews, // Replace reviews with paginated ones
    },
    pagination: {
      totalRecords: totalReviews,
      totalPages: Math.ceil(totalReviews / limit),
      currentPage: page,
      perPage: limit,
      hasNextPage: endIndex < totalReviews,
      hasPrevPage: startIndex > 0,
    },
  };
};
