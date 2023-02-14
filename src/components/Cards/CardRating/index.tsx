import Image from "next/image";

interface CardRatingProps {
  name: string;
  description: string;
  imageUrl: string;
}

export const CardRating = ({
  description,
  imageUrl,
  name,
}: CardRatingProps) => {
  const hash_star = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-y-md py-base px-8 items-start rounded-[4rem] shadow-md bg-white">
      <div className="flex flex-row gap-x-base items-center">
        <div className="w-[6rem] h-[6em] relative rounded-full">
          <Image
            src={imageUrl}
            alt={description}
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-y-md">
          <p className="font-inter text-style-semibold-sm text-black">{name}</p>
          <div className="flex flex-row gap-x-1">
            {hash_star.map((_, i) => (
              <div className="w-[6rem] h-[6em] relative rounded-full" key={i}>
                <Image
                  src="/star.svg"
                  alt="star"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="font-inter text-style-medium-sm text-black">
        {description}
      </p>
    </div>
  );
};
