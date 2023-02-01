import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { SidebarMobileType } from "../../../types/sidebar-mobile";
import { useSidebarMobileContext } from "../../../contexts/SidebarMobileProvider";
import Image from "next/image";
import { useEffect } from "react";

export const Navbar = () => {
  const navigationLink = [
    { name: "Home" },
    { name: "Missão" },
    { name: "Explore" },
    { name: "Serviços" },
    { name: "Equipe" },
    { name: "Contato" },
  ];
  const { isMobile } = useResponsiveLayout();

  const { setCurrentSidebarState, CurrentSidebarState } =
    useSidebarMobileContext();

  function handleSidebarMobileChange(state: SidebarMobileType) {
    setCurrentSidebarState(state);
  }

  useEffect(() => {
    CurrentSidebarState === SidebarMobileType.OPEN
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [CurrentSidebarState]);

  return (
    <>
      <div className="flex w-full px-[2.3rem] py-[2rem] sm:px-[14rem] sm:py-[3rem] justify-between items-center">
        <div className="flex flex-row w-full sm:w-fit justify-between sm:justify-start sm:gap-x-md items-center">
          <div className="relative w-[5rem] h-[5rem]">
            <Image
              src="/rdg-logo.svg"
              alt="Logo of RDG"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>

          {isMobile ? (
            <div
              className="relative w-[3.2rem] h-[3.2rem]"
              onClick={() => handleSidebarMobileChange(SidebarMobileType.OPEN)}
            >
              <Image
                src="/Lista.svg"
                alt="Lista"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : (
            <p className="text-style-semibold-sm font-inter text-gray-600">
              RDG Concept
            </p>
          )}
        </div>
        {!isMobile && (
          <div className="flex flex-row gap-x-[5.3rem]">
            {navigationLink.map((nav) => (
              <p
                className="text-style-regular-sm font-inter hover:text-black text-gray-700 hover:cursor-pointer"
                key={nav.name}
              >
                {nav.name}
              </p>
            ))}
          </div>
        )}
        {!isMobile && (
          <div className="flex flex-row gap-x-[1.5rem]">
            <p className="text-style-regular-sm font-inter hover:text-black text-gray-700 hover:cursor-pointer">
              PT
            </p>
            <p className="text-style-regular-sm font-inter hover:text-black text-gray-700 hover:cursor-pointer">
              EN
            </p>
          </div>
        )}
      </div>
    </>
  );
};
