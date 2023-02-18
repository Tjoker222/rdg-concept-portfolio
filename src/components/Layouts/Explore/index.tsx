import { CardProject } from "@/components/Cards/CardProject";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, useAnimation } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
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

  const { t } = useTranslation("explore");

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
      <div
        className="box"
        ref={ref}
        id="explore"
      >
        <div className="flex flex-col gap-y-[2rem]">
          <div className="flex flex-row gap-x-sm w-full sm:justify-start justify-center sm:px-[21rem]">
            <p className="font-inter text-style-bold-xl sm:text-style-bold-2xl text-transparent bg-clip-text bg-white">
              {t("what")}
            </p>
            <span className="font-inter text-style-bold-xl sm:text-style-bold-2xl text-black">
              {t("create")}
            </span>
          </div>
          <div className="flex flex-col gap-y-[1rem]">
            {isMobile ? (
              <Body bodyTab={"projects"} />
            ) : (
              <>
                <div className="flex flex-row gap-x-[2rem] items-start px-[9.1rem]">
                  <p className="text-black font-inter text-style-medium-base">
                    {t("explore")}
                  </p>
                  <div className="h-[5.2rem] w-[0.6rem] bg-white" />
                </div>
                <Tabs.Root
                  onValueChange={handleChangeBodyOnChangeTab}
                  defaultValue={bodyTab}
                  className="flex flex-col gap-y-[2rem]"
                >
                  <Menu bodyTab={bodyTab} />
                  <Body bodyTab={bodyTab} />
                </Tabs.Root>
              </>
            )}
          </div>
          {!isMobile && (
            <Link href={"https://www.behance.net/YuriRLima"} target="_blank">
              <div className="w-full items-center flex justify-center mt-[2rem] flex-col gap-y-[0.2rem]">
                <p className="font-inter text-style-medium-lg text-gray-600 hover:cursor-pointer">
                  {t("see_more")}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

const Menu = ({ bodyTab }: MenuProps) => {
  const selected = "border-black text-black";
  const notSelected =
    "border-transparent text-gray-100 hover:text-gray-600 hover:border-gray-400";

  return (
    <div className="px-lg sm:px-[21rem]">
      <Tabs.List className="flex flex-row gap-base sm:gap-xl border-b-[0.1rem] border-white duration-300">
        <Tabs.Trigger
          value="projects"
          className={`pb-sm text-style-semibold-sm sm:text-style-semibold-lg border-b-[0.3rem] duration-300 ${
            bodyTab === "projects" ? selected : notSelected
          }`}
        >
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger
          value="videos"
          className={`pb-sm text-style-semibold-sm sm:text-style-semibold-lg border-b-[0.3rem] duration-300 ${
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
  const content = [
    {
      name: "enutri",
      link: "https://www.behance.net/gallery/160028143/Enutri-Suplementos",
    },
    {
      name: "crypto",
      link: "https://www.behance.net/gallery/154640205/CRYPTO-RIG-CLOUD-MINING",
    },
    {
      name: "barber",
      link: "https://www.behance.net/gallery/156999299/Amigo-Barber-Improving-business",
    },
  ];
  const { isMobile } = useResponsiveLayout();

  return (
    <div className="w-full h-fit flex flex-col items-center gap-lg px-[2.4rem] sm:px-[21rem]">
      {isMobile ? (
        <div className="flex flex-col gap-y-[3.4rem]">
          {content.map((project) => (
            <CardProject
              src={project.name}
              description={project.name}
              key={project.name}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <>
          <Tabs.Content value="projects">
            <div className="flex flex-row gap-x-[4.2rem]">
              {content.map((project) => (
                <CardProject
                  src={project.name}
                  description={project.name}
                  key={project.name}
                  link={project.link}
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
                  link={project.link}
                />
              ))}
            </div>
          </Tabs.Content>
        </>
      )}
    </div>
  );
};
