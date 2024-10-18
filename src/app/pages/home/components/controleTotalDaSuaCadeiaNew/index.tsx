import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaRegBell, FaRegStar } from "react-icons/fa"
import comunicacaoBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-comunicacaoproativa.png";
import gestaoDeRiscosBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-gestaoderiscos.png";
import performanceBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-performance.png";
import rastreamentoBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-rastreamento.png"
import { BsChatLeftText } from "react-icons/bs"
import { ImStatsBars } from "react-icons/im"
import { button } from "framer-motion/client"
import { IconType } from 'react-icons';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { PiChatTextBold } from "react-icons/pi"


export default function ControleTotalDaSuaCadeia() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isIncrement, setIncrement] = useState(true)

    const handleCurrentIndex = (index: number) => {
        setCurrentIndex(index)

    }

    const ButtonList = [
        {
            title: "Comunicação com o cliente",
            index: 0,
            icon: BsChatLeftText,
            color: "29265B"
        },
        {
            title: "Análise de dados",
            index: 1,
            icon: ImStatsBars,
            color: "BDF5EC"
        },
        {
            title: "Gestão da informação",
            index: 2,
            icon: FaRegBell,
            color: "CCCBE4"
        },
        {
            title: "Atendimento efetivo",
            index: 3,
            icon: FaRegStar,
            color: "D9D9D9"
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
                    text: "Avaliação personalizada de serviços."
                },
            ]
        },

        {
            index: 1,
            title: "Análise de dados",
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



    const handleNext = (index: number) => {
        setCurrentIndex(index)
        if (index >= 2) {
            setIncrement(true)
        } else {
            setIncrement(false)
        }
    }

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const handleTouchStart = (event: any) => {
        // Pega as coordenadas do ponto inicial do toque
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: any) => {
        // Pega as coordenadas do ponto final do toque
        touchEndX = event.changedTouches[0].clientX;
        touchEndY = event.changedTouches[0].clientY;

        // Calcula a diferença entre o ponto inicial e final
        handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Deslize horizontal
            if (diffX > 0) {
                setCurrentIndex(currentIndex === 0 ? 3 : currentIndex - 1)

                setIncrement(false)
            } else {
                setCurrentIndex(currentIndex === 3 ? 0 : currentIndex + 1)
                setIncrement(true)
            }
        }
    };



    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white h-auto pt-[100px] pb-[60px] ">
            <div className="w-[90%] lg:w-full max-w-[1200px] gap-5 lg:gap-4 h-full flex flex-col items-center justify-between">

                <div className="flex flex-col items-center gap-3 w-full leading-normal">
                    <h1 className="text-3xl lg:text-4xl lg:text-center text-left  leading-tight text-textPrimaryColor font-bold">
                        Controle total da sua cadeia de entregas em um só lugar.
                    </h1>
                    <h2 className="text-textPrimaryColor leading-tight lg:text-center text-left w-full font-normal text-base lg:text-lg">
                        A gestão completa em uma única plataforma para facilitar o dia a dia do seu e-commerce.
                    </h2>
                </div>

                <motion.div
                    initial={{ translateX: isIncrement ? 100 : -100, opacity: 0 }}
                    animate={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'linear' }}
                    key={currentIndex}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className="w-full h-[630px] p-5 flex-col flex lg:hidden  rounded-2xl gap-5 border items-center mb-2 justify-start shadow-md">
                    <div className="h-[35%] rounded-2xl shadow-md w-full flex">
                        <Image lazyRoot="" lazyBoundary="Aguarde um momento" priority className="w-full h-full object-cover rounded-2xl" src={ListContente[currentIndex].image} alt="" width={100} height={100} />
                    </div>

                    <div className="w-full flex justify-between items-center flex-col h-full">


                        <div className="flex h-full gap-3 flex-col w-full">
                            <h1 className="text-2xl font-semibold">
                                {ListContente[currentIndex].title}
                            </h1>
                            {ListContente[currentIndex].list.map((data, key) => {
                                return (
                                    <ul className="" key={key}>
                                        <li className="text-black flex w-full text- justify-start items-center gap-2 ">
                                            <span className="text-primaryColor text-xs font-bold">.</span>
                                            {data.text}
                                        </li>
                                    </ul>
                                )
                            })}

                        </div>
                        <button className="w-full text-secondColor bg-[#bdf5ec] text-sm mt-2 gap-2 font-medium flex items-center justify-center h-14 rounded-lg">
                            <PiChatTextBold fontSize={18} /> Falar com um especialista
                        </button>
                    </div>

                </motion.div>
                <div className="w-1/2 lg:hidden h-12 flex justify-center  items-center gap-4">
                    {
                        ButtonList.map((i, key) => {
                            return (
                                <button key={key} onClick={() => handleNext(i.index)} className={`w-5 h-5 transition duration-300 rounded-full ${currentIndex === i.index ? "bg-secondColor" : "bg-[#d9d9d9]"} `}>
                                </button>
                            )
                        })
                    }
                </div>
                {/* <div className="w-2/5 lg:hidden flex mb-10 h-12 justify-between">
                            <button onClick={() => handlePrevious(currentIndex)} className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]">
                                <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={27} />
                            </button>
                            <button onClick={() => handleNext(currentIndex)} className="w-10 h-10 flex hover:scale-95 transition rounded-lg hover: items-center justify-center  bg-[#CCCBE4]">
                                <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={27} />
                            </button>
                        </div> */}



                <div className="lg:flex hidden  w-full h-auto mt-5 justify-center items-center lg:flex-row gap-5  flex-col-reverse  h-">
                    {ButtonList.map((buttonData, key) => {
                        return (
                            <button key={key} onClick={() => handleCurrentIndex(buttonData.index)} className={`w-[30%] p-5  gap-0 ${currentIndex === buttonData.index ? `-translate-y-3  ${currentIndex === buttonData.index ? "bg-primaryColor text-white" : "bg-transparent text-primaryColor"} border shadow-lg hover:scale-100  text-primaryColor` : ` bg-transparent shadow`} border gap-2 flex text-black flex-col items-start hover:scale-95 justify-center  h-[120px]  transition duration-300 rounded-xl `}>
                                <div className={`w-10 h-10 flex items-center ${currentIndex === 0} ${currentIndex === buttonData.index ? "bg-[#cccbe4] text-primaryColor" : " text-primaryColor border"}  justify-center p-2 rounded-lg`}>
                                    <buttonData.icon fontSize={buttonData.index === 1 ? 20 : 20} />
                                </div>

                                <h1 className="text-[18px] font-medium text-left">
                                    {buttonData.title}
                                </h1>

                            </button>
                        )
                    })}
                </div>
                <div className=" lg:flex hidden w-full h-auto mt-5  justify-center items-center  lg:flex-row gap-5  flex-col-reverse">
                    <div className="h-[400px] border flex shadow items-center justify-start rounded-2xl w-full">
                        <div className="w-1/2 h-full flex  items-center justify-center rounded-l-2xl bg-primaryColor">
                            <Image priority className="w-full transition duration-300 h-full rounded-l-2xl object-cover" src={ListContente[currentIndex].image} alt="" width={100} height={100} />
                        </div>
                        <motion.div
                            initial={{ translateX: 100, }}
                            animate={{ translateX: 0, opacity: [0, 0.5, 1] }}
                            transition={{ duration: 0.4 }}
                            key={currentIndex}
                            className="w-1/2 rounded-r-2xl flex-col pl-10 bg-primaryColor justify-center items-start gap-2 flex h-full p-5 ">
                            <h1 className="text-3xl text-white font-semibold">
                                {ListContente[currentIndex].title}
                            </h1>
                            {ListContente[currentIndex].list.map((data, key) => {
                                return (
                                    <ul key={key}>
                                        <li className="text-white text-base">
                                            <span className="font-bold">.</span> {data.text}
                                        </li>
                                    </ul>
                                )
                            })}
                            <div className="w-auto h-16 pt-3 gap-3 flex items-center justify-start">
                                <button className="h-full rounded-lg text-base hover:scale-95 transition duration-300 w-[200px] bg-white flex items-center justify-center">
                                    Veja a demo
                                </button>
                                <button className="h-full rounded-lg text-base hover:scale-95 transition duration-300 w-[250px] bg-secondColor text-white flex items-center justify-center">
                                    Fale com um especialista
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    )
}