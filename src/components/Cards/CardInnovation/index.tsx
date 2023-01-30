interface CardInnovationProps {
  title: string;
  description: string;
}

export const CardInnovation = ({ title, description }: CardInnovationProps) => {
  return (
    <div className="w-fit flex flex-row gap-x-[2rem] items-start">
      <div className="h-[2.7rem] w-[1rem] bg-gray-900" />
      <div className="flex flex-col gap-y-md">
        <p className="text-black font-inter text-style-bold-5xl">{title}</p>
        <p className="text-gray-400 font-inter text-style-medium-xl text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};
