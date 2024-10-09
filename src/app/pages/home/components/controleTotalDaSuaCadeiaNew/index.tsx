import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaRegBell, FaRegStar } from "react-icons/fa"
import comunicacaoBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-comunicacaoproativa.png";
import gestaoDeRiscosBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-gestaoderiscos.png";
import performanceBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-performance.png";
import rastreamentoBanner from "@/app/pages/home/assets/controleTotalDaSuaCadeia/funcionalidade-rastreamento.png"
import { BsChatLeftText } from "react-icons/bs"
import { ImStatsBars } from "react-icons/im"


export default function ControleTotalDaSuaCadeia() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleCurrentIndex = (index: number) => {
        setCurrentIndex(index)
    }

    const ButtonList = [
        {
            title: "Comunicação com o cliente",
            index: 0,
            icon: BsChatLeftText,
        },
        {
            title: "Análise de dados:",
            index: 1,
            icon: ImStatsBars,
        },
        {
            title: "Gestão da informação",
            index: 2,
            icon: FaRegBell,
        },
        {
            title: "Atendimento efetivo",
            index: 3,
            icon: FaRegStar,
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

    return (
        <section className="bg-white lg:h-auto max-w-[1996px] pt-[15%] lg:pt-0 w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:pt-28 h-1/4 items-center">
                    <div className="flex lg:flex-col flex-col items-center  justify-start w-[90%] lg:w-[77%] h-full">
                        <div className="flex flex-col items-center gap-5 w-full leading-normal">
                            <h1 className="text-3xl lg:text-4xl lg:text-center text-left  leading-tight text-textPrimaryColor font-bold">
                                Controle total da sua cadeia de entregas em um só lugar.
                            </h1>
                            <h2 className="text-textPrimaryColor lg:pt-0 pt-2 leading-tight lg:text-center text-left w-full font-normal text-base lg:text-lg">
                                A gestão completa em uma única plataforma para facilitar o dia a dia do seu e-commerce.
                            </h2>
                        </div>
                        <div className=" w-full h-auto mt-5 flex justify-center items-center lg:flex-row gap-5  flex-col-reverse  h-">
                            {ButtonList.map((buttonData, key) => {
                                return (
                                    <button key={key} onClick={() => handleCurrentIndex(buttonData.index)} className={`w-[31%] p-5  gap-3 ${currentIndex === buttonData.index ? "-translate-y-1 bg-secondColor shadow-lg text-white" : " bg-transparent shadow"} border flex text-black flex-col items-start justify-center  h-[130px]  transition duration-300 rounded-xl `}>
                                        <div className={`w-10 h-10 ${currentIndex === buttonData.index ? "bg-[#bdf5ec] shadow-sm text-primaryColor" : "bg-secondColor text-white"}  flex items-center justify-center p-2 rounded-lg`}>
                                            <buttonData.icon fontSize={buttonData.index === 1 ? 20 : 22} />
                                        </div>

                                        <h1 className="text-[18px] font-medium text-left">
                                            {buttonData.title}
                                        </h1>
                                    </button>
                                )
                            })}
                        </div>
                        <div className=" w-full h-auto mt-5 flex justify-center items-center  lg:flex-row gap-5  flex-col-reverse">
                            <div className="h-[400px] border flex shadow items-center justify-start rounded-2xl w-full">
                                <div className="w-[550px] h-full flex  items-center justify-center rounded-l-2xl bg-secondColor">
                                    <Image priority className="w-full transition duration-300 h-full rounded-l-2xl object-cover" src={ListContente[currentIndex].image} alt="" width={100} height={100} />
                                </div>
                                <motion.div
                                    initial={{ translateX: 100, }}
                                    animate={{ translateX: 0, opacity: [0, 0.5, 1] }}
                                    transition={{ duration: 0.4 }}
                                    key={currentIndex}
                                    className="w-full rounded-r-2xl flex-col pl-10 bg-secondColor justify-center items-start gap-2 flex h-full p-5 ">
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
                                        <button className="h-full rounded-lg text-base hover:scale-95 transition duration-300 w-[250px] bg-primaryColor text-white flex items-center justify-center">
                                            Fale com um especialista
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}