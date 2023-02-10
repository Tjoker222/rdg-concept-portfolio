import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const ContactUs = () => {
  const { t } = useTranslation("contact");

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

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form && form.current)
      emailjs
        .sendForm(
          "service_50vwf1k",
          "template_4ucx0ti",
          form.current,
          "OpUjsKuLoL4-V3c1M"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };

  return (
    <>
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        id="contact"
      >
        <div className="w-full flex flex-col gap-y-[8rem] sm:flex-row sm:gap-x-[5rem] px-[2.7rem] sm:px-[23rem] items-start">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-y-[4rem] w-full"
          >
            <p className="text-black text-style-bold-2xl">{t("contact_us")}</p>
            <Input placeholder={t("full_name")} full={true} name="from_name" />
            <Input placeholder={t("email")} full={true} name="from_email" />
            <textarea
              className={`border-[0.1rem] px-xl sm:px-base sm:py-[1.5rem]
              py-[2rem]  border-solid bg-transparent border-gray-600 
              focus:outline-none text-black font-inter text-style-medium-sm`}
              name="message"
            />
            <div className="w-full flex items-end justify-end">
              <Button title={t("button_send")} full={isMobile} size="medium" />
            </div>
          </form>
          <div className="w-full flex flex-col gap-y-[2.6rem] items-center justify-center">
            <div className="w-[16rem] h-[15rem] relative">
              <Image
                src="rdg-logo.svg"
                alt="rdg concept icon"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="w-full font-inter text-center sm:text-justify text-style-regular-sx sm:text-style-medium-sm text-gray-600">
              {t("about_us")}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
