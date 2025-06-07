"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import SubmitButton from "@/components/submit-button";
import { Form } from "@/components/ui/form";

import { SelectItem } from "@/components/ui/select";
import { doctorLanguageSchema } from "@/schemas/doctors-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { z } from "zod";

type formData = z.infer<typeof doctorLanguageSchema>;

function Language() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<formData>({
    resolver: zodResolver(doctorLanguageSchema),
    defaultValues: {
      languageId: undefined,
      name: "",
    },
  });

  const onSubmit: SubmitHandler<formData> = (data) => {
    setLoading(true);

    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setLoading(false);
    }, 2000);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="  flex flex-col md:flex-row gap-4  shadow  ">
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            name="languageId"
            control={form.control}
            label="Select language"
            placeholder="Select language"
          >
            {["English", "Spanish", "Hindi"].map((language: string) => (
              <SelectItem key={language} value={language}>
                <div className="flex cursor-pointer items-center gap-2">
                  {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                  <p>{language}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            name="name"
            control={form.control}
            label="Or Created Language"
            placeholder="Enter your display name"
          />
        </div>

        <SubmitButton variant="soft" color="info" isLoading={loading}>
          Submit
        </SubmitButton>
      </form>
    </Form>
  );
}

export default Language;
