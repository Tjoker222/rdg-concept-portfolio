import { useEffect } from "react";
import { Button } from "../Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "../Layouts/Icon";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export function Discover() {
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
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="w-full flex flex-col gap-y-[6.5rem] px-[45rem] items-center">
        <p className="w-[60rem] font-inter text-center text-style-bold-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
          Transforme 
          &nbsp;
          <span className="font-inter text-style-bold-5xl text-black">
            seu negócio mais rentável com vendas online.
          </span>
        </p>
        <div className="w-full flex flex-row justify-between items-center">
          <Icon
            iconUrl="/ArrowBendDownRight.svg"
            description="arrow bend down right"
          />
          <Button
            size="medium"
            colorVariant="secondary"
            title="Descubra agora."
          />

          <Icon
            iconUrl="/ArrowBendDownLeft.svg"
            description="arrow bend down left"
          />
        </div>
      </div>
    </motion.div>
  );
}
