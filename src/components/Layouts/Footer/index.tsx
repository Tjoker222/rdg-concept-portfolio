import Image from "next/image";
import { Icon } from "../Icon";

export const Footer = () => {
  const socialLinks = [
    { name: "instagram" },
    { name: "facebook" },
    { name: "behance" },
    { name: "tiktok" },
  ];
  return (
    <>
      <div className="flex flex-col mt-[10rem] py-[2rem] sm:mt-[0rem] gap-y-[1.8rem] sm:gap-y-[2.3rem] w-full sm:px-[14rem] sm:py-[5.5rem] justify-between items-center sm:items-start">
        <div className="flex flex-row gap-x-[1.5rem]">
          {socialLinks.map((link) => (
            <Icon
              key={link.name}
              description={link.name}
              iconUrl={`/${link.name}.svg`}
            />
          ))}
        </div>
        <p className="w-full font-inter text-center sm:text-start text-style-medium-sx sm:text-style-medium-sm text-gray-500">
          RDG Concept · Software Development and Design 2022
        </p>
      </div>
    </>
  );
};
