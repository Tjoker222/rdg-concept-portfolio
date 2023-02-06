import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CardServices } from "@/components/Cards/CardServices";
import { Icon } from "../Icon";
import useTranslation from "next-translate/useTranslation";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Clients = () => {
  const carouselRef = useRef<Splide>(null);

  const { isMobile } = useResponsiveLayout();

  const { t } = useTranslation("clients");

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const clientsArr = [
    { name: "Claudio", subtitle: "CEO Seedlisting" },
    { name: "Gustavo Dubra", subtitle: "CEO Enutri Suplementos" },
    { name: "Gabriel Barreto", subtitle: "CEO Gestor Bs" },
    { name: "Claudio", subtitle: "CEO Seedlisting" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
          <div className="px-[2.1rem] flex flex-col gap-y-[5.3rem] justify-center items-center">
            <p className="font-inter text-style-bold-xl text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-200">
              {t("clients")}
            </p>
            <div className="w-full flex flex-col gap-y-[2.3rem]">
              <div className="flex flex-row justify-between items-center">
                <Icon
                  iconUrl="/ArrowBendDownLeft.svg"
                  description="arrow bend down left"
                />
                <p className="font-inter text-style-bold-xl text-black">
                  Scroll
                </p>
                <Icon
                  iconUrl="/ArrowBendDownRight.svg"
                  description="arrow bend down right"
                />
              </div>
              <Splide
                ref={carouselRef}
                options={{
                  type: "loop",
                  perPage: 1,
                  perMove: 1,
                  arrows: false,
                  pagination: false,
                }}
              >
                {clientsArr.map((client) => (
                  <SplideSlide key={client.name} className="bg-transparent">
                    <CardServices
                      title={client.name}
                      subtitle={client.subtitle}
                      description={client.name}
                      mediaType="video"
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-y-[6rem] px-[18rem]">
            <div className="flex flex-row gap-x-[2.3rem]">
              <div className="h-[5.2rem] w-[0.6rem] bg-white" />
              <div className="flex flex-col gap-y-[2.1rem]">
                <p className="font-inter text-style-bold-2xl text-transparent bg-clip-text bg-white">
                  {t("clients")}
                </p>
                <p className="text-style-medium-base text-gray-600">
                  {t("clients_world")}
                </p>
              </div>
            </div>
            <div className="w-full h-[0.1rem] bg-gradient-to-r from-white" />
            <Splide
              ref={carouselRef}
              options={{
                type: "loop",
                perPage: 4,
                perMove: 1,
                arrows: false,
                pagination: false,
              }}
            >
              {clientsArr.map((client) => (
                <SplideSlide key={client.name}>
                  <CardServices
                    title={client.name}
                    subtitle={client.subtitle}
                    description={client.name}
                    mediaType="video"
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}
      </motion.div>
    </>
  );
};
