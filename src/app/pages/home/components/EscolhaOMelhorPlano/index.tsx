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
        <section className="w-full lg:h-auto  h-auto overflow-hidden mt-0  flex items-center justify-center">
            <div className="w-[90%] lg:w-[75%] flex items-center gap-2 justify-center lg:justify-start pt-16 pb-20 lg:pb-[120px] flex-col h-full">
                <h1 className="text-3xl lg:text-4xl text-left lg:text-center  leading-tight text-textPrimaryColor font-bold">
                    Escolha o melhor plano para você:
                </h1>
                <h2 className="text-textPrimaryColor pt-2 leading-tight text-left lg:text-center w-full font-normal text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h2>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 200 }}
                    animate={controlsOne}
                    className="lg:w-full w-full lg:flex-row overflow-y-hidden overflow-x-scroll scroll-smooth lg:overflow-auto mt-5 lg:mt-10 lg:h-[630px] gap-4 lg:gap-5 flex">
                    {
                        JsonList.map((i, key) => {
                            return (
                                <div key={key} className={`h-full cursor-default shrink-0 ${key === 1 ? "shadow-xl bg-secondColor lg:scale-105 text-textSecondColor" : "lg:mt-2 lg:scale-95"} shadow-md w-[350px] lg:w-[32%] p-10 border rounded-2xl`}>
                                    <div className="flex items-center gap-5 justify-start">
                                        <div className={`w-12 flex items-center justify-center ${key === 1 ? "border-textSecondColor" : "border-primaryColor"} h-12 border-[0.5px] rounded-lg`}>
                                            <i.icon className={`${key === 1 ? "text-textSecondColor" : "text-primaryColor"} text-3xl`} />
                                        </div>
                                        <h2 className="text-3xl font-bold">
                                            {i.title}
                                        </h2>
                                    </div>
                                    <ul className="flex gap-5 cursor-default flex-col pt-5">
                                        {i.listBeneficios.map((dataList, index) => {
                                            return (
                                                <li key={index} className={`flex ${dataList.available ? `${key === 1 ? "text-white" : "text-textPrimaryColor"}` : `${key === 1 ? "text-[#ffffff62]" : "text-[#1e1e1e63]"}`} h-10 gap-4 items-center justify-center`}>
                                                    <dataList.icon fontSize={30}></dataList.icon>
                                                    <p>{dataList.title}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className={`w-full h-14 p-5 flex items-center justify-center text-2xl font-bold text-primaryColor rounded-lg mt-5 ${key === 1 ? "bg-[#BDF5EC]" : "bg-[#CCCBE4]"}`}>
                                        {i.value}
                                    </div>
                                    <Link className="w-full text-center mt-5 flex items-center justify-center gap-3" href={""}>
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
        </section>
    )
}