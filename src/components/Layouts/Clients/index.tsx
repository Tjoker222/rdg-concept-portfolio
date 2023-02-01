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

export const Clients = () => {
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

  const clientsArr = [
    { name: "Claudio", subtitle: "CEO Seedlisting" },
    { name: "Gustavo Dubra", subtitle: "CEO Enutri Suplementos" },
    { name: "Gabriel Barreto", subtitle: "CEO Gestor Bs" },
    { name: "Claudio", subtitle: "CEO Seedlisting" },
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
        <div className="flex flex-col gap-y-[6rem] px-[18rem]">
          <div className="flex flex-row gap-x-[2.3rem]">
            <div className="h-[5.2rem] w-[0.6rem] bg-gray-900" />
            <div className="flex flex-col gap-y-[2.1rem]">
              <p className="font-inter text-style-bold-2xl text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-200">
                Nossos clientes estão felizes
              </p>
              <p className="text-style-medium-base text-gray-500">
                Clientes em todo o mundo conhecem nosso trabalho.
              </p>
            </div>
          </div>
          <div className="w-full h-[0.05rem] border-2 border-solid border-gray-100" />
          <div className="flex w-full flex-row justify-between">
            {clientsArr.map((client) => (
              <CardServices
                title={client.name}
                subtitle={client.subtitle}
                description={client.name}
                key={client.name}
                mediaType='video'
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
