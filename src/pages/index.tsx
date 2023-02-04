import { NextPage } from "next";
import { Mission } from "@/components/Layouts/Mission";
import { Innovation } from "@/components/Layouts/Innovation";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { Explore } from "@/components/Layouts/Explore";
import { Services } from "@/components/Layouts/Services";
import { Clients } from "@/components/Layouts/Clients";
import { Team } from "@/components/Layouts/Team";
import { NewsLetter } from "@/components/NewsLetter";
import { Discover } from "@/components/Discover";
import { ContactUs } from "@/components/Layouts/ContactUs";
import { HomeSection} from "@/components/Layouts/HomeSection"

const Home: NextPage = () => {
  const { isMobile } = useResponsiveLayout();

  return (
    <>
      <div className="w-full flex flex-col gap-y-[4.8em] sm:gap-y-[10rem]">
        <HomeSection/>
        <Mission />
        {!isMobile && <Innovation />}
        <Explore />
        <Services />
        <Clients />
        <Team />
        <NewsLetter />
        {!isMobile && <Discover />}
        <ContactUs/>
      </div>
    </>
  );
};

export default Home;
