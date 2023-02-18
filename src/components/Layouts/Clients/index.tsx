import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CardServices } from "@/components/Cards/CardServices";
import { Icon } from "../Icon";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { CardRating } from "@/components/Cards/CardRating";

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
  const hash_star = Array.from({ length: 5 }, (_, i) => i + 1);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const clientsArr = [
    { name: "Claudio", subtitle: "CEO Seedlisting", id: 1 },
    { name: "Gustavo Dubra", subtitle: "CEO Enutri Suplementos", id: 2 },
    { name: "Gabriel Barreto", subtitle: "CEO Gestor Bs", id: 3 },
    { name: "Claudio", subtitle: "CEO Seedlisting", id: 4 },
  ];

  return (
    <>
      <div
        className="box"
        ref={ref}
      >
        {isMobile ? (
          <div className="px-[2.1rem] flex flex-col gap-y-[5.3rem] justify-center items-center">
            <p className="font-inter text-style-bold-xl text-transparent bg-clip-text bg-white">
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
                  <SplideSlide key={client.id} className="bg-transparent">
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
            <div className="flex flex-col relative items-center h-[60rem]">
              <div className="flex flex-col gap-x-xl">
                <p className="font-inter text-style-bold-5xl text-gray-600">
                  {t("rating")}
                </p>
                <div className="flex flex-row w-full items-center justify-center">
                  {hash_star.map((_, i) => (
                    <div
                      className="w-[2.6rem] h-[2.6rem] relative rounded-full"
                      key={i}
                    >
                      <Image
                        src="icon/star-icon.svg"
                        alt="star"
                        fill={true}
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <MotionRating />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const MotionRating = () => {
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
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] top-[12rem] left-0"
      >
        <CardRating
          description="I want to thank Yuri for the excellent work. It went way beyond expectations with the project he made for me. If you need to create an authentic character or a perfect caricature, recommended or Yuri. It was so worth it."
          imageUrl="/clients/bs.svg"
          name="Gestor Bs"
        />
      </motion.div>
      <motion.div
        animate={{ y: [5, -5], opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.5,
        }}
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] top-[10rem] right-[5rem]"
      >
        <CardRating
          description="I've already designed 4 web applications with mobile portability. Always attentive to the customer's placement, in addition to being careful with the features I went through."
          imageUrl="/clients/germano.svg"
          name="Germano Gomes"
        />
      </motion.div>
      <motion.div
        animate={{ y: [6, -6], opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] bottom-0 left-[40rem]"
      >
        <CardRating
          description="A great job and fast service delivery. Congratulations."
          imageUrl="/clients/helena.svg"
          name="Helena"
        />
      </motion.div>
      <motion.div
        animate={{ y: [7, -7], opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
        }}
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] bottom-[16rem] left-[60rem]"
      >
        <CardRating
          description="Excellent and thorough work."
          imageUrl="/clients/augustin.svg"
          name="Agustin Gonzalez"
        />
      </motion.div>
      <motion.div
        animate={{ y: [7, -7], opacity: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
        }}
        className="hidden sm:flex flex-row items-center sm:absolute gap-x-[2.7rem] bottom-[10rem] left-[6rem]"
      >
        <CardRating
          description="The company is very professional, it accompanies the client at every stage of the project, in addition to delivering a high-value product."
          imageUrl="/clients/dione.svg"
          name="Dione Bastos"
        />
      </motion.div>
    </>
  );
};
