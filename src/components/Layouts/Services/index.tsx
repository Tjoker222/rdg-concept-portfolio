import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CardServices } from "@/components/Cards/CardServices";
import useTranslation from "next-translate/useTranslation";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Services = () => {
  const { isMobile } = useResponsiveLayout();

  const {t} = useTranslation('services')

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
      title: t('visual_title'),
      subtitle: t('visual_subtitle'),
      src: "projects/visual",
      description: "Visual Identity",
    },
    {
      title: t('ecommerce_title'),
      subtitle: t('ecommerce_subtitle'),
      src: "projects/ecommerce",
      description: "Websites and e-commerce",
    },
    {
      title: t('mobile_title'),
      subtitle: t('mobile_subtitle'),
      src: "projects/mobileapp",
      description: "Mobile App",
    },
  ];

  return (
    <>
      <div
        className="box"
        ref={ref}
        id='services'
      >
        {isMobile ? (
          <div className="px-[4.1rem] flex flex-col gap-y-[4.8rem] items-center">
            <p className="text-style-bold-xl text-transparent bg-clip-text bg-white">
              {t('services')}
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
                  <p className="text-style-bold-base font-inter text-gray-800 text-center">
                    {service.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-x-[3.3rem] px-[9.1rem]">
            <div className="hidden sm:flex flex-row gap-x-[2rem]">
              <p className="font-inter text-style-medium-xl sm:text-style-medium-base text-black">
                {t('services')}
              </p>
              <div className="h-[5.2rem] w-[0.6rem] bg-white" />
            </div>

            <div className="flex flex-row gap-x-[13.6rem]">
              {servicesArr.map((service) => (
                <CardServices
                  title={service.title}
                  subtitle={service.subtitle}
                  src={service.src}
                  description={service.description}
                  key={service.title}
                  mediaType='image'
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
