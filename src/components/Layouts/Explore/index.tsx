import { CardProject } from "@/components/Cards/CardProject";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface MenuProps {
  bodyTab: "projects" | "videos" | string;
}
interface BodyProps {
  bodyTab: "projects" | "videos" | string;
}

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Explore = () => {
  const { isMobile } = useResponsiveLayout();

  const [bodyTab, setBodyTab] = useState<"projects" | "videos">("projects");

  function handleChangeBodyOnChangeTab(newTab: string) {
    if (newTab === bodyTab) return;
    setBodyTab(newTab as "projects" | "videos");
  }

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
        <div className="flex flex-col gap-y-[4rem]">
          <div className="flex flex-row gap-x-sm px-[21rem]">
            <p className="font-inter text-style-bold-5xl text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-200">
              O que
            </p>
            <span className="font-inter text-style-bold-5xl text-black">
              gostamos de criar
            </span>
          </div>
          <div className="flex flex-col gap-y-[1rem]">
            <div className="w-fit flex flex-row gap-x-[2rem] items-start px-[9.1rem]">
              <p className="text-black font-inter text-style-bold-xl">
                Explore
              </p>
              <div className="h-[7.2rem] w-[0.6rem] bg-gray-900" />
            </div>
            <Tabs.Root
              onValueChange={handleChangeBodyOnChangeTab}
              defaultValue={bodyTab}
              className='flex flex-col gap-y-[2rem]'
            >
              <Menu bodyTab={bodyTab} />
              <Body bodyTab={bodyTab} />
            </Tabs.Root>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Menu = ({ bodyTab }: MenuProps) => {
  const selected = "border-black text-black";
  const notSelected =
    "border-transparent text-gray-200 hover:text-gray-400 hover:border-gray-400";

  return (
    <div className="w-full h-fit px-lg sm:px-[21rem]">
      <Tabs.List className="w-full h-fit flex flex-row gap-base sm:gap-xl border-b-[0.1rem] border-gray-100 duration-300">
        <Tabs.Trigger
          value="projects"
          className={`w-fit h-fit pb-sm text-style-semibold-sm sm:text-style-semibold-lg border-b-[0.3rem] duration-300 ${
            bodyTab === "projects" ? selected : notSelected
          }`}
        >
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger
          value="videos"
          className={`w-fit h-fit pb-sm text-style-semibold-sm sm:text-style-semibold-lg border-b-[0.3rem] duration-300 ${
            bodyTab === "videos" ? selected : notSelected
          }`}
        >
          Videos
        </Tabs.Trigger>
      </Tabs.List>
    </div>
  );
};

const Body = ({ bodyTab }: BodyProps) => {
  const content = [{ name: "enutri" }, { name: "crypto" }, { name: "barber" }];

  return (
    <div className="w-full h-fit flex flex-col items-center gap-lg px-[21rem]">
      <Tabs.Content value="projects">
        <div className="flex flex-row gap-x-[4.2rem]">
          {content.map((project) => (
            <CardProject
              src={project.name}
              description={project.name}
              key={project.name}
            />
          ))}
        </div>
      </Tabs.Content>

      <Tabs.Content value="videos">
        <div className="flex flex-row gap-x-[4.2rem]">
          {content.map((project) => (
            <CardProject
              src={project.name}
              description={project.name}
              key={project.name}
            />
          ))}
        </div>
      </Tabs.Content>
    </div>
  );
};
