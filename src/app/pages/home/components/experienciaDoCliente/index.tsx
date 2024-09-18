import { IoIosArrowUp } from "react-icons/io"
import ApIcon from "@/app/pages/home/assets/iconsExperienciaDoCliente/code.svg";
import headPhone from "@/app/pages/home/assets/iconsExperienciaDoCliente/headphone.svg";
import cloud from "@/app/pages/home/assets/iconsExperienciaDoCliente/cloud.svg";
import computer from "@/app/pages/home/assets/iconsExperienciaDoCliente/computer.svg";
import security from "@/app/pages/home/assets/iconsExperienciaDoCliente/security.svg";
import co2 from "@/app/pages/home/assets/iconsExperienciaDoCliente/co2.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimationControls, motion, useAnimation, useInView } from "framer-motion";

export default function ExperienciaDoCliente() {

    // Controla qual índice está aberto
    const [openStates, setOpenStates] = useState<boolean[]>(new Array(6).fill(false));

    const controls: AnimationControls = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1.5 },
            });
        }
    }, [inView, controls]);

    const JsonList = [
        {
            index: 0,
            icon: ApIcon,
            title: "Integração via API:",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            link: ""
        },
        {
            index: 1,
            icon: headPhone,
            title: "Estrutura única de SAC:",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            link: ""
        },
        {
            index: 2,
            icon: cloud,
            title: "Infraestrutura 100% na nuvem:",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            link: ""
        },
        {
            index: 3,
            icon: computer,
            title: "Rápida Implantação:",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            link: ""
        },
        {
            index: 4,
            icon: security,
            title: "Segurança da informação:",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            link: ""
        },
        {
            index: 5,
            icon: co2,
            title: "Compensação de CO2:",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            link: ""
        },
    ];

    const handleOpen = (index: number) => {
        // Alterna o estado de aberto/fechado do item específico
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index]; // Alterna o estado do item
            return newStates;
        });
    }

    return (
        <section className="w-full lg:h-auto pb-[200px] h-auto overflow-hidden mt-0 bg-custom-linear flex items-center justify-center">
            <div className="w-[90%] lg:w-[75%] flex items-start gap-2 justify-center lg:justify-start pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] flex-col h-full">
                <h1 className="text-3xl lg:text-4xl text-left lg:w-1/2 leading-tight text-textSecondColor font-bold">
                    Uma solução completa focada na
                    experiência do cliente.
                </h1>
                <h2 className="text-textSecondColor pt-2 leading-tight text-left w-full font-normal text-base lg:text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h2>
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls} className="w-full flex lg:flex-row flex-col lg:flex-wrap gap-5 items-start justify-start h-full lg:h-auto pt-10">
                    {
                        JsonList.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`w-full lg:w-[32%]  ${openStates[index] ? "lg:h-[300px] h-[500px] bg-[#ffffff08] backdrop-blur-sm" : ""}  transition duration-500 flex ${openStates[index] ? "scale-[0.99]" : ""} shadow-xl backdrop-blur-3xl flex-col  gap-5 border rounded-2xl p-5`}
                                transition={{ duration: 0.3, ease: "linear" }}
                                animate={{ height: openStates[index] ? "320px" : "200px" }}
                            >
                                <Image className={`w-12 ${index === 0 ?"mt-5":"mt-2"} h-12 `} src={item.icon} alt="icones representativos" width={100} height={100} />
                                <div className="flex w-full justify-between items-center">
                                    <h1 className="text-textSecondColor text-[22px] w-[60%] font-semibold">
                                        {item.title}
                                    </h1>
                                    <button
                                        onClick={() => handleOpen(index)}
                                        className="w-7 flex items-center hover:scale-90 transition justify-center rounded-lg h-7 bg-[#BDF5EC]"
                                    >
                                        <IoIosArrowUp className={`${openStates[index] ? "" : "rotate-180"} duration-500 transition-all`} fontSize={22} />
                                    </button>
                                </div>
                                <motion.div transition={{ duration: 0.35, ease: "linear" }}

                                    animate={{ opacity: openStates[index] ? 1 : 0, height: openStates[index] ? "auto" : "0px" }}
                                    className={`overflow-hidden transition-all duration-500 ${openStates[index] ? "flex flex-col gap-5" : ""}`}
                                >

                                    <p className="text-textSecondColor">
                                        {item.text}
                                    </p>
                                    <button className="w-full  h-12 bg-textSecondColor rounded-lg">
                                        saiba mais
                                    </button>
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}
