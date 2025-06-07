// "use client";
// import TextareaFormField from "@/components/FormField";
// import ImageComponent from "@/components/ImageComponent";
// import InputComponent from "@/components/InputComponent";
// import FileInput from "@/components/shared/FileInput";
// import { DatePicker } from "@/components/single-date-picker";
// import { Button } from "@/components/ui/button";
// import avatar from "@/public/images/avatar/avatar-13.jpg";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { z } from "zod";

// const educationSchema = z.object({
//   institution: z.string().nonempty("Title is required"),
//   course: z.string().nonempty("Hospital is required"),

//   noOfYear: z.number().min(0, "Location is required"),
//   employment: z.string().nonempty("Employment type is required"),
//   description: z.string().nonempty(" Description is required"),
//   startDate: z.date({
//     message: "Start date is required",
//   }),
//   endDate: z.date().optional(),
// });

// type formData = z.infer<typeof educationSchema>;

// function Education() {
//   const [images, setImages] = useState<string[]>([]);

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<formData>({
//     resolver: zodResolver(educationSchema),
//     defaultValues: {
//       institution: "",
//       course: "",
//       noOfYear: 0,
//       description: "",

//       startDate: undefined,
//       endDate: undefined,
//     },
//   });

//   const onSubmit: SubmitHandler<formData> = (data) => {
//   };
//   const employmentType = [
//     { id: 1, label: "Full Time" },
//     { id: 2, label: "Part Time" },
//   ];
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="education-section border p-4 mb-4 rounded-lg shadow space-y-4">
//         <div>
//           <h1 className="text-lg py-2">Hospital</h1>
//           <div className="border p-4 rounded-md flex gap-4 bg-primary/10">
//             <div className="w-24 h-24 rounded-md overflow-hidden">
//               <ImageComponent src={images[0] || avatar} alt="Profile Image" />
//             </div>
//             <FileInput
//               images={images}
//               setImages={setImages}
//               label="Hospital Image"
//               maxFiles={1}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row items-start gap-4">
//           <InputComponent
//             name="institution"
//             control={control}
//             label="Institution"
//             placeholder="Enter Title"
//             isRequired
//             error={errors.institution?.message}
//           />

//           <InputComponent
//             name="hospital"
//             control={control}
//             label="Course"
//             placeholder="Enter Course Name"
//             isRequired
//             error={errors.course?.message}
//           />
//         </div>

//         <div className="flex flex-col md:flex-row items-start gap-4"></div>

//         <div className="flex flex-col md:flex-row md:items-center gap-4">
//           <DatePicker
//             name="startDate"
//             control={control}
//             error={errors?.startDate?.message}
//             label="Start Date"
//             isRequired={true}
//           />
//           <DatePicker
//             name="endDate"
//             control={control}
//             error={errors?.endDate?.message}
//             label="End Date"
//             isRequired={false}
//           />
//           <InputComponent
//             name="noOfYear"
//             control={control}
//             label="No Of Year"
//             placeholder="Enter Years of education"
//             type="number"
//             isRequired
//             error={errors.noOfYear?.message}
//             className="h-10"
//           />
//         </div>
//         <TextareaFormField
//           name="description"
//           control={control}
//           label="Description"
//           placeholder="Enter your description"
//           error={errors.description?.message}
//           isRequired={true}
//           color="primary"
//           variant="bordered"
//           radius="md"
//           shadow="sm"
//         />
//       </div>

//       <div className="flex gap-4 mt-6">
//         <Button
//           variant="soft"
//           color="destructive"
//           type="button"
//           onClick={() => reset()}
//         >
//           Reset
//         </Button>
//         <Button variant="soft" type="submit" color="info">
//           Save Changes
//         </Button>
//       </div>
//     </form>
//   );
// }

// export default Education;
