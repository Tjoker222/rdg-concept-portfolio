import { CardTeam } from "@/components/Cards/CardTeam";
import { TextSlider } from "@/components/TextSlider";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Team = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const teamArr = [
    {
      name: "Yuri Rodrigues",
      office: "CEO - Lead Product Designer",
      imageUrl: "/yuri.svg",
      social: [
        { name: "linkedin", link: "s" },
        { name: "instagram", link: "s" },
        { name: "facebook", link: "s" },
        { name: "behance", link: "s" },
        { name: "tiktok", link: "s" },
      ],
    },
    {
      name: "Tobias",
      office: "Lead Dev Front End",
      imageUrl: "/tob.png",
      social: [
        { name: "linkedin", link: "s" },
        { name: "link", link: "s" },
      ],
    },
    {
      name: "Yuri Rodrigues",
      office: "CEO - Lead Product Designer",
      imageUrl: "/yuri.svg",
      social: [
        { name: "linkedin", link: "s" },
        { name: "link", link: "s" },
      ],
    },
  ];

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id='team'
    >
      <div className="w-full flex flex-col gap-y-[4rem] items-center">
        <TextSlider />
        <div className="w-full flex flex-col sm:flex-row px-[3.6rem] sm:px-[23rem] items-center gap-y-[5.3rem] sm:gap-x-[10rem]">
          {teamArr.map((team) => (
            <CardTeam
              imageUrl={team.imageUrl}
              name={team.name}
              office={team.office}
              key={team.name}
              social={team.social}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
