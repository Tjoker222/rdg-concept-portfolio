import Image from "next/image";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Mission = () => {
  const { isMobile } = useResponsiveLayout();

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
        <div className="w-full flex flex-row gap-x-[3.3rem] sm:px-[9.1rem]">
          <div className="hidden sm:flex flex-row gap-x-[2rem]">
            <p className="font-inter text-style-medium-xl sm:text-style-medium-base text-black">
              Missão
            </p>
            <div className="h-[5.2rem] w-[0.6rem] bg-gray-900" />
          </div>
          <div className="w-full flex flex-col sm:inline-flex gap-y-[5.4rem] h-[52rem] sm:h-[50rem]  bg-[url('/background-violet-mobile.svg')] sm:bg-[url('/background-violet.svg')] bg-cover items-start sm:relative">
            <div className="flex flex-col gap-y-[2.8rem] mt-[7.5rem] px-[3.2rem]">
              <p className="sm:w-[60rem] font-inter text-style-bold-2xl sm:text-style-bold-2xl text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-200">
                Segredos
                <span className="font-inter text-style-bold-2xl sm:text-style-bold-2xl text-black">
                  : que fazem meus clientes vender mais com seus websites.
                </span>
              </p>
              <p className="sm:w-[50rem] font-inter text-black text-style-medium-base sm:text-style-medium-lg text-justify">
                Você vera através dos meus clientes o quão benéfico e você
                possuir um website para impulsionar as suas vendas na internet,
                e o melhor de tudo como fazer sua marca conhecida.{" "}
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
            src="/ellipse.svg"
            alt="ellipse"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="w-fit text-justify font-inter text-style-bold-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          Logotipo + Website = Vendas Online
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
            src="/ellipse.svg"
            alt="ellipse"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="sm:w-[50rem] text-justify font-inter text-style-bold-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          Um ambiente claro e sustentável para receber seus clientes de forma
          virtual.
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
            src="/ellipse.svg"
            alt="ellipse"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="w-fit text-justify font-inter text-style-bold-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          Criar marca de qualidade e reconhecida
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
            src="/ellipse.svg"
            alt="ellipse"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="w-fit text-justify font-inter text-style-bold-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          Venda rápida e intuitiva
        </p>
      </motion.div>
    </>
  );
};

const NormalMission = () => {
  const missionMobile = [
    { title: "Logotipo + Website = Vendas Online" },
    {
      title:
        "Um ambiente claro e sustentável para receber seus clientes de forma virtual.",
    },
    { title: "Criar marca de qualidade e reconhecida" },
    { title: "Venda rápida e intuitiva" },
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
              src="/ellipse.svg"
              alt="ellipse"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="w-fit text-justify font-inter text-style-bold-sx text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
            {mission.title}
          </p>
        </div>
      ))}
    </>
  );
};
