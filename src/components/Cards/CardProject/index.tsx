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
    <Link href={link} target="_blank" className="hover:scale-95 transition-all">
      <div className="w-[31rem] h-[20rem] relative shadow-2xl rounded-2xl">
        <Image
          src={`/projects/${src}.svg`}
          alt={description}
          fill={true}
          style={{ objectFit: "cover" }}
          className='rounded-2xl'
        />
      </div>
    </Link>
  );
};
