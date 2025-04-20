import Navbar from "@/components/navigation/navbar";
import SideBar from "@/components/navigation/navbar/SideBar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div>
        <SideBar />
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
