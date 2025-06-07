import PatientSettingsPageView from "./components/patient/page-view";

export default async function Dashboard() {
  const trans = {
    "basic-details": "Basic Details",
    experience: "Experience",

    awards: "Awards",
    insurances: "Insurances",
    language: "Languages",
    clinics: "Clinics",
  };
  return <PatientSettingsPageView />;
}
