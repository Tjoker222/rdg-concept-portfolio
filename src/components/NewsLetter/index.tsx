import { useEffect } from "react";
import { Input } from "../Input";
import Image from "next/image";
import { Button } from "../Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import useTranslation from "next-translate/useTranslation";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export function NewsLetter() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const {t} = useTranslation('newsletter');

  const { isMobile } = useResponsiveLayout();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="px-[1.5rem] sm:px-[23rem] w-full flex flex-col gap-y-[3.4rem] sm:flex-row sm:gap-x-[6.2rem] items-center justify-center">
        <Input
          icon={
            <div className="w-[2.5rem] h-[2.5rem] relative">
              <Image
                src="/icon/signal.svg"
                alt="signal icon"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          }
          placeholder={t('email')}
          full={true}
        />
        <Button
          size="medium"
          colorVariant="primary"
          title={t('button_confirm')}
          full={isMobile}
        />
      </div>
    </motion.div>
  );
}
