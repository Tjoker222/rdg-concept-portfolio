import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface DefaultLayoutProps {
  children: JSX.Element;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div className="w-full flex min-h-screen bg-gray-50 duration-300">
        <div className="w-full flex flex-col items-center justify-between">
          <div className="w-full flex flex-col gap-xl items-center">
            <Navbar />
            <div className="w-full flex flex-col gap-base items-center">
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
