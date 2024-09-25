import bannerHome from "@/app/pages/home/assets/capaHome/home.png"
import { AnimationControls, motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaRegBell, FaRegClock, FaRegStar } from "react-icons/fa"
import { HiOutlineChartBarSquare } from "react-icons/hi2"
import { MdOutlineDashboard } from "react-icons/md"
import { TfiTarget } from "react-icons/tfi"


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
                transition: { duration: 1.5 },
            });
            controlsTwo.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1.5 },
            });

        }
    }, [inView, controlsOne]);

    const JsonList = [
        {
            index: 0,
            icon: FaRegClock

        },
        {
            index: 1,
            icon: FaRegBell
        },
        {
            index: 2,
            icon: TfiTarget
        },
        {
            index: 3,
            icon: HiOutlineChartBarSquare

        },
        {
            index: 4,
            icon: MdOutlineDashboard

        },
        {
            index: 5,
            icon: FaRegStar

        },
    ]

    const ListContente = [
        {
            index: 0,
            title: "Rastreamento em tempo real:",
            text: "Acompanhamento das entregas com atualizações automáticas e precisas.",

        },
        {
            index: 1,
            title: "Comunicação proativa de ocorrências:",
            text: "Controle todo o ciclo de entrega, desde a expedição até o recebimento.",
        },
        {
            index: 2,
            title: "Monitoramento do ciclo de entregas:",
            text: "Envie alertas imediatos sobre qualquer ocorrência durante a entrega.",
        },
        {
            index: 3,
            title: "Análise de performance:",
            text: "Avalie o desempenho em cada etapa e otimize suas operações.",
        },
        {
            index: 4,
            title: "Gestão de riscos:",
            text: "Identifique e minimize riscos de atrasos e insucessos com análises parametrizáveis.",
        },
        {
            index: 5,
            title: "Avaliação Personalizada:",
            text: "Obtenha relatórios personalizados com base nas necessidades do seu negócio para decisões mais assertivas.",
        },
    ]

    const handleTeste = (i: number) => {
        setCurrentIndex(i)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
        }, 15000);


        return () => clearInterval(interval);
    }, []);



    return (
        <section id="funcionalidades" className="bg-white lg:h-auto max-w-[1996px] pt-[15%] lg:pt-0 w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:justify-start lg:pt-28 h-1/4 items-start">
                    <div className="flex items-center justify-center lg:justify-start w-full lg:w-[95%] h-full">
                        <motion.div ref={ref}
                            initial={{ opacity: 0, x: -200 }}
                            animate={controlsOne} className="lg:w-1/2 lg:flex hidden  w-full h-full">
                            <motion.div ref={ref}

                                initial={{ opacity: 0, x: -200 }}
                                animate={controlsOne} className="w-[100%]  lg:flex hidden  left-0 relative h-[800px] bg-[#D9D9D9] rounded-r-2xl">
                                <Image className="w-full  shadow-lg rounded-r-2xl h-full" alt="" src={bannerHome.src} quality={100} width={1000} height={1000} />
                            </motion.div>
                            <ul className=" relative lg:flex hidden  gap-5 flex-col left-[-3%] top-[200px]">
                                {JsonList.map((i, key) => {
                                    return (
                                        <li key={key} className={`w-12 shadow-md h-12 hover:scale-95 border-[0.5px] border-primaryColor transition duration-500  hover:bg-custom-linear hover:border-none ${currentIndex === key ? "bg-custom-linear border-none scale-95 text-textSecondColor" : "bg-textSecondColor text-primaryColor"}  rounded-lg`}>
                                            <button onClick={() => { handleTeste(key) }} className="w-full hover:text-textSecondColor  h-full flex items-center justify-center">
                                                <i.icon fontSize={key === 3 && 2 ? 25 : 20}></i.icon>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>

                        </motion.div>
                        <motion.div ref={ref}
                            initial={{ opacity: 0, x: 200 }}
                            animate={controlsOne} className="w-[90%] lg:w-1/2 lg:pl-10 pr-0 flex flex-col justify-center h-full">
                            <h1 className="text-3xl lg:text-4xl text-left  leading-tight text-textPrimaryColor font-bold">
                                Controle total da sua cadeia de entregas em um só lugar.
                            </h1>
                            <h2 className="text-textPrimaryColor pt-2 leading-tight w-4/5 text-left  font-normal text-base">
                                A gestão completa em uma única plataforma para facilitar o dia a dia do seu e-commerce.
                            </h2>
                            <motion.div ref={ref}
                                initial={{ opacity: 0, x: -200 }}
                                animate={controlsOne} className="w-[100%] lg:hidden flex my-5 rounded-2xl relative h-full bg-[#D9D9D9] rounded-r-2xl">
                                <Image className="w-full lg:hidden flex shadow-lg rounded-2xl h-full" alt="" src={bannerHome.src} quality={100} width={1000} height={1000} />
                            </motion.div>
                            <ul className="flex gap-5 pt-4 flex-col pb-4 left-[87%] -top-3/4">
                                {ListContente.map((i, key) => {
                                    return (
                                        <motion.li
                                            key={key}
                                            onClick={() => handleTeste(key)}
                                            transition={{ duration: 0.3, ease: "linear" }}
                                            animate={{ height: currentIndex === key ? "100px" : "60px" }}
                                            className={`w-full flex flex-col items-start justify-center p-4 shadow-md border-[0.2px]  hover:scale-105  transition duration-500 ${currentIndex === key ? "border-[#CCCBE4] scale-105 text-primaryColor gap-1 border-nonetext-textSecondColor" : "bg-textSecondColor text-primaryColor"} rounded-lg`}
                                        >    <button className="w-full z-10 flex items-start cursor-pointer justify-start flex-col">
                                                <h3 className="text-base text-left font-semibold p-0 m-0">
                                                    {i.title}
                                                </h3>
                                                <p className={`text-sm  text-left ${currentIndex === key ? "flex" : "hidden"}`}>
                                                    {i.text}
                                                </p>
                                            </button>

                                        </motion.li>
                                    )
                                })}
                            </ul>
                            <div className=" hidden lg:flex lg:flex-row flex-col pt-3 justify-start items-center gap-2">
                                <button className="w-full lg:w-1/4 text-base h-12 hover:scale-95 transition text-textSecondColor bg-primaryColor rounded-lg">
                                    <Link className="w-full h-full" href={"#demos"}>Veja a demo</Link>
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