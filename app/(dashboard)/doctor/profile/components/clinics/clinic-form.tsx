"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import FileUploaderRestrictions from "@/components/file-upload-reactions";
import ImageComponent from "@/components/ImageComponent";
import ResetButton from "@/components/reset-button";
import FileInput from "@/components/shared/FileInput";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import avatar from "@/public/images/avatar/avatar-13.jpg";
import { doctorClinicSchema } from "@/schemas/doctors-profile";
import { IClinic } from "@/types/doctor";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface ClinicPropsType {
  clinic?: IClinic;
  label: string;
  buttonText: string;
}

type formData = z.infer<typeof doctorClinicSchema>;

function ClinicForm({ clinic, label, buttonText }: ClinicPropsType) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<formData>({
    resolver: zodResolver(doctorClinicSchema),
    defaultValues: {
      name: "Clinic name ",
      address: "Clinic address",
      price: "200",
      latitude: "Latitude",
      longitude: "Longitude",
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
      <DialogTrigger asChild>
        <Button variant="soft" color="primary" className="mr-2">
          {buttonText}
        </Button>
      </DialogTrigger>

      <DialogContent size="2xl">
        <ScrollArea className="h-[80vh]  ">
          <DialogTitle className="my-2">{label}</DialogTitle>
          <DialogDescription></DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="Clinic-section border p-4 mb-4 rounded-lg shadow space-y-4">
                <div>
                  <h1 className="text-lg py-2">Clinic</h1>
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
                      label="Clinic Image"
                      maxFiles={1}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="name"
                    control={form.control}
                    label=" Clinic Name"
                    placeholder="Enter Title"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="price"
                    control={form.control}
                    label=" Price"
                    placeholder="Enter price"
                  />
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="address"
                    control={form.control}
                    label="Address"
                    placeholder="Enter address"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="latitude"
                    control={form.control}
                    label="Latitude"
                    placeholder="Enter latitude"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="longitude"
                    control={form.control}
                    label="Longitude"
                    placeholder="Enter Longitude "
                  />
                </div>
              </div>
              <FileUploaderRestrictions />
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default ClinicForm;
