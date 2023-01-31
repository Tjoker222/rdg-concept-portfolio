import Image from "next/image";

interface CardInnovationProps {
  src: string;
  description: string;
}

export const CardProject = ({ src, description }: CardInnovationProps) => {
  return (
    <div className="w-[31rem] h-[20rem] relative">
      <Image
        src={`/${src}.svg`}
        alt={description}
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
