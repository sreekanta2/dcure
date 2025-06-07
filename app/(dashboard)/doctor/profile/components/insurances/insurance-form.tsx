"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ImageComponent from "@/components/ImageComponent";
import ResetButton from "@/components/reset-button";
import FileInput from "@/components/shared/FileInput";
import SubmitButton from "@/components/submit-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import { doctorInsuranceSchema } from "@/schemas/doctors-profile";
import { IInsurance } from "@/types/doctor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface InsurancePropsType {
  insurance?: IInsurance;
  label: string;
  buttonText: string;
  className?: string;
}
type formData = z.infer<typeof doctorInsuranceSchema>;

function InsuranceForm({ label, buttonText, className }: InsurancePropsType) {
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<formData>({
    resolver: zodResolver(doctorInsuranceSchema),
    defaultValues: {
      name: "Insurance Name",
      insuranceType: "Insurance Type",
      thumbnail: images[0] || "",
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
    <Dialog>
      <DialogTrigger asChild className={className}>
        <h1 className="cursor-pointer text-primary-900">{buttonText}</h1>
      </DialogTrigger>

      <DialogContent size="2xl">
        <DialogTitle>{label}</DialogTitle>
        <DialogDescription></DialogDescription>

        <Form {...form}>
          {" "}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="Insurance-section border p-4 mb-4 rounded-lg shadow space-y-4">
              <div>
                <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
                  <div className="w-24 h-24 rounded-md overflow-hidden">
                    <ImageComponent
                      src={images[0] || avatar}
                      alt="Profile Image"
                    />
                  </div>
                  <FileInput
                    images={images}
                    setImages={setImages}
                    label="Insurance Image"
                    maxFiles={1}
                  />
                </div>
              </div>
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="name"
                control={form.control}
                label=" Insurance Name"
                placeholder="Enter Title"
              />
            </div>

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
      </DialogContent>
    </Dialog>
  );
}

export default InsuranceForm;
