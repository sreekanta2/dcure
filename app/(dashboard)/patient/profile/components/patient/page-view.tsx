import BasicDetails from "./basic-details";

const PatientSettingsPageView = async () => {
  return (
    <div className="space-y-6 bg-card p-6 rounded-md">
      <h1 className="text-xl">Profile settings</h1>
      <hr className="my-4 " />
      <div className=" w-full">
        <BasicDetails />
      </div>
    </div>
  );
};

export default PatientSettingsPageView;
