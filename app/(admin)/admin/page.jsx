import { getDashboardData } from "@/actions/admin";
import { Dashboard } from "./_components/Dashboard";

export const metadata = {
  title: "Dashboard | CarSahulat Admin",
  description: "Admin dashboard for CarSahulat car marketplace",
};

export default async function AdminDashboardPage() {
  const dashboardData = await getDashboardData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Dashboard initialData={dashboardData} />
    </div>
  );
}
