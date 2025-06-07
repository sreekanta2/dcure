import { prescriptions } from "./data";

export const getPrescriptions = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = prescriptions.slice(startIndex, endIndex);
  const totalRecords = prescriptions.length;
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
