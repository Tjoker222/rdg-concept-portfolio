import Image from "next/image";
import Link from "next/link";

interface CardInnovationProps {
  src: string;
  description: string;
  link: string;
}

export const CardProject = ({
  src,
  description,
  link,
}: CardInnovationProps) => {
  return (
    <Link href={link} target="_blank" className="hover:scale-105 transition-all">
      <div className="w-[31rem] h-[20rem] relative">
        <Image
          src={`/${src}.svg`}
          alt={description}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
    </Link>
  );
};
