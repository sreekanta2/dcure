"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import SubmitButton from "@/components/submit-button";

import { Form } from "@/components/ui/form";
import { ChangePasswordFormSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function ChangePasswordForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [newPasswordType, setNewPasswordType] = useState<boolean>(false);
  const [oldPasswordType, setOldPasswordType] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [confirmPasswordType, setConfirmPasswordType] =
    React.useState<boolean>(false);

  type FormData = z.infer<typeof ChangePasswordFormSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(ChangePasswordFormSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);

    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="w-full h-screen  max-w-3xl">
      <div className="2xl:mt-8 mt-6 2xl:text-3xl lg:text-2xl text-xl font-bold text-default-900">
        Create New Password
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 xl:mt-7 space-y-4"
        >
          <div className="relative">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              name="old password"
              control={form.control}
              placeholder="Old Password"
              label=" Old Password"
              type={oldPasswordType ? "text" : "password"}
            />

            <div
              className="absolute top-12 -translate-y-1/2 right-4  cursor-pointer"
              onClick={() => setOldPasswordType(!oldPasswordType)}
            >
              {oldPasswordType ? (
                <Icon
                  icon="heroicons:eye"
                  className="w-5 h-5 text-default-400"
                />
              ) : (
                <Icon
                  icon="heroicons:eye-slash"
                  className="w-5 h-5 text-default-400"
                />
              )}
            </div>
          </div>
          <div className="relative">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              name="newPassword"
              control={form.control}
              placeholder="New Password"
              label="New Password"
              type={newPasswordType ? "text" : "password"}
            />

            <div
              className="absolute top-12 -translate-y-1/2 right-4  cursor-pointer"
              onClick={() => setNewPasswordType(!newPasswordType)}
            >
              {newPasswordType ? (
                <Icon
                  icon="heroicons:eye"
                  className="w-5 h-5 text-default-400"
                />
              ) : (
                <Icon
                  icon="heroicons:eye-slash"
                  className="w-5 h-5 text-default-400"
                />
              )}
            </div>
          </div>
          <div className="relative">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              placeholder="Confirm Password"
              name="confirmPassword"
              label="Confirm Password"
              type={confirmPasswordType ? "text" : "password"}
            />

            <div
              className="absolute top-12 -translate-y-1/2 right-4  cursor-pointer"
              onClick={() => setConfirmPasswordType(!confirmPasswordType)}
            >
              {confirmPasswordType ? (
                <Icon
                  icon="heroicons:eye"
                  className="w-5 h-5 text-default-400"
                />
              ) : (
                <Icon
                  icon="heroicons:eye-slash"
                  className="w-5 h-5 text-default-400"
                />
              )}
            </div>
          </div>

          {error && (
            <p className="text-destructive-700 bg-destructive/10 p-2 mt-2">
              {error}
            </p>
          )}
          {success && <p className="text-green-500">{success}</p>}
          <SubmitButton isLoading={loading}>Update Credentials</SubmitButton>
        </form>
      </Form>
    </div>
  );
}
