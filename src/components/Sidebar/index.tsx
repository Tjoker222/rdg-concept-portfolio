import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSidebarMobileContext } from "@/contexts/SidebarMobileProvider";
import { SidebarMobileType } from "@/types/sidebar-mobile";

type SectionOptions =
  | "home"
  | "mission"
  | "explore"
  | "services"
  | "team"
  | "contact";

export function Sidebar() {
  const { push, pathname } = useRouter();
  const [selectedOption, setSelectedOption] = useState<SectionOptions>("home");
  const { setCurrentSidebarState, CurrentSidebarState } =
    useSidebarMobileContext();

  return (
    <div
      id="header"
      className={`w-full z-50 h-full bg-white dark:bg-gray-700 transition-all ${
        CurrentSidebarState === SidebarMobileType.CLOSE
          ? "hidden"
          : "flex fixed top-0 animate-slide-in-from-top"
      } flex-col gap-y-xl px-[2.3rem] py-[2rem]`}
    >
      <div className="flex flex-row w-full justify-between items-center">
        <Link href={"/"} prefetch={false}>
          <div className="relative w-[6.1rem] h-[6rem]">
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
        <a>
          <div className="flex flex-row gap-x-[1.9rem] items-center cursor-pointer hover:brightness-75 transition-all">
            <h5 className="font-inter text-style-medium-xl text-gray-700 hover:text-black">
              Home
            </h5>
          </div>
        </a>

        <a>
          <div className="flex flex-row gap-x-[1.9rem] items-center cursor-pointer hover:brightness-75 transition-all">
            <h5 className="font-inter text-style-medium-xl text-gray-700 hover:text-black">
              Missão
            </h5>
          </div>
        </a>

        <a>
          <div className="flex flex-row gap-x-[1.9rem] items-center cursor-pointer hover:brightness-75 transition-all">
            <h5 className="font-inter text-style-medium-xl text-gray-700 hover:text-black">
              Explore
            </h5>
          </div>
        </a>

        <a>
          <div className="flex flex-row gap-x-[1.9rem] items-center cursor-pointer hover:brightness-75 transition-all">
            <h5 className="font-inter text-style-medium-xl text-gray-700 hover:text-black">
              Serviços
            </h5>
          </div>
        </a>

        <a>
          <div className="flex flex-row gap-x-[1.9rem] items-center cursor-pointer hover:brightness-75 transition-all">
            <h5 className="font-inter text-style-medium-xl text-gray-700 hover:text-black">
              Equipe
            </h5>
          </div>
        </a>

        <a>
          <div className="flex flex-row gap-x-[1.9rem] items-center cursor-pointer hover:brightness-75 transition-all">
            <h5 className="font-inter text-style-medium-xl text-gray-700 hover:text-black">
              Contato
            </h5>
          </div>
        </a>
      </div>

      <div className="flex flex-row gap-x-[1.5rem] justify-center mt-[4rem]">
        <p className="text-style-regular-base font-inter hover:text-black text-gray-700 hover:cursor-pointer">
          PT
        </p>
        <p className="text-style-regular-base font-inter hover:text-black text-gray-700 hover:cursor-pointer">
          EN
        </p>
      </div>
    </div>
  );
}
