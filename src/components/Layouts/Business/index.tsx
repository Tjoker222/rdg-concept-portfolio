import Image from "next/image";
import { Button } from "@/components/Button";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Icon } from "../Icon";
import Link from "next/link";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Business = () => {
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
      >
        <div className="w-full flex flex-row mt-[5rem] sm:mt-[5rem] px-[3.4rem] sm:px-[21rem]">
          <div className="flex w-full flex-col gap-y-[4rem] sm:gap-y-[10.6rem] items-center sm:items-start">
            <div className="flex flex-col gap-y-[2.8rem]">
              <p className="sm:w-[60rem] font-inter text-center sm:text-start text-style-bold-5xl sm:text-style-bold-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
                RDG Concept
                <span className="font-inter text-style-bold-5xl sm:text-style-bold-5xl text-black">
                  : seu business com um novo conceito.
                </span>
              </p>
              <p className="sm:w-[40rem] font-inter text-center sm:text-justify text-style-medium-base sm:text-style-medium-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
                Revolucionamos o mercado de identidade visual e design de
                interface para Apps e Websites.
              </p>
            </div>
            <div className="flex flex-col gap-y-xl sm:flex-row sm:gap-x-xl">
              <Link href={"https://calendly.com/rdgconcept/my-own-business"}>
                <Button
                  title="Já possuo negócio"
                  size="small"
                  colorVariant="primary"
                />
              </Link>
              <Link href={"https://calendly.com/rdgconcept/start-new-business"}>
                <Button
                  title="Começar negócio"
                  size="small"
                  colorVariant="secondary"
                />
              </Link>
            </div>
            <motion.div
              animate={{ y: [5, -5] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.5,
              }}
              className="w-full justify-center flex"
            >
              <Icon iconUrl="/ArrowDown.svg" description="arrowDown" />
            </motion.div>
          </div>
          {!isMobile && (
            <div className="flex relative z-50">
              <div className="absolute right-[35rem] top-[5.5rem] flex flex-col items-center">
                <div className="h-[8rem] w-[0rem] border-dashed border-2 border-gray-800" />
                <motion.div
                  animate={{ y: [3, -3] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                  }}
                  className="w-[8.7rem] h-[8.7rem] relative"
                >
                  <Image
                    src="/react-icon.svg"
                    alt="react"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
                <div className="h-[8rem] w-[0rem] border-dashed border-2 border-gray-800" />
              </div>
              <div className="absolute right-[18rem] top-[20rem] flex flex-col items-center">
                <div className="h-[8rem] w-[0rem] border-dashed border-2 border-gray-800" />
                <motion.div
                  animate={{ y: [4, -4] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  }}
                  className="w-[6.7rem] h-[6.7rem] relative"
                >
                  <Image
                    src="/notion-icon.svg"
                    alt="notion"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
                <div className="h-[8rem] w-[0rem] border-dashed border-2 border-gray-800" />
              </div>
              <div className="absolute right-[10rem] bottom-[25rem] flex flex-col items-center">
                <div className="h-[8rem] w-[0rem] border-dashed border-2 border-gray-800" />
                <motion.div
                  animate={{ y: [6, -6] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 4,
                  }}
                  className="w-[12.7rem] h-[12.7rem] relative"
                >
                  <Image
                    src="/figma-icon.svg"
                    alt="figma"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
                <div className="h-[8rem] w-[0rem] border-dashed border-2 border-gray-800" />
              </div>
              <div className="absolute left-[2rem] top-[5rem] flex flex-col items-center">
                <div className="h-[8rem] w-[0rem] border-dashed border-2 border-gray-800" />
                <motion.div
                  animate={{ y: [5, -5] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3,
                  }}
                  className="w-[5.5rem] h-[5.5rem] relative"
                >
                  <Image
                    src="/github-icon.svg"
                    alt="github"
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </motion.div>
                <div className="h-[8rem] w-[0rem] border-dashed border-2 border-gray-800" />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};
