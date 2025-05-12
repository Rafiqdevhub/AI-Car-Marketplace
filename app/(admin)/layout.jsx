import HeaderComponent from "@/components/HeaderComponent";
import Sidebar from "./admin/_components/Sidebar";

const AdminLayout = () => {
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
