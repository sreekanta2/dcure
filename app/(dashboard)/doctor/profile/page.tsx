import DoctorSettingsPageView from "./components/page-view";

export default async function ProfilePage() {
  const trans = {
    "basic-details": "Basic Details",
    experience: "Experience",

    awards: "Awards",
    insurances: "Insurances",
    language: "Languages",
    clinics: "Clinics",
  };
  return (
    <>
      <DoctorSettingsPageView trans={trans} />
    </>
  );
}
