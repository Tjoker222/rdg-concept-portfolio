import Image from "next/image";

export const Navbar = () => {
  const navigationLink = [
    { name: "Home" },
    { name: "Missão" },
    { name: "Explore" },
    { name: "Serviços" },
    { name: "Equipe" },
    { name: "Contato" },
  ];

  return (
    <>
      <div className="flex w-full px-[14rem] py-[3rem] justify-between items-center">
        <div className="flex flex-row gap-x-md items-center">
          <div className="relative w-[6rem] h-[6rem]">
            <Image
              src="/rdg-logo.svg"
              alt="Logo of RDG"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="text-style-semibold-base font-inter text-gray-600">
            RDG Concept
          </p>
        </div>
        <div className="flex flex-row gap-x-[5.3rem]">
          {navigationLink.map((nav) => (
            <p
              className="text-style-regular-base font-inter hover:text-black text-gray-700 hover:cursor-pointer"
              key={nav.name}
            >
              {nav.name}
            </p>
          ))}
        </div>
        <div className="flex flex-row gap-x-[1.5rem]">
          <p className="text-style-regular-base font-inter hover:text-black text-gray-700 hover:cursor-pointer">
            PT
          </p>
          <p className="text-style-regular-base font-inter hover:text-black text-gray-700 hover:cursor-pointer">
            EN
          </p>
        </div>
      </div>
    </>
  );
};
