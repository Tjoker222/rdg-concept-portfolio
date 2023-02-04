import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSidebarMobileContext } from "@/contexts/SidebarMobileProvider";
import { SidebarMobileType } from "@/types/sidebar-mobile";
import { AnimatePresence, motion, useCycle } from "framer-motion";

type SectionOptions =
  | "home"
  | "mission"
  | "explore"
  | "services"
  | "team"
  | "contact";

export function Sidebar() {
  const { setCurrentSidebarState, CurrentSidebarState } =
    useSidebarMobileContext();

  const [selectedTopic, setSelectedTopic] = useState<String>("home");

  const options = [
    { name: "Home", tab: "home" },
    { name: "Missão", tab: "mission" },
    { name: "Explore", tab: "explore" },
    { name: "Serviços", tab: "services" },
    { name: "Equipe", tab: "team" },
    { name: "Contato", tab: "contact" },
  ];

  const scrollFun = (id: string) => {
    document
      .querySelector(`#${id}`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  function tabBar(name: string) {
    scrollFun(name);
    setSelectedTopic(name);
    setCurrentSidebarState(SidebarMobileType.CLOSE)
  }

  return (
    <AnimatePresence>
      {CurrentSidebarState === SidebarMobileType.OPEN && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{
            width: "auto",
          }}
          exit={{
            width: 0,
            transition: { duration: 0.5 },
          }}
        >
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            id="header"
            className={`w-full z-[60] h-full bg-white dark:bg-gray-700 transition-all flex fixed top-0 flex-col gap-y-xl px-[2.3rem] py-[2rem]`}
          >
            <div className="flex flex-row w-full justify-between items-center">
              <Link href={"/"} prefetch={false}>
                <div className="relative w-[5rem] h-[5rem]">
                  <Image
                    src="/rdg-logo.svg"
                    alt="Logo of RDG"
                    fill={true}
                    style={{ objectFit: "cover", opacity: 0.8 }}
                  />
                </div>
              </Link>

              <div
                className="relative w-[3.2rem] h-[3.2rem]"
                onClick={() => setCurrentSidebarState(SidebarMobileType.CLOSE)}
              >
                <Image
                  src="/X.svg"
                  alt="Lista"
                  fill={true}
                  style={{ objectFit: "cover", opacity: 0.8 }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-[4.5rem] items-center w-full h-fit">
              {options.map((option) => (
                <a
                  key={option.name}
                  onClick={() => {
                    tabBar(option.tab);
                  }}
                >
                  <div className="flex flex-row gap-x-[1.9rem] items-center cursor-pointer hover:brightness-75 transition-all">
                    <h5 className={`font-inter text-style-medium-xl ${selectedTopic===option.tab?'text-black':'text-gray-700'}`}>
                      {option.name}
                    </h5>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-row gap-x-[1.5rem] justify-center mt-[4rem]">
              <p className="text-style-regular-base font-inter hover:text-black text-gray-700 hover:cursor-pointer">
                PT
              </p>
              <p className="text-style-regular-base font-inter hover:text-black text-gray-700 hover:cursor-pointer">
                EN
              </p>
            </div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
