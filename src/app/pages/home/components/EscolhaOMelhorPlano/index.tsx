import { AnimationControls, motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link"
import { useEffect, useRef } from "react";
import { BsChatRightText } from "react-icons/bs"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FaRegCircleCheck } from "react-icons/fa6"


export default function EscolhaOMelhorPlano() {

    const controlsOne: AnimationControls = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            controlsOne.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1.5 },
            });

        }
    }, [inView, controlsOne]);

    const JsonList = [
        {
            title: "Basic",
            icon: FaRegStar,
            value: "R$ 000,00/mês",
            listBeneficios: [
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: false

                },
            ]

        },
        {
            title: "Standard",
            icon: FaStarHalfAlt,
            value: "R$ 000,00/mês",
            listBeneficios: [
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: false

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: false

                },
            ]

        },

        {
            title: "Enterprise",
            icon: FaStar,
            value: "R$ 000,00/mês",
            listBeneficios: [
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
                {
                    icon: FaRegCircleCheck,
                    title: "Lorem Ipsum is simply dummy text of the printing",
                    available: true

                },
            ]

        },

    ]


    return (
        <section className="bg-white lg:h-auto max-w-[1996px] lg:pb-12 pb-10 w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:pt-16 h-1/4 items-center">
                    <div className="flex  lg:flex-col flex-col items-center pb-10 justify-start w-[90%] lg:w-[78%] h-full">
                        <div className="flex flex-col gap-5 w-full lg:w-3/5 leading-normal">
                            <h1 className="text-3xl lg:text-4xl text-left lg:text-center  leading-tight text-textPrimaryColor font-bold">
                                Escolha o melhor plano para você:
                            </h1>
                            <h2 className="text-textPrimaryColor pt-2 leading-tight text-left lg:text-center w-full font-normal text-base">
                                Nossos planos são do tamanho das necessidades do seu negócio.
                            </h2>
                        </div>
                        <motion.div ref={ref}
                            initial={{ opacity: 0, y: 200 }}
                            animate={controlsOne}
                            className="w-full lg:flex-row overflow-y-hidden overflow-x-scroll pb-4 scroll-smooth lg:overflow-auto mt-5 lg:mt-10 h-full gap-4 flex">
                            {
                                JsonList.map((i, key) => {
                                    return (
                                        <div key={key} className={`h-auto  cursor-default shrink-0 ${key === 1 ? "shadow-md bg-secondColor  text-textSecondColor" : "lg:mt-2 lg:scale-95"} shadow-md w-[300px] lg:w-[32%] p-5 lg:p-8 border rounded-2xl`}>
                                            <div className="flex items-center gap-5 justify-start">
                                                <div className={`w-12 flex items-center justify-center ${key === 1 ? "border-textSecondColor" : "border-primaryColor"} h-12 border-[0.5px] rounded-lg`}>
                                                    <i.icon className={`${key === 1 ? "text-textSecondColor" : "text-primaryColor"} text-3xl`} />
                                                </div>
                                                <h2 className="text-2xl font-bold">
                                                    {i.title}
                                                </h2>
                                            </div>
                                            <ul className="flex gap-5 cursor-default flex-col pt-5">
                                                {i.listBeneficios.map((dataList, index) => {
                                                    return (
                                                        <li key={index} className={`flex ${dataList.available ? `${key === 1 ? "text-white" : "text-textPrimaryColor"}` : `${key === 1 ? "text-[#ffffff62]" : "text-[#1e1e1e63]"}`} h-10 gap-4 items-center justify-center`}>
                                                            <dataList.icon fontSize={30}></dataList.icon>
                                                            <p className="text-sm">{dataList.title}</p>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <div className={`w-full h-14 p-3 flex items-center justify-center text-[22px] font-bold text-primaryColor rounded-lg mt-5 ${key === 1 ? "bg-[#BDF5EC]" : "bg-[#CCCBE4]"}`}>
                                                {i.value}
                                            </div>
                                            <Link className="w-full text-center mt-5 flex items-center text-sm justify-center gap-3" href={""}>
                                                <BsChatRightText fontWeight={700} fontSize={20} />
                                                Falar com um especialista
                                            </Link>
                                            <button className={`w-full hover:scale-95 transition duration-300 mt-5 text-white rounded-lg h-12 ${key === 1 ? "bg-primaryColor" : "bg-secondColor"}`}>
                                                <Link className="w-full h-full text-center flex items-center justify-center gap-3" href={""}>
                                                    Comece agora
                                                </Link>
                                            </button>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}