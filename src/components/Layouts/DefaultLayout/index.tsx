import { Sidebar } from "@/components/Sidebar";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface DefaultLayoutProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50 duration-300">
        <Sidebar />
        <div className="w-full flex flex-col items-center justify-between">
          <div className="w-full flex flex-col gap-xl items-center">
            <Navbar />
            <div className="w-full flex flex-col gap-base items-center mt-[10rem]">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
