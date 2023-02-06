import { Sidebar } from "@/components/Sidebar";
import { Background } from "../Background";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface DefaultLayoutProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>

      <div className="flex min-h-screen duration-300">
        <Sidebar />
        <div className="w-full flex flex-col items-center justify-between">
          <div className="w-full flex flex-col gap-xl items-center">
            <Navbar />
            <Background />
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
