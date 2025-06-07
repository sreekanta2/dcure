"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import ImageComponent from "@/components/ImageComponent";
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
import { doctorAwardsSchema } from "@/schemas/doctors-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
interface AwardsProps {
  label: string;
  buttonText: string;
}
type formData = z.infer<typeof doctorAwardsSchema>;

function AwardsForm({ label, buttonText }: AwardsProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<formData>({
    resolver: zodResolver(doctorAwardsSchema),
    defaultValues: {
      name: "award name",
      date: new Date(),
      description: "Description",
      organization: "Organization",
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
        <Button color="primary">{buttonText}</Button>
      </DialogTrigger>

      <DialogContent size="2xl">
        <DialogTitle>{label}</DialogTitle>
        <DialogDescription></DialogDescription>
        <ScrollArea className="h-[80vh]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="Awards-section border p-4 mb-4 rounded-lg shadow space-y-4">
                <div>
                  <h1 className="text-lg py-2">Awards</h1>
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
                      label="Awards Image"
                      maxFiles={1}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="name"
                    control={form.control}
                    label=" Award Name"
                    placeholder="Enter Title"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="organization"
                    control={form.control}
                    label="organization"
                    placeholder="Enter organization Name"
                  />
                  <CustomFormField
                    fieldType={FormFieldType.DATE_PICKER}
                    control={form.control}
                    name="date"
                    label="Awards Date"
                    placeholder="mm/dd/yyyy"
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

              <SubmitButton variant="soft" color="info" isLoading={loading}>
                Submit
              </SubmitButton>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default AwardsForm;
