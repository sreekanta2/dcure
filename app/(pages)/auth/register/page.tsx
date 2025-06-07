"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import SubmitButton from "@/components/submit-button";
import { SiteLogo } from "@/components/svg";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RegisterSchema } from "@/schemas/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const RegForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordType = () => {
    setPasswordVisible((prev) => !prev);
  };
  const toggleConfirmPasswordType = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };

  type FormData = z.infer<typeof RegisterSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "patient",
      password: "",
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
  const options = [
    {
      label: "patient",
      id: "1",
    },
    {
      label: "doctor",
      id: "2",
    },
  ];
  return (
    <div>
      <div className="max-w-[560px] mx-auto border my-8 rounded-md p-6 bg-card">
        <Link href="/" className="flex justify-center mb-4">
          <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
        </Link>
        <Separator />
        <Separator />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 xl:mt-7">
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-4">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  name="name"
                  control={form.control}
                  label="Full Name"
                  placeholder="Enter full name"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  name="email"
                  control={form.control}
                  placeholder="Enter full name"
                  label="Email"
                  type="email"
                />
                <CustomFormField
                  fieldType={FormFieldType.SELECT}
                  name="type"
                  control={form.control}
                  label="Type"
                  placeholder="Select Type"
                >
                  {options.map((option, i) => (
                    <SelectItem key={option.id} value={option.label}>
                      <div className="flex cursor-pointer items-center gap-2">
                        {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                        <p>{option.label}</p>
                      </div>
                    </SelectItem>
                  ))}
                </CustomFormField>
              </div>

              {/* Password and Confirm Password */}
              <div className="flex gap-4 items-start">
                <div className="w-full">
                  <div className="relative">
                    <CustomFormField
                      fieldType={FormFieldType.INPUT}
                      name="password"
                      control={form.control}
                      placeholder="Enter Password"
                      label="Password"
                      type={passwordVisible ? "text" : "password"}
                    />
                    <div
                      className="absolute top-12 -translate-y-1/2 right-2 cursor-pointer"
                      onClick={togglePasswordType}
                    >
                      {passwordVisible ? (
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
                </div>
                <div className="w-full">
                  <div className="relative">
                    <CustomFormField
                      fieldType={FormFieldType.INPUT}
                      name="confirmPassword"
                      control={form.control}
                      placeholder="Enter confirm password"
                      label="Confirm password"
                      type={confirmPasswordVisible ? "text" : "password"}
                    />
                    <div
                      className="absolute top-12 -translate-y-1/2 right-2 cursor-pointer"
                      onClick={toggleConfirmPasswordType}
                    >
                      {confirmPasswordVisible ? (
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
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-1.5 mb-8">
              <Checkbox
                size="sm"
                className="border-default-300 mt-[1px]"
                id="terms"
              />
              <Label
                htmlFor="terms"
                className="text-sm text-default-600 cursor-pointer whitespace-nowrap"
              >
                You accept our Terms & Conditions
              </Label>
            </div>
            <SubmitButton className="w-full" isLoading={loading}>
              Register
            </SubmitButton>
          </form>
        </Form>

        <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
          Already Registered?{" "}
          <Link href="/auth/login" className="text-primary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
