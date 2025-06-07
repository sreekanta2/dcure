"use server";

import { getUserByEmail } from "@/config/user/user.config";
import { LoginSchema } from "@/schemas/auth";

import { signIn } from "next-auth/react";
import { z } from "zod";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid fields" };
  }
  const { email, password } = validatedData.data;

  try {
    const exitingUser = await getUserByEmail(email);

    if (!exitingUser || !exitingUser?.email || !exitingUser?.password) {
      return { error: "User not found" };
    }

    const user = await signIn("credentials", {
      email,
      password,
    });

    if (!user) {
      return { error: "Invalid credentials" };
    }

    return { success: "successfully login", user };
  } catch (error) {
    console.log(error);
  }
};
