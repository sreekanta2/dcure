import { appointments } from "./data";

export const getAppointments = async ({
  page,
  limit,
  completed,
}: {
  page: number;
  limit: number;
  completed?: boolean;
}) => {
  let filteredData;

  if (completed) {
    filteredData = appointments.filter(
      (appointment) => appointment.isComplate === true
    );
  } else if (!completed) {
    filteredData = appointments.filter(
      (appointment) => appointment.isComplate === false
    );
  } else filteredData = appointments;

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
