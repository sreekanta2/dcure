"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import CustomImage from "@/components/ImageComponent";
import FileInput from "@/components/shared/FileInput";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectItem } from "@/components/ui/select";
import { avatar } from "@/config/user/user.config";
import { doctorExperienceSchema } from "@/schemas/doctors-profile";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type formData = z.infer<typeof doctorExperienceSchema>;

function ExperienceForm({
  buttonText,
  label,
  experience,
}: {
  label: string;
  buttonText: string;
  experience?: any;
}) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<formData>({
    resolver: zodResolver(doctorExperienceSchema),
    defaultValues: {
      title: experience?.title || "Title",
      organization: experience?.organization || "Organization",
      yearsOfExperience: experience?.yearsOfExperience || "2",
      location: experience?.location || "Location",
      employmentsType: experience?.employmentsType || "parttime",
      description: experience?.description || "description",
      startDate: experience?.startDate || new Date(),

      endDate: experience?.endDate,
      currentlyWorking: experience?.currentlyWorking || false,
    },
  });

  const onSubmit: SubmitHandler<formData> = (data) => {
    setLoading(true);

    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setLoading(false);
    }, 2000);
  };
  const employmentType = [
    { id: "1", label: "fulltime" },
    { id: "2", label: "parttime" },
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button color="info" variant="soft">
          {buttonText}
        </Button>
      </DialogTrigger>

      <DialogContent size="2xl">
        <DialogTitle>{label}</DialogTitle>
        <ScrollArea className="h-[80vh]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className=" border p-4 mb-4 rounded-lg shadow space-y-4">
                <div>
                  <h1 className="text-lg py-2">Hospital</h1>
                  <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
                    <CustomImage
                      src={avatar}
                      alt=""
                      aspectRatio="1/1"
                      containerClass=""
                      className="rounded-md"
                    />
                    <FileInput
                      images={images}
                      setImages={setImages}
                      label="Hospital Image"
                      maxFiles={1}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="title"
                    control={form.control}
                    placeholder="Enter Title"
                    label="Title"
                  />

                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="organization"
                    control={form.control}
                    label="organization"
                    placeholder="Enter organization Name"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="yearsOfExperience"
                    control={form.control}
                    label="Years of Experience"
                    placeholder="Enter Years of Experience"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start gap-4">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="location"
                    control={form.control}
                    label="Location"
                    placeholder="Enter Location"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    name="type"
                    control={form.control}
                    label="Type"
                    placeholder="Select Type"
                  >
                    {employmentType.map((doctor, i) => (
                      <SelectItem key={i} value={doctor.label} color="primary">
                        <div className="flex cursor-pointer items-center gap-2">
                          {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                          <p>{doctor.label}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </CustomFormField>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="startDate"
                    label="Start Date"
                    placeholder="mm/dd/yyyy"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="endDate"
                    label="End Date"
                    placeholder="mm/dd/yyyy"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.CHECKBOX}
                    control={form.control}
                    name="currentlyWorking"
                    label="Currently Working"
                  />
                </div>
                <CustomFormField
                  fieldType={FormFieldType.TEXTAREA}
                  control={form.control}
                  name="description"
                  label="Description"
                  placeholder="Enter your description"
                />
                <div className="flex gap-x-4">
                  <SubmitButton variant="soft" color="info" isLoading={loading}>
                    Submit
                  </SubmitButton>
                </div>
              </div>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default ExperienceForm;
