import { api } from "@/config/axios.config";
import { reviews } from "./data";

export const getReviews = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = reviews.slice(startIndex, endIndex);
  const totalRecords = reviews.length;
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
export const getReview = async (reviewId: string) => {
  try {
    const response = await api.get(`/reviews/${reviewId}`);
    return response?.data?.data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
};
