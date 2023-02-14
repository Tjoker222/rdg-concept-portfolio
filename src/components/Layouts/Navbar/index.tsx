import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { SidebarMobileType } from "../../../types/sidebar-mobile";
import { useSidebarMobileContext } from "../../../contexts/SidebarMobileProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LangProvider";
import { Languages } from "@/types/languages";
import useTranslation from "next-translate/useTranslation";

export const Navbar = () => {
  const { t } = useTranslation("navbar");

  const navigationLink = [
    { name: t("home"), tab: "home" },
    { name: t("mission"), tab: "mission" },
    { name: t("explore"), tab: "explore" },
    { name: t("services"), tab: "services" },
    { name: t("team"), tab: "team" },
    { name: t("contact"), tab: "contact" },
  ];
  const [showBackground, setShowBackground] = useState(false);

  const [selectedTopic, setSelectedTopic] = useState<String>("home");

  const { isMobile } = useResponsiveLayout();

  const { handleChangeLanguage, selectedLanguage } = useLanguage();

  const { setCurrentSidebarState, CurrentSidebarState } =
    useSidebarMobileContext();

  function handleSidebarMobileChange(state: SidebarMobileType) {
    setCurrentSidebarState(state);
  }

  const handleWithScroll = (pageYOffset: number) => {
    if (pageYOffset > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  const scrollFun = (id: string) => {
    document
      .querySelector(`#${id}`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  function tabBar(name: string) {
    scrollFun(name);
    setSelectedTopic(name);
  }

  useEffect(() => {
    CurrentSidebarState === SidebarMobileType.OPEN
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    const onScroll = () => handleWithScroll(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [CurrentSidebarState]);

  return (
    <>
      <div
        className={`flex w-full fixed top-0 z-50 py-[2rem] ${
          showBackground &&
          "backdrop-blur-sm shadow-md shadow-gray-200 bg-gray-50/80"
        } px-[2.3rem] sm:px-[14rem] sm:py-[3rem] justify-between items-center`}
      >
        <div className="flex flex-row w-full sm:w-fit justify-between sm:justify-start sm:gap-x-md items-center">
          <div
            className="relative w-[6rem] h-[5rem]"
            onClick={() => {
              tabBar("home");
            }}
          >
            <Image
              src="/rdg-logo.svg"
              priority={true}
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
                src="/icon/Lista.svg"
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
                className={`text-style-regular-sm font-inter ${
                  selectedTopic === nav.tab ? "text-black" : "text-gray-700"
                } hover:cursor-pointer`}
                key={nav.name}
                onClick={() => {
                  tabBar(nav.tab);
                }}
              >
                {nav.name}
              </p>
            ))}
          </div>
        )}
        {!isMobile && (
          <div
            className="flex flex-row gap-x-[1.5rem]"
            onClick={() =>
              selectedLanguage === "english"
                ? handleChangeLanguage(Languages.PT)
                : handleChangeLanguage(Languages.EN)
            }
          >
            <p
              className={`text-style-regular-sm font-inter ${
                selectedLanguage === "português"
                  ? "text-black"
                  : "text-gray-700"
              } hover:cursor-pointer`}
            >
              PT
            </p>
            <p
              className={`text-style-regular-sm font-inter ${
                selectedLanguage === "english" ? "text-black" : "text-gray-700"
              } hover:cursor-pointer`}
            >
              EN
            </p>
          </div>
        )}
      </div>
    </>
  );
};
