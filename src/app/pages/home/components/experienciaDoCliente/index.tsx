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
import Link from "next/link";

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
            text: "ERP, TMS Embarcador e TMS Transportador, conecte facilmente a sistemas essenciais para uma operação sem falhas. ",
            link: ""
        },
        {
            index: 1,
            icon: headPhone,
            title: "Estrutura única de SAC:",
            text: "Com suporte via Whatsapp e Chatbot 24x7: Atendimento instantâneo com suporte ágil e automatizado.",
            link: ""
        },
        {
            index: 2,
            icon: cloud,
            title: "Infraestrutura 100% na nuvem:",
            text: "Com acessibilidade garantida e backups automáticos.",
            link: ""
        },
        {
            index: 3,
            icon: computer,
            title: "Rápida Implantação:",
            text: "A solução pronta para uso  sem complicações e com suporte especializado.",
            link: ""
        },
        {
            index: 4,
            icon: security,
            title: "Segurança da informação:",
            text: "Proteja os dados da sua empresa e clientes com o mais alto nível de segurança digital.",
            link: ""
        },
        {
            index: 5,
            icon: co2,
            title: "Compensação de CO2:",
            text: "Opere de maneira sustentável com certificação de compensação nominal.",
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
        <section className="bg-custom-linear lg:h-auto max-w-[1996px] pt-20 pb-20 lg:pt-[2%] lg:pb-[300px] w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:pt-16 h-1/4 items-center">
                    <div className="flex  lg:flex-col flex-col items-center pb-10 justify-start w-[90%] lg:w-[76.5%] h-full">
                        <div className="flex flex-col gap-5 w-full lg:w-full leading-normal">
                            <h1 className="text-3xl lg:text-4xl text-left lg:w-1/2 leading-tight text-textSecondColor font-bold">
                                Uma solução completa focada na
                                experiência do cliente.
                            </h1>
                            <h2 className="text-textSecondColor pt-2 leading-tight text-left w-full font-normal text-base lg:text-lg">
                                Projetada para oferecer suporte e gestão de ponta para o gestor de e-commerce.
                            </h2>
                        </div>

                        <motion.div ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={controls} className="w-full flex lg:flex-row flex-col lg:flex-wrap gap-5 items-start justify-start h-full lg:h-auto pt-10">
                            {
                                JsonList.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={`w-full lg:w-[31%]  ${openStates[index] ? "lg:h-[300px] h-[500px] bg-[#ffffff08] backdrop-blur-sm" : ""}  transition duration-500 flex ${openStates[index] ? "scale-[0.99]" : ""} shadow-xl backdrop-blur-3xl flex-col  gap-5 border rounded-2xl p-5`}
                                        transition={{ duration: 0.3, ease: "linear" }}
                                        animate={{ height: openStates[index] ? "350px" : "200px" }}
                                    >
                                        <Image className={`w-12 ${index === 0 ? "mt-5" : "mt-2"} h-12 `} src={item.icon} alt="icones representativos" width={100} height={100} />
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
                                                <Link className="w-full h-full" href={"#formulario"}>saiba mais</Link>

                                            </button>
                                        </motion.div>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
