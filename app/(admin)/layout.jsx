import HeaderComponent from "@/components/HeaderComponent";
import Sidebar from "./admin/_components/Sidebar";
import { getAdmin } from "@/actions/admin";
import { notFound } from "next/navigation";

const AdminLayout = async ({ children }) => {
  const admin = await getAdmin();

  if (!admin.authorized) {
    return notFound();
  }
  return (
    <div className="h-full">
      <HeaderComponent isAdminPage={true} />
      <div className="flex h-full w-56 flex-col top-20 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default AdminLayout;
