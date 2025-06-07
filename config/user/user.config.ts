import avatar from "@/public/images/avatar/avatar-6.jpg";
import { usersData } from "./data";
export { avatar };

export const getUserByEmail = async (email: string) => {
  try {
    const user = usersData.find((user) => user.email === email);

    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
export const getUsers = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = usersData.slice(startIndex, endIndex);
  const totalRecords = usersData.length;
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
