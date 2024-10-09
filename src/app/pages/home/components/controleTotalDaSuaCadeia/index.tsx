import { AnimatePresence, AnimationControls, motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaRegClock } from "react-icons/fa"
import { HiOutlineChartBarSquare } from "react-icons/hi2"
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io"
import { TfiTarget } from "react-icons/tfi"
import comunicacaoBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-comunicacaoproativa.png";
import gestaoDeRiscosBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-gestaoderiscos.png";
import performanceBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-performance.png";
import rastreamentoBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-rastreamento.png"
import ModalVideoDemo from "../assistaNossasDemos/modal"
import { MdOutlineComment } from "react-icons/md"


export default function ControleTotalDaSuaCadeia() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const controlsOne: AnimationControls = useAnimation();
    const controlsTwo: AnimationControls = useAnimation();

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            controlsOne.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0, ease: "linear" }
                

            });
            controlsTwo.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0, ease: "linear" },
            });

        }
    }, [inView, controlsOne,controlsTwo]);

    const JsonList = [
        {
            index: 0,
            icon: MdOutlineComment

        },
        {
            index: 1,
            icon: HiOutlineChartBarSquare
        },
        {
            index: 2,
            icon: TfiTarget
        },
        {
            index: 3,
            icon: FaRegClock

        },

    ]

    const ListContente = [
        {
            index: 0,
            title: "Comunicação com o cliente",
            text: "Acompanhamento das entregas com atualizações automáticas e precisas.",
            image: rastreamentoBanner.src,
            list: [
                {
                    id: 4,
                    text: "Link de Tracking."
                },
                {
                    id: 5,
                    text: "Disparo por E-mail, SMS e/ou Whatsapp."
                },
                {
                    id: 6,
                    text: "Consulta de status em tempo real."
                },
                {
                    id: 7,
                    text: "Avaliação personalizada de serviços e produtos."
                },
            ]
        },

        {
            index: 1,
            title: "Análise de dados:",
            text: "Avalie o desempenho em cada etapa e otimize suas operações.",
            image: performanceBanner.src,
            list: [
                {
                    id: 8,
                    text: "Engajamento por canal"
                },
                {
                    id: 9,
                    text: "Nível de serviço por transportadora"
                },
                {
                    id: 10,
                    text: "Nível de serviço por transportadora"
                },
                {
                    id: 11,
                    text: "Status de pedido"
                },
                {
                    id: 12,
                    text: "Nível de serviço por fase"
                },
                {
                    id: 13,
                    text: "Filtros e segmentação"
                },
            ]
        },
        {
            index: 2,
            title: "Gestão da informação",
            text: "Identifique e minimize riscos de atrasos e insucessos com análises parametrizáveis.",
            image: gestaoDeRiscosBanner.src,
            list: [
                {
                    id: 14,
                    text: "Ocorrências e Prazos."
                },
                {
                    id: 15,
                    text: "Evolução histórica."
                },
                {
                    id: 16,
                    text: "Real X Planejado."
                },
                {
                    id: 17,
                    text: "Risco."
                },
                {
                    id: 18,
                    text: "Comparativos."
                },
                {
                    id: 19,
                    text: "Tendências."
                },
                {
                    id: 20,
                    text: "Ação ativa e redefinição de prazos."
                },
            ]
        },
        {
            index: 3,
            title: "Atendimento efetivo",
            text: "Interações automatizadas que garantem agilidade e redução de custos.",
            image: comunicacaoBanner.src,
            list: [
                {
                    id: 21,
                    text: "Chatbot de atendimento."
                },
                {
                    id: 22,
                    text: "Consulta de tracking automatizada."
                },
                {
                    id: 23,
                    text: "Assertividade e diminuição da ansiedade do cliente."
                },
                {
                    id: 24,
                    text: "Otimização das equipes de atendimento."
                },
            ]
        },
    ]

    const handleTeste = (i: number) => {
        setCurrentIndex(i)
    }



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
        }, 10000);


        return () => clearInterval(interval);
    }, []);



    return (
        <section id="funcionalidades" className="bg-white lg:h-auto max-w-[1996px] pt-[15%] lg:pt-0 w-full  ">

            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:justify-start lg:pt-28 h-1/4 items-start">
                    <div className="flex items-center justify-center lg:justify-start w-full lg:w-[95%] h-full">
                        <motion.div  className="lg:w-1/2 lg:flex hidden  w-full h-full">
                            <motion.div
                                key={ListContente[currentIndex].index}
                                initial={{ opacity: 0, translateX: -100 }}
                                transition={{ duration: 0.5, easing: 'linear' }}
                                animate={{ opacity: 1, translateX: 0 }} className="w-[100%]  lg:flex hidden justify-start items-center  left-0 relative h-[800px] rounded-r-2xl">
                                <Image priority key={ListContente[currentIndex].index} className=" object-cover shadow-md rounded-r-2xl h-full" alt="" src={ListContente[currentIndex].image} quality={100} width={1000} height={1000} />
                            </motion.div>
                            <ul className=" relative lg:flex hidden  gap-5 flex-col left-[-3%] top-[250px]">
                                {JsonList.map((i, key) => {
                                    return (
                                        <li key={key} className={`w-12 shadow-md h-12 hover:scale-95 border-[0.5px] border-primaryColor transition duration-500  hover:bg-custom-linear hover:border-none ${currentIndex === key ? "bg-custom-linear border-none scale-95 text-textSecondColor" : "bg-textSecondColor text-primaryColor"}  rounded-lg`}>
                                            <button onClick={() => { handleTeste(key) }} className="w-full hover:text-textSecondColor  h-full flex items-center justify-center">
                                                <i.icon fontSize={key === 1 && 2 ? 25 : 20}></i.icon>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </motion.div>
                        <motion.div ref={ref}
                            initial={{ opacity: 0, x: 100 }}
                            animate={controlsOne} className="w-[90%] lg:w-1/2 transition-all lg:pl-10 pr-0 flex flex-col justify-center h-full">
                            <h1 className="text-3xl lg:text-4xl text-left  leading-tight text-textPrimaryColor font-bold">
                                Controle total da sua cadeia de entregas em um só lugar.
                            </h1>
                            <h2 className="text-textPrimaryColor pt-2 leading-tight w-4/5 text-left  font-normal text-base">
                                A gestão completa em uma única plataforma para facilitar o dia a dia do seu e-commerce.
                            </h2>
                            <motion.div ref={ref}
                                initial={{ opacity: 0, x: -200 }}
                                animate={controlsOne} className="w-[100%] lg:hidden flex my-5 rounded-2xl relative h-full bg-[#D9D9D9] rounded-r-2xl">
                                <Image className="w-full lg:hidden flex shadow-lg rounded-2xl h-full" alt="" src={ListContente[currentIndex].image} quality={100} width={1000} height={1000} />
                            </motion.div>
                            <ul className="flex gap-5 pt-4 flex-col pb-4 left-[87%] -top-3/4">
                                {ListContente.map((i) => {
                                    return (
                                        <motion.li
                                            key={i.index} // Usamos 'i.index' como chave única para o elemento pai
                                            onClick={() => handleTeste(i.index)} // Atribuímos o index no clique
                                            transition={{ duration: 0, ease: 'linear' }}
                                            animate={{ height: currentIndex === i.index ? "max-content" : "80px" }}
                                            className={`w-full flex flex-col items-start transition-all duration-500 ${currentIndex === i.index ? "h-auto border-[#CCCBE4] text-primaryColor gap-1" : "h-16 bg-textSecondColor text-primaryColor"
                                                } justify-center p-4 shadow-md border-[0.2px] rounded-lg`}
                                        >
                                            <div className="w-full z-10 flex items-start cursor-pointer justify-start flex-col">
                                                <h3 className="text-base flex items-center justify-between w-full text-left font-semibold p-0 m-0">
                                                    {i.title}
                                                    <button
                                                        className="w-7 lg:hidden flex items-center hover:scale-90 transition justify-center rounded-lg h-7 bg-[#CCCBE4]"
                                                    >
                                                        <IoIosArrowUp className={`${currentIndex === i.index ? "" : "rotate-180"} duration-500 transition-all`} fontSize={22} />
                                                    </button>
                                                </h3>
                                                <motion.p
                                                    key={currentIndex}
                                                    initial={{ opacity: 0, translateX: 100 }}
                                                    transition={{ duration: 0.3, ease: "linear" }}
                                                    animate={{ opacity: 1, translateX: 0 }}
                                                    className={`text-sm pt-2 font-medium text-left ${currentIndex === i.index ? "flex" : "hidden"}`}>
                                                    {i.text}
                                                </motion.p>
                                                <ul>
                                                    <AnimatePresence>
                                                        {currentIndex === i.index && i.list.map((a) => {
                                                            return (
                                                                <motion.li
                                                                    key={a.id}
                                                                    initial={{ opacity: 0, translateX: 100 }}
                                                                    animate={{ opacity: 1, translateX: 0 }}

                                                                    transition={{ duration: 0.3, ease: "linear" }}
                                                                    className={`text-sm pt-2 text-left flex items-center gap-2`}
                                                                >
                                                                    <IoIosArrowForward /> <p className="font-medium">{a.text}</p>
                                                                </motion.li>
                                                            );
                                                        })}
                                                    </AnimatePresence>
                                                </ul>
                                            </div>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                            <div className=" hidden lg:flex lg:flex-row flex-col pt-3 justify-start items-center gap-2">
                                <button className="w-full lg:w-1/4 text-base h-12 hover:scale-95 transition text-textSecondColor bg-primaryColor rounded-lg">
                                    <Link href={"#demos"} className="w-full flex items-center justify-center h-full">
                                        veja a demo
                                    </Link>
                                </button>
                                <button className="w-full lg:w-2/4 text-base h-12 text-textSecondColor hover:scale-95 transition bg-secondColor rounded-lg">
                                    <Link className="w-full h-full" href={"#formulario"}>Fale com um especialista</Link>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

    )
}