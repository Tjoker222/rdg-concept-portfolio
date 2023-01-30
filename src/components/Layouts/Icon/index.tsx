import Image from "next/image";
interface IconProps {
  iconUrl: string;
  description: string;
}

export const Icon = ({ iconUrl, description }: IconProps) => {
  return (
    <div className="w-[2.4rem] h-[2.4rem] relative">
      <Image
        src={iconUrl}
        alt={description}
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
