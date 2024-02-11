import Navbar from "@/components/Navbar";
import SidebarComponent from "@/components/Sidebar";
export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SidebarComponent />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
