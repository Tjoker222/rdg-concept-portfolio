import Image from "next/image";

interface CardInnovationProps {
  name: string;
  office: string;
  imageUrl?: string;
}

export const CardTeam = ({ name, imageUrl, office }: CardInnovationProps) => {
  return (
    <div className="w-full flex flex-col gap-y-[1.3rem] sm:w-[40rem]">
      <div className={`w-full h-[30rem] relative ${!imageUrl && 'bg-white'}`}>
        {imageUrl && (
          <Image
            src='/yuri.svg'
            alt={name}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <p className="text-black font-inter text-style-bold-lg">{name}</p>
      <p className="text-[#888888] font-inter text-style-medium-sm">{office}</p>
    </div>
  );
};
