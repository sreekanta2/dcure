"use client";

import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ResetButton from "@/components/reset-button";
import SubmitButton from "@/components/submit-button";
import { Form } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { doctorSpecialtySchema } from "@/schemas/doctors-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

// Define the Zod schema for validation

type FormData = z.infer<typeof doctorSpecialtySchema>;

export default function SpecialtiesServiceForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormData>({
    resolver: zodResolver(doctorSpecialtySchema),
    defaultValues: {
      name: "",
      description: "",
      specialtyId: "",
      thumbnail: "",
      price: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-6 border-b pb-4 my-4 last:border-0">
          <div className=" flex gap-4   ">
            <CustomFormField
              name="specialtyId"
              control={form.control}
              fieldType={FormFieldType.SELECT}
              label="Select Specialty"
              placeholder="Select Specialty"
            >
              {["Cardiology", "Nurology", "Dentis", "Medicine"].map(
                (specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                    <p>{specialty}</p>
                  </SelectItem>
                )
              )}
            </CustomFormField>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Or Create Specialty"
              placeholder=" Create Specialty"
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="price"
              label="Price"
              placeholder="Enter your price"
            />
          </div>
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="description"
            label="Description"
            placeholder="Enter your description"
          />
        </div>

        <div className="flex gap-x-4">
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
        </div>
      </form>
    </Form>
  );
}
