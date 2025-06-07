"use client";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import CustomImage from "@/components/ImageComponent";
import FileInput from "@/components/shared/FileInput";
import SubmitButton from "@/components/submit-button";
import { Form } from "@/components/ui/form";
import { doctorBasicFormSchema } from "@/schemas/doctors-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function BasicDetails({
  user,
  address,
}: {
  user: any;
  address: any;
}) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState(
    "/images/doctor-profile/doctor-18.jpg"
  );
  type FormData = z.infer<typeof doctorBasicFormSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(doctorBasicFormSchema),
    defaultValues: {
      name: user?.name || "Jhon Doe",
      displayName: user?.name?.charAt(0) || "Jhon",
      designation: user?.role || "Doctor",
      phoneNumber: "+1-212-456-7890",
      email: user?.email || "jhon.doe@gmail.com",
      city: address?.city || "Las Vegas",
      address: address?.address || "234 Hickory Ridge Drive",
      state: address?.state || "NV",
      zipCode: address?.zip || "89119",
      country: address?.country || "United States",
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
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Profile Section */}
        <div>
          <h1 className="text-lg py-2">Profile</h1>
          <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
            <CustomImage
              src={profilePicture}
              alt=""
              aspectRatio="1/1"
              className="rounded-full"
              containerClass="w-24 h-24 "
            />

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
                control={form.control}
                name="email"
                type="email"
                label="Email"
                placeholder="jhon@example.com"
                iconAlt="Email"
                disabled={true}
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
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="designation"
                label="Designation"
                placeholder="designation "
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

        <SubmitButton variant="soft" color="info" isLoading={loading}>
          Update
        </SubmitButton>
      </form>
    </Form>
  );
}
