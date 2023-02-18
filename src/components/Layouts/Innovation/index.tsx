import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { CardInnovation } from "@/components/Cards/CardInnovation";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useTranslation from "next-translate/useTranslation";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Innovation = () => {
  const { isMobile } = useResponsiveLayout();

  const { t } = useTranslation("innovation");

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const innovation = [
    {
      title: "100%",
      description: t("subtitle_hundred"),
    },
    {
      title: "150+",
      description: t("subtitle_country"),
    },
    {
      title: "1:1",
      description: t("subtitle_services"),
    },
    {
      title: "#1",
      description: t("subtitle_startup"),
    },
    {
      title: "+5",
      description: t("subtitle_projects"),
    },
    {
      title: "R$0",
      description: t("subtitle_support"),
    },
    {
      title: t('title_authentic'),
      description: t("subtitle_authentic"),
    },
    {
      title: "UI/UX",
      description: t("subtitle_ui"),
    },
  ];

  return (
    <>
      <div
        className="box"
        ref={ref}
        animate={control}
      >
        <div className="flex flex-col gap-y-[10rem] px-[15rem]">
          <div className="flex flex-row gap-x-sm">
            <p className="font-inter text-style-bold-2xl text-transparent bg-clip-text bg-white">
              {t("why")}
            </p>
            <span className="font-inter text-style-bold-2xl text-black">
              {t("innovation")}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-x-[3rem] gap-y-[7.7rem]">
            {innovation.map((cardI) => (
              <CardInnovation
                description={cardI.description}
                title={cardI.title}
                key={cardI.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
