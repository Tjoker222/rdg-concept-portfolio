import { Button } from "@/components/Button";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-y-[26rem]">
        <FirstBody />
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
                Você vera através dos meus clientes o quão benéfico e você
                possuir um website para impulsionar as suas vendas na internet,
                e o melhor de tudo como fazer sua marca conhecida.{" "}
              </p>
            </div>
            <div className="flex flex-row items-center absolute gap-x-[2.7rem] top-[15rem] right-[5rem]">
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
            </div>
            <div className="flex flex-row items-center absolute gap-x-[2.7rem] bottom-[15rem] left-[12rem]">
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
            </div>
            <div className="flex flex-row items-center absolute gap-x-[2.7rem] bottom-[7rem] left-[40rem]">
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
            </div>
            <div className="flex flex-row items-center absolute gap-x-[2.7rem] bottom-[26rem] left-[60rem]">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FirstBody = () => {
  return (
    <div className="w-full flex flex-row mt-[8rem] px-[21rem]">
      <div className="flex flex-col gap-y-[10.6rem] items-start">
        <div className="flex flex-col gap-y-[2.8rem]">
          <p className="w-[89rem] font-inter text-style-bold-6xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
            RDG Concept
            <span className="font-inter text-style-bold-6xl text-black">
              : seu business com um novo conceito.
            </span>
          </p>
          <p className="w-[57rem] font-inter text-justify text-style-medium-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-200">
            Revolucionamos o mercado de identidade visual e design de interface
            para Apps e Websites.
          </p>
        </div>
        <div className="flex flex-row gap-x-xl">
          <Button
            title="Já possuo negócio"
            size="small"
            colorVariant="primary"
          />
          <Button
            title="Começar negócio"
            size="small"
            colorVariant="secondary"
          />
        </div>
      </div>
      <div className="flex relative">
        <div className="absolute right-[5rem] top-[10rem] flex flex-col items-center">
          <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
          <div className="w-[10.7rem] h-[10.7rem] relative">
            <Image
              src="/react-icon.svg"
              alt="react"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
        </div>
        <div className="absolute left-[1rem] top-[17rem] flex flex-col items-center">
          <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
          <div className="w-[8.7rem] h-[8.7rem] relative">
            <Image
              src="/notion-icon.svg"
              alt="notion"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
        </div>
        <div className="absolute left-[6rem] bottom-[20rem] flex flex-col items-center">
          <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
          <div className="w-[14.7rem] h-[14.7rem] relative">
            <Image
              src="/figma-icon.svg"
              alt="figma"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
        </div>
        <div className="absolute left-[22rem] top-[10rem] flex flex-col items-center">
          <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
          <div className="w-[7.7rem] h-[7.7rem] relative">
            <Image
              src="/github-icon.svg"
              alt="github"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-[10rem] w-[0rem] border-dashed border-2 border-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Home;
