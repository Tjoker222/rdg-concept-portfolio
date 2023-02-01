import Image from "next/image";

interface CardInnovationProps {
  src?: string;
  description: string;
  title: string;
  subtitle: string;
  mediaType: "image" | "video";
}

export const CardServices = ({
  src,
  description,
  subtitle,
  title,
  mediaType,
}: CardInnovationProps) => {
  return (
    <>
      {mediaType === "image" ? (
        <div className="flex flex-col gap-y-[1.3rem]">
          <div className="sm:w-[25rem] h-[30rem] relative">
            <Image
              src={`/${src}.svg`}
              alt={description}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="font-inter text-style-bold-lg text-black">{title}</p>
          <p className="font-inter text-style-medium-sm text-gray-500">
            {subtitle}
          </p>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-y-[2.7rem]">
          <div className="bg-white flex justify-center items-center w-full sm:w-[25rem] h-[50rem]">
            <div className="w-[3.2rem] h-[3.2rem] relative">
              <Image
                src={`/Play.svg`}
                alt="play button"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[1.4rem]">
            <p className="font-inter text-style-bold-lg text-black">{title}</p>
            <p className="font-inter text-style-medium-sm text-gray-500">
              {subtitle}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
