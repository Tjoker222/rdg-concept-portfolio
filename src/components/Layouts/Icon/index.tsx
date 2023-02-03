import { motion } from "framer-motion";
import Image from "next/image";
interface IconProps {
  iconUrl: string;
  description: string;
}

export const Icon = ({ iconUrl, description }: IconProps) => {
  return (
    <motion.div
      animate={{ y: [4, -4] }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
      }}
      className="w-[1.8rem] h-[1.8rem] relative"
    >
      <Image
        src={iconUrl}
        alt={description}
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
};
