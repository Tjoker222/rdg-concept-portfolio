import { NextPage } from "next";
import { Mission } from "@/components/Layouts/Mission";
import { Business } from "@/components/Layouts/Business";
import { Innovation } from "@/components/Layouts/Innovation";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { Explore } from "@/components/Layouts/Explore";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

const Home: NextPage = () => {
  const { isMobile } = useResponsiveLayout();

  return (
    <>
      <div className="w-full flex flex-col gap-y-[9.7rem] sm:gap-y-[10rem]">
        <Business />
        <Mission />
        {!isMobile && <Innovation />}
        <Explore/>
      </div>
    </>
  );
};

export default Home;
