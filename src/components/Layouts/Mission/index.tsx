import Image from "next/image";
import { motion } from "framer-motion";

export const Mission = () => {
  const socialLinks = [
    { name: "instagram" },
    { name: "facebook" },
    { name: "behance" },
    { name: "tiktok" },
  ];
  return (
    <>
      <div className="w-full flex flex-row gap-x-[3.3rem] px-[9.1rem]">
        <div className="flex flex-row gap-x-[2.5rem]">
          <p className="font-inter text-style-medium-xl text-black">Missão</p>
          <div className="h-[7.2rem] w-[0.6rem] bg-gray-900" />
        </div>
        <div className="w-full h-[55rem] bg-[url('/background-violet.svg')] bg-cover items-start relative">
          <div className="flex flex-col gap-y-[2.8rem] mt-[7.5rem] px-[3.2rem]">
            <p className="w-[72rem] font-inter text-style-bold-3xl text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-200">
              Segredos
              <span className="font-inter text-style-bold-3xl text-black">
                : que fazem meus clientes vender mais com seus websites.
              </span>
            </p>
            <p className="w-[50rem] font-inter text-black text-style-medium-xl text-justify">
              Você vera através dos meus clientes o quão benéfico e você possuir
              um website para impulsionar as suas vendas na internet, e o melhor
              de tudo como fazer sua marca conhecida.{" "}
            </p>
          </div>
          <motion.div
            animate={{ y: "2px", x: "2px", opacity: 0 }}
            transition={{
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              duration: 7,
            }}
            className="flex flex-row items-center absolute gap-x-[2.7rem] top-[15rem] right-[5rem]"
          >
            <div className="w-[1.5rem] h-[1.5rem] relative">
              <Image
                src="/ellipse.svg"
                alt="ellipse"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="w-fit text-justify font-inter text-style-bold-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
              Logotipo + Website = Vendas Online
            </p>
          </motion.div>
          <motion.div
            animate={{ y: "2px", x: "2px", opacity: 0 }}
            transition={{
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              duration: 6,
            }}
            className="flex flex-row items-center absolute gap-x-[2.7rem] bottom-[15rem] left-[12rem]"
          >
            <div className="w-[1.5rem] h-[1.5rem] relative">
              <Image
                src="/ellipse.svg"
                alt="ellipse"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="w-[50rem] text-justify font-inter text-style-bold-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
              Um ambiente claro e sustentável para receber seus clientes de
              forma virtual.
            </p>
          </motion.div>
          <motion.div
            animate={{ y: "2px", x: "2px", opacity: 0 }}
            transition={{
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
            }}
            className="flex flex-row items-center absolute gap-x-[2.7rem] bottom-[7rem] left-[40rem]"
          >
            <div className="w-[1.5rem] h-[1.5rem] relative">
              <Image
                src="/ellipse.svg"
                alt="ellipse"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="w-fit text-justify font-inter text-style-bold-3xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
              Criar marca de qualidade e reconhecida
            </p>
          </motion.div>
          <motion.div
            animate={{ y: "2px", x: "2px", opacity: 0 }}
            transition={{
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
            }}
            className="flex flex-row items-center absolute gap-x-[2.7rem] bottom-[26rem] left-[60rem]"
          >
            <div className="w-[1.5rem] h-[1.5rem] relative">
              <Image
                src="/ellipse.svg"
                alt="ellipse"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="w-fit text-justify font-inter text-style-bold-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
              Venda rápida e intuitiva
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
