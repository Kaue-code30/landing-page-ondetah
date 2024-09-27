import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import recompraBanner from "@/app/pages/home/assets/transformeSeuNegocio/aumento-de-recompra.png"
import competitividadeBanner from "@/app/pages/home/assets/transformeSeuNegocio/competitividade.png";
import ocorrenciasBanner from "@/app/pages/home/assets/transformeSeuNegocio/ocorrencias.png";
import reducaoDeCustoBanner from "@/app/pages/home/assets/transformeSeuNegocio/reducao-de-custos.png";



export default function TransFormeSeuNegocio() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [side, setSide] = useState(false);





    const ButtonList = [
        {
            textButton: "Prazos competitivos",
            index: 0,
        },
        {
            textButton: "Visibilidade de ocorrências",
            index: 1,
        },
        {
            textButton: "Redução de custos",
            index: 2,
        },
        {
            textButton: "Aumento de recompra",
            index: 3,
        },

    ]

    const JsonList = [
        {
            index: 0,
            title: "Competitividade em prazos de entrega:",
            text: "Com dados históricos e previsões detalhadas, nossa plataforma permite a análise de risco de atrasos por transportadora, região e sub-região. Antecipe problemas com a matriz de risco e ajuste prazos de forma estratégica, garantindo uma experiência de entrega superior e alinhada com as expectativas dos clientes",
            imagem: competitividadeBanner.src
        },
        {
            index: 1,
            title: "Visibilidade da gestão de ocorrência",
            text: "Gerencie todas as ocorrências de forma segmentada por transportadora, região ou operação. Visualize sua operação com mapas de calor e monitore SLAs em cada fase. Identifique gargalos e ineficiências com análises de performance detalhadas, aprimorando a gestão de prazos, inatividade e a eficiência das entregas.",
            imagem: ocorrenciasBanner.src
        },
        {
            index: 2,
            title: "Redução de custos com SAC",
            text: "Nossos recursos integram status de pedidos diretamente com as transportadoras, enviando atualizações proativas por e-mail e push para cada etapa da entrega. O processo inclui avaliação personalizada sem custos adicionais. Acompanhe o engajamento por canal e transportadora e otimize a comunicação com o cliente.",
            imagem: reducaoDeCustoBanner.src
        },
        {
            index: 3,
            title: "Aumento no índice de recompra",
            text: "Monitore entregas finalizadas, adiantadas ou atrasadas e compare o desempenho de transportadoras com prazos planejados. Use análises de mapa de calor e avaliação personalizada para medir a satisfação dos seus clientes e utilize todas as informações  geradas no monitoramento para um atendimento ágil via chat, resultando em um aumento significativo na recompra.",
            imagem: recompraBanner.src
        },
    ]

    const handleTeste = (i: number) => {
        setCurrentIndex(i)
    }

    const handleNext = () => {

        setCurrentIndex((prevIndex) => (prevIndex + 1) % JsonList.length);
        setSide(true);
    };
    const handlePrevious = () => {

        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? JsonList.length - 1 : prevIndex - 1
        );
        setSide(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
        }, 20000);


        return () => clearInterval(interval);
    }, []);


    return (
        <section className="bg-white lg:h-auto max-w-[1996px] pt-[15%] lg:pt-0 w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:pt-28 h-1/4 items-center">
                    <div className="flex  lg:flex-col flex-col items-center pb-10 justify-start w-[90%] lg:w-[77%] h-full">
                        <div className="flex flex-col items-center gap-5 w-full lg:w-3/5 leading-normal">
                            <h1 className="text-3xl lg:text-4xl text-left  leading-tight text-textPrimaryColor font-bold">
                                Transforme o seu negócio.
                            </h1>
                            <h2 className="text-textPrimaryColor pt-2 leading-tight lg:text-center text-left w-full font-normal text-base lg:text-lg">
                                Confira os benefícios do Ondetah.
                            </h2>
                        </div>
                        <div className="mt-3 lg:flex w-full hidden justify-center items-center gap-5 h-16 ">
                            {ButtonList.map((i, key) => {
                                return (
                                    <span className={`${currentIndex === key ? "bg-primaryColor text-white" : "text-textPrimaryColor"} border ${key === 1 ? "w-[280px]" : ""} h-12 w-[230px] hover:scale-95 hover:bg-primaryColor transition hover:text-textSecondColor  rounded-lg px-3`} key={key}>
                                        <button onClick={() => handleTeste(key)} className="w-full h-full">
                                            {i.textButton}
                                        </button>
                                    </span>
                                )
                            })}
                        </div>
                        <div className="  lg:flex hidden lg:mt-0 mt-3 relative top-[180px]  lg:gap-0 gap-10 justify-between w-full">
                            <button onClick={() => handlePrevious()} className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]">
                                <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={27} />
                            </button>
                            <button onClick={() => handleNext()} className="w-10 h-10 flex hover:scale-95 transition rounded-lg hover: items-center justify-center  bg-[#CCCBE4]">
                                <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={27} />
                            </button>


                        </div>
                        <div className="lg:w-[80%] w-full mt-5 flex justify-center items-center lg:flex-row gap-5 lg:gap-10 flex-col-reverse  h-auto">
                            <AnimatePresence>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, translateX: side ? 50 : -50 }}
                                    animate={{ opacity: 1, translateX: 0 }}
                                    transition={{ duration: 0.5, ease: "linear" }}
                                    className="lg:w-1/2 w-full h-full flex flex-col gap-5 items-start lg:items-start justify-center">
                                    <h1 className="text-3xl lg:text-3xl text-left text-black font-bold">
                                        {JsonList[currentIndex].title}
                                    </h1>
                                    <h2 className="text-black text-left text-[15px] w-full lg:w-[90%]">
                                        {JsonList[currentIndex].text}
                                    </h2>
                                    <button className="w-full lg:w-[200px] text-textSecondColor hover:scale-95 transition h-12 rounded-lg bg-secondColor">
                                        <Link href={"#demos"} className="w-full h-full">
                                        veja a demo
                                        </Link>
                                       
                                    </button>
                                </motion.div>
                                <div className=" relative flex lg:hidden lg:mt-0 mt-0 top-[40%] lg:gap-0 gap-10 justify-between w-[100%]">
                                    <button onClick={() => handlePrevious()} className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]">
                                        <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={25} />
                                    </button>
                                    <button onClick={() => handleNext()} className="w-10 h-10 flex hover:scale-95 transition rounded-lg hover: items-center justify-center  bg-[#CCCBE4]">
                                        <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={25} />
                                    </button>
                                </div>
                                <motion.div
                                    key={currentIndex + 5}
                                    initial={{ opacity: 0, translateX: side ? 50 : -50 }}
                                    animate={{ opacity: 1, translateX: 0 }}
                                    transition={{ duration: 0.5, ease: "linear" }}
                                    className="lg:w-1/2 w-full h-full flex flex-col gap-5 items-center justify-center">
                                    <Image className="w-full object-cover rounded-2xl  lg:rounded-2xl flex" width={1000}  height={100} src={JsonList[currentIndex].imagem} alt="Imagem ondetag"></Image>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}