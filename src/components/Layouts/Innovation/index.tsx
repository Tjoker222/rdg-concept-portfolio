import { useResponsiveLayout } from "@/contexts/ResponsiveLayoutProvider";
import { CardInnovation } from "@/components/Cards/CardInnovation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

export const Innovation = () => {
  const { isMobile } = useResponsiveLayout();

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const innovation = [
    {
      title: "100%",
      description:
        "Todos os nossos clientes estão 100% satisfeitos e realizando grandes vendas com nossos websites.",
    },
    {
      title: "150+",
      description:
        "Desde de que nos lançamos a RDG Concept, nossa base de clientes tem atingido mais de 150 países em todo o mundo.",
    },
    {
      title: "1:1",
      description:
        "Nossos serviços nao sao terceirizados, nosso cliente estará sempre em contato direto conosco.",
    },
    {
      title: "#1",
      description:
        "Somos a primeira Startup a criar projetos para o mercado Cripto.",
    },
    {
      title: "+5",
      description:
        "Nossos últimos projetos renderam aos nossos clientes um faturamento de +R$1.500.000,00 em vendas.",
    },
    {
      title: "R$0",
      description:
        "Após o termino do projeto oferecemos suporte 100% e R$0,00 custo adicional.",
    },
    {
      title: "Autentico",
      description:
        "Fortalecemos sua marca tornando-a inesquecível para o cliente.",
    },
    {
      title: "UI/UX",
      description:
        "Uma experiencia bem planejada pode ajudar a melhorar a navegação do usuário, facilitando seu poder de decisão.",
    },
  ];

  return (
    <>
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="flex flex-col gap-y-[10rem] px-[15rem]">
          <div className="flex flex-row gap-x-sm">
            <p className="font-inter text-style-bold-5xl text-transparent bg-clip-text bg-gradient-to-b from-violet-100 to-violet-200">
              Por que
            </p>
            <span className="font-inter text-style-bold-5xl text-black">
              gostamos de inovar
            </span>
          </div>
          <div className="grid grid-cols-4 gap-x-[3rem] gap-y-[7.7rem]">
            {innovation.map((cardI) => (
              <CardInnovation
                description={cardI.description}
                title={cardI.title}
                key={cardI.title}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
