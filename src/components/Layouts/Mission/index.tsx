import Image from "next/image";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Mission = () => {
  const { isMobile } = useResponsiveLayout();

  const { t } = useTranslation("mission");

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
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        id="mission"
      >
        <div className="flex flex-row gap-x-[3.3rem] sm:px-[9.1rem]">
          <div className="hidden sm:flex flex-row gap-x-[2rem]">
            <p className="font-inter text-style-medium-xl sm:text-style-medium-base text-black">
              {t("mission")}
            </p>
            <div className="h-[5.2rem] w-[0.6rem] bg-gray-50" />
          </div>
          <div className="w-full flex flex-col sm:inline-flex gap-y-[5.4rem] h-[52rem] sm:h-[50rem]  bg-[url('/background-shape/background-violet-mobile.svg')] sm:bg-[url('/background-shape/background-violet.svg')] bg-cover items-start sm:relative">
            <div className="flex flex-col gap-y-[2.8rem] mt-[7.5rem] px-[3.2rem]">
              <p className="sm:w-[60rem] font-inter text-style-bold-2xl sm:text-style-bold-2xl text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-200">
                {t("secrets")}
                <span className="font-inter text-style-bold-2xl sm:text-style-bold-2xl text-black">
                  {t("sell_more")}
                </span>
              </p>
              <p className="sm:w-[50rem] font-inter text-black text-style-medium-base sm:text-style-medium-lg text-justify">
                {t("benefices")}
              </p>
              {isMobile && <NormalMission />}
            </div>
            {!isMobile && <MotionMission />}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const MotionMission = () => {
  const { t } = useTranslation("mission");

  return (
    <>
      <motion.div
        animate={{ y: [6, -6], opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3.5,
        }}
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] top-[15rem] right-[5rem]"
      >
        <div className="w-[1.5rem] h-[1.5rem] relative">
          <Image
            src="/icon/ellipse.svg"
            alt="ellipse"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-justify font-inter text-style-bold-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          {t("logo")}
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [5, -5], opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.5,
        }}
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] bottom-[15rem] left-[12rem]"
      >
        <div className="w-[1.5rem] h-[1.5rem] relative">
          <Image
            src="/icon/ellipse.svg"
            alt="ellipse"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="sm:w-[50rem] text-justify font-inter text-style-bold-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          {t("environment")}
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [6, -6], opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] bottom-[7rem] left-[40rem]"
      >
        <div className="w-[1.5rem] h-[1.5rem] relative">
          <Image
            src="/icon/ellipse.svg"
            alt="ellipse"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-justify font-inter text-style-bold-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          {t("brand")}
        </p>
      </motion.div>
      <motion.div
        animate={{ y: [7, -7], opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
        }}
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] bottom-[26rem] left-[60rem]"
      >
        <div className="w-[1.5rem] h-[1.5rem] relative">
          <Image
            src="/icon/ellipse.svg"
            alt="ellipse"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-justify font-inter text-style-bold-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          {t("fast")}
        </p>
      </motion.div>
    </>
  );
};

const NormalMission = () => {
  const { t } = useTranslation("mission");

  const missionMobile = [
    { title: t("logo") },
    {
      title: t("environment"),
    },
    { title: t("brand") },
    { title: t("fast") },
  ];

  return (
    <>
      {missionMobile.map((mission) => (
        <div
          key={mission.title}
          className="flex flex-row items-center gap-x-[2.7rem]"
        >
          <div className="w-[1rem] h-[1rem] relative">
            <Image
              src="/icon/ellipse.svg"
              alt="ellipse"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="text-justify font-inter text-style-bold-sx text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
            {mission.title}
          </p>
        </div>
      ))}
    </>
  );
};
