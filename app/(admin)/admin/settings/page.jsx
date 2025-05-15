import { SettingForm } from "./_components/SettingFrom";

export const metadata = {
  title: "Settings | CarSahulat Admin",
  description: "Manage dealership working hours and admin users",
};

const SettingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <SettingForm />
    </div>
  );
};

export default SettingPage;
