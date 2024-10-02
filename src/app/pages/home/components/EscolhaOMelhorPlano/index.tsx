import { AnimationControls, motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { BsChatRightText } from "react-icons/bs"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FaRegCircleCheck } from "react-icons/fa6"
import style from "./style.module.scss"
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

export default function EscolhaOMelhorPlano() {

    const controlsOne: AnimationControls = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const [value, setValue] = useState(0);
    const [valueBasic, setValueBasic] = useState(0);
    const [valueStandard, setValueStandard] = useState(374);
    const [valueEnterprise, setValueEnterprise] = useState(4.500);
    const [viewValue, setValueView] = useState(false)
    const porcent = value / 100
    const containerRef = useRef<HTMLDivElement>(null);

    const [plano, setPlano] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };



    useEffect(() => {
        if (typeof window !== "undefined") {
            /* eslint-disable no-unused-vars */
            const localPlano = localStorage.setItem("plano", plano)
            const localMedia = localStorage.setItem("media", `${value}`)
            /* eslint-disable no-unused-vars */
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(Number(e.target.value)));
    };

    const min = 0;
    const max = 10000;

    const percentage = ((value - min) / (max - min)) * 100;
    const rangeStyle = {
        background: `linear-gradient(to right, rgb(40, 38, 91) ${percentage}%, #d9d9d9 ${percentage}%)`,
    };

    const UpdateValues = () => {

        if (value <= 500) {
            // Muda o valor de cada plano
            setValueBasic(299);
            setValueStandard(374)
            setValueEnterprise(561)

        } else if (value <= 1000) {
            // Muda o valor de cada plano
            setValueBasic(538);
            setValueStandard(673)
            setValueEnterprise(1009)

        } else if (value <= 2000) {
            // Muda o valor de cada plano
            setValueBasic(969);
            setValueStandard(1211)
            setValueEnterprise(1816)

        }
        else if (value <= 3000) {
            // Muda o valor de cada plano
            setValueBasic(1308);
            setValueStandard(1635)
            setValueEnterprise(2452)

        }
        else if (value <= 5000) {
            // Muda o valor de cada plano
            setValueBasic(1962);
            setValueStandard(2452)
            setValueEnterprise(3678)

        }
        else if (value < 10000) {
            // Muda o valor de cada plano
            setValueBasic(3531);
            setValueStandard(4414)
            setValueEnterprise(6621)

        } else {

        }

    }

    useEffect(() => {
        UpdateValues();
    }, [value])

    useEffect(() => {
        if (inView) {
            controlsOne.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
            });

        }
    }, [inView, controlsOne]);


    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollLeft + 330,
                behavior: "smooth",
            });
        }
    };
    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollLeft - 1000,
                behavior: "smooth",
            });
        }
    };

    const HandleComeceAgora = (plano: string) => {
        setPlano(plano);
    }

    const JsonList = [
        {
            title: "Comunicar",
            subtitle: "Informação e experiência do cliente.",
            icon: FaRegStar,
            value: valueBasic,
            listBeneficios: [
                {
                    icon: FaRegCircleCheck,
                    title: "Link de rastreio para clientes",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Comunicação via E-mail",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Comunicação via SMS e/ou Whatsapp*",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Integração com Transportadoras",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Integração de pedidos",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Avaliação de serviços e produtos",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise de engajamento e canais",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise e performance de entregas",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Gestão de ocorrências",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise de dados: real vs planejado",
                    available: false

                },

                {
                    icon: FaRegCircleCheck,
                    title: "Histórico, compartivo, variação",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Matriz de risco",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Ação pró ativa na redefinição de prazos",
                    available: false

                },

            ]
        },

        {
            title: "Gerir",
            subtitle: "Visibilidade e gestão detalhada.",
            icon: FaStarHalfAlt,
            value: valueStandard,
            listBeneficios: [
                {
                    icon: FaRegCircleCheck,
                    title: "Link de rastreio para clientes",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Comunicação via E-mail",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Comunicação via SMS e/ou Whatsapp*",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Integração com Transportadoras",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Integração de pedidos",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Avaliação de serviços e produtos",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise de engajamento e canais",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise e performance de entregas",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Gestão de ocorrências",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise de dados: real vs planejado",
                    available: true

                },

                {
                    icon: FaRegCircleCheck,
                    title: "Histórico, compartivo, variação",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Matriz de risco",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Ação pró ativa na redefinição de prazos",
                    available: false

                },
            ]

        },

        {
            title: "Expandir",
            subtitle: "Insights personalizados e controle absoluto.",
            icon: FaStar,
            value: valueEnterprise,
            listBeneficios: [
                {
                    icon: FaRegCircleCheck,
                    title: "Link de rastreio para clientes",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Comunicação via E-mail",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Comunicação via SMS e/ou Whatsapp*",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Integração com Transportadoras",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Integração de pedidos",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Avaliação de serviços e produtos",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise de engajamento e canais",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise e performance de entregas",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Gestão de ocorrências",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Análise de dados: real vs planejado",
                    available: true

                },

                {
                    icon: FaRegCircleCheck,
                    title: "Histórico, compartivo, variação",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Matriz de risco",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Ação pró ativa na redefinição de prazos",
                    available: true

                },
            ]

        },

    ]


    return (
        <section id="planos" className={`  flex items-center pb-8 lg:pb-10 justify-center flex-col lg:h-auto max-w-[1996px] lg:pt-[20px]   w-full  `}>
            <motion.div initial={{ opacity: 0, y: 200 }}
                animate={controlsOne} className="flex flex-col pt-5 lg:pt-16 lg:items-center items-start justify-center  lg:justify-start w-[90%] lg:w-[98%]  leading-normal">
                <h1 className={`text-3xl lg:text-4xl text-left lg:text-center  leading-tight   font-bold`}>
                    Escolha o melhor plano para você:
                </h1>
                <h2 className={`pt-3 leading-tight lg:text-center text-left  w-full font-normal text-base`}>
                    Nossos planos são do tamanho das necessidades do seu negócio.
                </h2>
                <h2 className={` pt-3 lg:hidden leading-tight lg:text-center text-left  w-full font-normal text-sm  `}>
                    Informe o limite de pedidos por mês que você deseja em seu plano.
                </h2>
            </motion.div>

            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:pt-2 h-1/4 items-center">
                    <div className="flex  lg:flex-col flex-col items-center pb-10 justify-start w-[90%] lg:w-[78%] h-full">
                        <motion.div
                            className="flex flex-col items-center justify-start w-[98%]  leading-normal">
                            <div className="w-[98%] gap-20 items-center justify-center flex pb-6 pt-5 lg:h-24 ">
                                <div className="relative flex flex-col items-end  gap-2 justify-center w-full lg:w-[50%] ">

                                    <motion.div animate={{ opacity: 1, left: 0 }} initial={{ opacity: 0, left: -100 }} className="relative  w-full">
                                        <label htmlFor="labels-range-input" className="sr-only">Labels range</label>

                                        <div style={{ left: `${porcent}%`, boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }} className={`relative bg-custom-linear transition float-start border  border-[#ededed] teste ${porcent <= 50 ? "-translate-x-[5px]" : "-translate-x-[43.5px]"}  rotate-45 w-12  flex items-center rounded-t-full rounded-bl-full justify-center h-12 `}>
                                            <h1 className="relative transition text-textSecondColor text-xs  font-medium -rotate-45 ">
                                                {value}
                                            </h1>

                                        </div>

                                        <input
                                            onMouseLeave={() => setValueView(!viewValue)}
                                            id="labels-range-input"
                                            type="range"
                                            min={min}
                                            max={max}
                                            step={100}
                                            value={value}
                                            onChange={handleInputChange}
                                            className={`w-full transition ${style.range}`}
                                            style={rangeStyle}
                                        ></input>


                                        <span className="text-sm text-gray-500 absolute start-0 -bottom-6">0</span>
                                        <span className="text-base text-gray-500 absolute lg:left-[26%] hidden lg:flex  start-0 -bottom-6">Informe o limite de pedidos por mês</span>
                                        <span className="text-sm text-gray-500 absolute end-0 -bottom-6">+10.000</span>
                                    </motion.div>
                                </div>
                            </div>


                        </motion.div>
                        <motion.div ref={ref}

                            className="w-full flex-col overflow-y-hidden overflow-x-scroll  scroll-smooth lg:overflow-auto mt-5  h-full flex">

                            <div className="lg:hidden flex items-center w-full justify-between">
                                <button
                                    className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]"
                                    onClick={handleScrollLeft}
                                >
                                    <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={26} />
                                </button>
                                <div
                                    className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]"
                                    onClick={handleScrollRight}
                                >
                                    <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={26} />
                                </div>
                            </div>

                            <motion.div ref={containerRef}

                                className="w-full lg:flex-row overflow-y-hidden pb-4 overflow-x-scroll  scroll-smooth lg:overflow-auto mt-5 lg:mt-10 h-full gap-3 flex">

                                {
                                    JsonList.map((i, key) => {
                                        return (
                                            <motion.div key={key} className={` ${isExpanded ? "h-auto transition duration-300 " : " h-[290px] transition duration-300 overflow-hidden "} flex flex-col cursor-default shrink-0 ${key === 1 ? "shadow-md bg-secondColor  text-textSecondColor" : "lg:mt-2 lg:scale-95"} shadow-md w-[320px] lg:w-[32.5%] p-5 lg:p-8 border rounded-2xl`}>

                                                <div className="flex items-center flex-col gap-5 w-full justify-between">

                                                    <div className="w-full gap-5 flex items-center justify-start h-auto">
                                                        <div className="w-full flex items-center justify-start gap-5">
                                                            <div className={`w-12 flex items-center  justify-center ${key === 1 ? "border-textSecondColor" : "border-primaryColor"} h-12 border-[0.5px] rounded-lg`}>
                                                                <i.icon className={`${key === 1 ? "text-textSecondColor" : "text-primaryColor"} text-3xl`} />
                                                            </div>
                                                            <h2 className="text-2xl font-bold">
                                                                {i.title}

                                                            </h2>
                                                        </div>


                                                    </div>

                                                    <span className="w-full text-left">
                                                        {i.subtitle}
                                                    </span>

                                                </div>
                                                {
                                                    value >= 10000 ? (
                                                        <motion.div
                                                            className={`w-full transition h-14 p-3 flex items-center justify-center text-[22px] font-bold text-primaryColor rounded-lg mt-5 ${key === 1 ? "bg-[#BDF5EC]" : "bg-[#CCCBE4]"}`}>
                                                            <Link href={"#formulario"}><motion.h1
                                                                className="flex items-center justify-center text-sm lg:text-[15px] gap-3"
                                                                key={value}
                                                                initial={{ opacity: 0, translateY: -5 }}
                                                                animate={{ translateY: 0, opacity: 1 }}
                                                                transition={{ duration: 0.2, ease: 'linear' }}>
                                                                <BsChatRightText /> Fale com um consultor
                                                            </motion.h1></Link>

                                                        </motion.div>
                                                    ) : (
                                                        <motion.div
                                                            className={`w-full transition h-14 p-3 flex items-center justify-center text-[22px] font-bold text-primaryColor rounded-lg mt-5 ${key === 1 ? "bg-[#BDF5EC]" : "bg-[#CCCBE4]"}`}>
                                                            <motion.h1
                                                                key={valueBasic}

                                                                initial={{ opacity: 0, translateY: -5 }}
                                                                animate={{ translateY: 0, opacity: 1 }}
                                                                transition={{ duration: 0.2, ease: 'linear' }}>
                                                                R${i.value}/mês
                                                            </motion.h1>
                                                        </motion.div>
                                                    )
                                                }
                                                <div className="flex w-full mt-3 items-end justify-start ">
                                                    <button
                                                        className={`flex items-center gap-2 text-xs justify-center ${key === 1 ? "bg-[#bdf5ec]" : "bg-[#CCCBE4]"}  text-primaryColor rounded-lg w-[130px] px-2 h-10 hover:scale-95 transition`} onClick={toggleExpand}
                                                    >
                                                        ver detalhes
                                                        <IoIosArrowUp className={`${isExpanded ? "rotate-180" : ""} transition duration-200`} fontSize={26} />

                                                    </button>
                                                </div>

                                                <ul className="flex  items-start gap-0 lg:gap-0  cursor-default flex-col pt-5">
                                                    {i.listBeneficios.map((dataList, index) => {
                                                        return (
                                                            <li key={index} className={`flex ${dataList.available ? `${key === 1 ? "text-white" : "text-textPrimaryColor"}` : `${key === 1 ? "text-[#ffffff62]" : "text-[#1e1e1e63]"}`} ${isExpanded === false ? "mt-3" : ""} h-12 gap-4 items-center justify-center`}>
                                                                <dataList.icon className="lg:w-5 lg:h-5 w-5 h-5 flex text-lef justify-start items-start" ></dataList.icon>
                                                                <p className="lg:text-sm  text-[12.7px]">{dataList.title}</p>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                                <span className="w-full text-left mt-5 flex items-center text-sm justify-start gap-3" >
                                                    *R$0.10 por SMS |  R$ 0.25 por WhatsApp não oficial ou R$ 0.55 por WhatsApp oficial
                                                </span>
                                                <button onClick={() => HandleComeceAgora(i.title)} className={`w-full unique hover:scale-95 transition duration-300 mt-5 text-white rounded-lg h-12 ${key === 1 ? "bg-primaryColor" : "bg-secondColor"}`}>
                                                    <Link href={"/formulario"} className="w-full h-full text-center flex items-center justify-center gap-3" >
                                                        Faça seu orçamento
                                                    </Link>
                                                </button>
                                            </motion.div>
                                        );
                                    })
                                }
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}