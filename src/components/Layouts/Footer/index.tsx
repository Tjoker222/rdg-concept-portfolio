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
      <div className="flex flex-col gap-y-[4.3rem] w-full px-[14rem] py-[7.5rem] justify-between items-start">
        <div className="flex flex-row gap-x-[2.5rem]">
          {socialLinks.map((link) => (
            <Icon
              key={link.name}
              description={link.name}
              iconUrl={`/${link.name}.svg`}
            />
          ))}
        </div>
        <p className="font-inter text-style-medium-xl text-gray-500">
          RDG Concept · Software Development and Design 2022
        </p>
      </div>
    </>
  );
};
