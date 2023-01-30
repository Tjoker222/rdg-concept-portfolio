import Image from "next/image";
import { Button } from "@/components/Button";
import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";


export const Business = () => {

  const {isMobile} = useResponsiveLayout()

  return (
    <>
      <div className="w-full flex flex-row mt-[5rem] sm:mt-[8rem] px-[3.4rem] sm:px-[21rem]">
        <div className="flex flex-col gap-y-[4rem] sm:gap-y-[10.6rem] items-center sm:items-start">
          <div className="flex flex-col gap-y-[2.8rem]">
            <p className="sm:w-[89rem] font-inter text-center sm:text-start text-style-bold-5xl sm:text-style-bold-6xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
              RDG Concept
              <span className="font-inter text-style-bold-5xl sm:text-style-bold-6xl text-black">
                : seu business com um novo conceito.
              </span>
            </p>
            <p className="sm:w-[57rem] font-inter text-center sm:text-justify text-style-medium-base sm:text-style-medium-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
              Revolucionamos o mercado de identidade visual e design de
              interface para Apps e Websites.
            </p>
          </div>
          <div className="flex flex-col gap-y-xl sm:flex-row sm:gap-x-xl">
            <Button
              title="Já possuo negócio"
              size="small"
              colorVariant="primary"
            />
            <Button
              title="Começar negócio"
              size="small"
              colorVariant="secondary"
            />
          </div>
        </div>
        {!isMobile && <div className="hidden sm:flex relative">
          <div className="absolute right-[5rem] top-[10rem] flex flex-col items-center">
            <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
            <div className="w-[10.7rem] h-[10.7rem] relative">
              <Image
                src="/react-icon.svg"
                alt="react"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
          </div>
          <div className="absolute left-[1rem] top-[17rem] flex flex-col items-center">
            <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
            <div className="w-[8.7rem] h-[8.7rem] relative">
              <Image
                src="/notion-icon.svg"
                alt="notion"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
          </div>
          <div className="absolute left-[6rem] bottom-[20rem] flex flex-col items-center">
            <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
            <div className="w-[14.7rem] h-[14.7rem] relative">
              <Image
                src="/figma-icon.svg"
                alt="figma"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
          </div>
          <div className="absolute left-[22rem] top-[10rem] flex flex-col items-center">
            <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
            <div className="w-[7.7rem] h-[7.7rem] relative">
              <Image
                src="/github-icon.svg"
                alt="github"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
          </div>
        </div>}
      </div>
    </>
  );
};
