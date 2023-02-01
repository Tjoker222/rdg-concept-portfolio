import Image from "next/image";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CardServices } from "@/components/Cards/CardServices";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Services = () => {
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

  const servicesArr = [
    {
      title: "Identidade Visual",
      subtitle: "Criamos logotipo marcantes",
      src: "",
      description: "",
    },
    {
      title: "Websites/e-commerce",
      subtitle: "Venda mais com sites online",
      src: "ecommerce",
      description: "Websites and e-commerce",
    },
    {
      title: "Aplicativos mobile",
      subtitle: "Inove com aplicativos sofisticados",
      src: "mobileapp",
      description: "Aplicativos Mobile",
    },
  ];

  return (
    <>
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        {isMobile ? (
          <div className="px-[4.1rem] w-full flex flex-col gap-y-[4.8rem] items-center">
            <p className="text-style-bold-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
              Serviços
            </p>
            <div className="flex flex-col gap-y-base">
              {servicesArr.map((service) => (
                <div
                  key={service.title}
                  className="py-[4.5rem] px-[1rem] flex flex-col justify-center items-center gap-y-[0.3rem] border-2 border-black"
                >
                  <p className="text-style-bold-2xl font-inter text-black">
                    {service.title}
                  </p>
                  <p className="text-style-bold-base font-inter text-gray-800">
                    {service.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-row gap-x-[3.3rem] px-[9.1rem]">
            <div className="hidden sm:flex flex-row gap-x-[2rem]">
              <p className="font-inter text-style-medium-xl sm:text-style-medium-base text-black">
                Serviços
              </p>
              <div className="h-[5.2rem] w-[0.6rem] bg-gray-900" />
            </div>

            <div className="flex w-full flex-row gap-x-[13.6rem]">
              {servicesArr.map((service) => (
                <CardServices
                  title={service.title}
                  subtitle={service.subtitle}
                  src={service.src}
                  description={service.description}
                  key={service.title}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};
