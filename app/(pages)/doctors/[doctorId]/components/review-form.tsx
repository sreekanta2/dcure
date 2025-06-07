"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import { User } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Rating } from "@/components/ui/rating";
import { avatar } from "@/config/user/user.config";
import { reviewsSchema } from "@/schemas/review";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
interface ReviewFormProps {
  doctorId: string;
}
export default function ReviewForm({ doctorId }: ReviewFormProps) {
  const [isPending, startTransition] = useTransition();

  type FormData = z.infer<typeof reviewsSchema>;
  const session = useSession();
  const form = useForm<FormData>({
    resolver: zodResolver(reviewsSchema),
    defaultValues: {
      comment: "",
      doctorId: "",
      patientId: "",
      rating: undefined,
    },
  });
  const currentRating = form.watch("rating");

  const onSubmit: SubmitHandler<FormData> = (data) => {};

  return (
    <Form {...form}>
      {" "}
      <form
        className="space-y-6 bg-card p-4 rounded-md "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Profile Section */}

        {/* Information Section */}

        <div className="flex items-start gap-x-4">
          {session?.data?.user?.image ? (
            <Image
              src={avatar}
              alt=""
              width={48}
              height={48}
              className="rounded-full"
            />
          ) : (
            <div className="p-1 bg-primary w-12 rounded-full  ">
              <User />
            </div>
          )}

          <div className="w-full space-y-4">
            <div>
              <h1>Your Rating</h1>
              <Rating
                value={currentRating}
                onChange={(value: number) => form.setValue("rating", value)}
                className="gap-x-1.5 max-w-[125px]"
                error={form.formState.errors.rating?.message}
              />
            </div>

            <div className="w-full   ">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="Comment"
                label="Write a Comment"
                iconAlt="user"
              />
            </div>
            <div className="flex gap-x-4">
              <Button type="submit" variant="soft">
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </div>

        {/* Address Section */}

        {/* Submit and Reset Buttons */}
      </form>
    </Form>
  );
}
