import { NextPage } from "next";
import { Mission } from "@/components/Layouts/Mission";
import { Business } from "@/components/Layouts/Business";
import { Innovation } from "@/components/Layouts/Innovation";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { Explore } from "@/components/Layouts/Explore";
import { Services } from "@/components/Layouts/Services";
import { Clients } from "@/components/Layouts/Clients";
import { Team } from "@/components/Layouts/Team";

const Home: NextPage = () => {
  const { isMobile } = useResponsiveLayout();

  return (
    <>
      <div className="w-full flex flex-col gap-y-[4.8em] sm:gap-y-[10rem]">
        <Business />
        <Mission />
        {!isMobile && <Innovation />}
        <Explore/>
        <Services/>
        <Clients/>
        <Team/>
      </div>
    </>
  );
};

export default Home;
