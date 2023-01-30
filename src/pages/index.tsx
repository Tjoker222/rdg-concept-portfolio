import { NextPage } from "next";
import { Mission } from "@/components/Layouts/Mission";
import { Business } from "@/components/Layouts/Business";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

const Home: NextPage = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <div className="w-full flex flex-col gap-y-[9.7rem] sm:gap-y-[26rem]">
        <Business />
        <motion.div
          className="box"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <Mission />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
