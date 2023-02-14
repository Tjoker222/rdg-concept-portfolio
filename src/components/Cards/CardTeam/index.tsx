import Image from "next/image";
import Link from "next/link";

interface CardTeamProps {
  name: string;
  office: string;
  imageUrl?: string;
  social: { name: string; link: string }[];
}

export const CardTeam = ({
  name,
  imageUrl,
  office,
  social,
}: CardTeamProps) => {
  return (
    <div className="flex flex-col gap-y-[1.3rem] w-full sm:w-[40rem]">
      <div className={`h-[30rem] relative ${!imageUrl && "bg-white"}`}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={name}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <p className="text-black font-inter text-style-bold-xl">{name}</p>
      <p className="text-gray-600 font-inter text-style-medium-sm">{office}</p>
      <div className="flex flex-row items-start gap-x-md">
        {social.map((networks) => (
          <Link href={networks.link} key={networks.name} target='_blank' className="hover:scale-125 transition-all">
            <div className={`h-[1.8rem] w-[1.8rem] relative`}>
              <Image
                src={`/social/${networks.name}.svg`}
                alt={networks.name}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
