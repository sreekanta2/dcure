"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import SubmitButton from "@/components/submit-button";
import { SiteLogo } from "@/components/svg";
import { Form } from "@/components/ui/form";
import { ForgotPasswordSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
const schema = z.object({
  email: z.string().email({ message: "Your email is invalid." }),
});
const ForgotForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<boolean>(false);

  type FormData = z.infer<typeof ForgotPasswordSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
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
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-[560px] mx-auto p-6 rounded-md border bg-card ">
        <Link href="/" className=" flex justify-center">
          <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
        </Link>
        <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
          Forget Your Password?
        </div>
        <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6">
          Enter your email & instructions will be sent to you!
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-5 xl:mt-7 space-y-4"
          >
            <div className="relative">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="email"
                control={form.control}
                placeholder="Old Password"
                label=" Old Password"
                type="email"
              />
            </div>
            <div className="relative">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="password"
                control={form.control}
                placeholder=" Password"
                label=" Password"
                type={passwordType ? "text" : "password"}
              />
            </div>

            <SubmitButton isLoading={loading}>Login</SubmitButton>
          </form>
        </Form>
        <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
          Forget it. Send me back to{" "}
          <Link href="/auth/login" className="text-primary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotForm;
