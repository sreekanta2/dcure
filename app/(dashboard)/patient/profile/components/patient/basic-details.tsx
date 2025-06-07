"use client";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ImageComponent from "@/components/ImageComponent";
import ResetButton from "@/components/reset-button";
import FileInput from "@/components/shared/FileInput";
import SubmitButton from "@/components/submit-button";
import { Form } from "@/components/ui/form";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import { patientFormSchema } from "@/schemas/patient-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "react-phone-number-input/style.css";
import { z } from "zod";
export default function BasicDetails() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  type FormData = z.infer<typeof patientFormSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      name: "",
      displayName: "",
      dateOfBirth: undefined,
      phoneNumber: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  // Fetch patient profile data
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);

    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setLoading(false);
    }, 2000);
  };
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Profile Section */}
        <div>
          <h1 className="text-lg py-2">Profile</h1>
          <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
            <div className="w-24 h-24 rounded-md overflow-hidden">
              <ImageComponent src={images[0] || avatar} alt="Profile Image" />
            </div>
            <FileInput
              images={images}
              setImages={setImages}
              label="Profile Image"
              maxFiles={1}
            />
          </div>
        </div>

        {/* Information Section */}
        <div>
          <h1 className="text-lg py-2">Information</h1>
          <div className="bg-primary/10 p-4 rounded-md space-y-4">
            <div className="w-full flex flex-col md:flex-row gap-4 items-start">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                label="Full name"
                placeholder="John Doe"
                iconAlt="user"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="displayName"
                control={form.control}
                label="Display Name"
                placeholder="Enter your display name"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 items-start">
              <CustomFormField
                fieldType={FormFieldType.DATE_PICKER}
                control={form.control}
                name="dateOfBirth"
                label="Date of Birth"
                showTimeSelect
                dateFormat="MM/dd/yyyy   "
                placeholder="mm/dd/yyyy "
              />
              <CustomFormField
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="phoneNumber"
                label="Phone number"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h1 className="text-lg py-2">Address</h1>
          <div className="bg-primary/10 p-4 rounded-md space-y-4">
            <div className="w-full flex flex-col md:flex-row gap-4 items-start">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="address"
                control={form.control}
                label="Address"
                placeholder="Enter your display name"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="city"
                control={form.control}
                label="City"
                placeholder="Enter your  city"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 items-start">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="state"
                control={form.control}
                label="State"
                placeholder="Enter your state name"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="country"
                control={form.control}
                label="Country"
                placeholder="Enter your country name"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="zipCode"
                control={form.control}
                label="Zip code"
                placeholder="Enter your zip code"
              />
            </div>
          </div>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex gap-x-4">
          <SubmitButton variant="soft" color="info" isLoading={loading}>
            Submit
          </SubmitButton>
          <ResetButton
            variant="soft"
            color="destructive"
            onClick={() => form.reset()}
          >
            Reset
          </ResetButton>
        </div>
      </form>
    </Form>
  );
}
