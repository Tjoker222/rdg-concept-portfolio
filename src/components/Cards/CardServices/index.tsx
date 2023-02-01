import Image from "next/image";

interface CardInnovationProps {
  src: string;
  description: string;
  title: string;
  subtitle: string;
}

export const CardServices = ({ src, description, subtitle, title }: CardInnovationProps) => {
  return (
    <div className="flex flex-col gap-y-[1.3rem]">
      <div className="w-[25rem] h-[30rem] relative">
        <Image
          src={`/${src}.svg`}
          alt={description}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="font-inter text-style-bold-lg text-black">{title}</p>
      <p className="font-inter text-style-medium-sm text-gray-500">{subtitle}</p>
    </div>
  );
};
