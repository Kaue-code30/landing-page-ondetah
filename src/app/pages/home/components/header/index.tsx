import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logoOndetah from "@/app/pages/home/assets/logo.svg"
import { useState } from "react";
import Link from "next/link";
import PedidoOndetah from "../localizarPedido";

interface PropsComponent {
    onScroll?: boolean;
}

export default function Header({ onScroll }: PropsComponent) {
    const [closeIcon, setCloseIcon] = useState(false)
    const [localizarPedido, setLocalizarPedido] = useState(false)

    const jsonList = [
        {
            index: 0,
            nameLink: "Funcionalidades",
            link: "/#funcionalidades"
        },
        {
            index: 1,
            nameLink: "Planos",
            link: "/#planos"
        },
        {
            index: 2,
            nameLink: "Integrações",
            link: "/#integracoes"
        },
    ]

    const handleOpenMenu = () => {
        setCloseIcon(!closeIcon);
    };

    return (
        <div className="relative w-full">
            {localizarPedido && (
                <PedidoOndetah />
            )}
            <motion.header
                key="header"
                animate={{
                    background: onScroll
                        ? "rgba(40, 38, 91, 1) 0%"
                        : `rgba(40, 38, 91, ${closeIcon ? "1" : "0"})`
                }}
                transition={{ duration: 0.4, ease: "linear" }}
                className={`h-[80px] fixed w-full z-40 flex items-center justify-center text-textSecondColor`}
            >
                <div className="w-[90%] h-full justify-between items-center flex">
                    <Image
                        src={logoOndetah}
                        className="w-32 lg:w-40"
                        width={100}
                        height={100}
                        alt="logo ondetah"
                    />

                    <ul className={`lg:flex items-center justify-center hidden gap-5`}>
                        {jsonList.map((i, key) => (
                            <li key={key} className="hover:scale-95 transition">
                                <Link className={`${i.index === 3 ? "border rounded-lg" : ""} px-3 p-2`} href={i.link}>{i.nameLink}</Link>
                            </li>
                        ))}
                        <li
                            onClick={() => { setLocalizarPedido(!localizarPedido); }}
                            className="border cursor-pointer hover:bg-textSecondColor transition hover:text-textPrimaryColor hover:scale-95 text-white rounded-lg px-4 p-2"
                        >
                            Rastrear pedido
                        </li>
                    </ul>

                    {/* Use AnimatePresence for the dropdown menu */}
                    <AnimatePresence>
                        {closeIcon && (
                            <motion.div
                                initial={{ opacity: 0, translateY: -100 }}
                                exit={{ opacity: 0, translateY: -100, transition: {ease:"linear", duration:0.3} }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.7, ease: "backInOut" }}
                                className={`absolute top-[79px] left-0 w-full bg-primaryColor lg:hidden flex flex-col gap-8 pb-10 py-5`}
                            >
                                <ul className="flex flex-col px-3 gap-8">
                                    {jsonList.map((i, key) => (
                                        <li key={key} className="hover:scale-95 transition">
                                            <Link className={`p-2`} href={i.link}>{i.nameLink}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <li className="border list-none mx-4 cursor-pointer hover:scale-95 transition duration-300 hover:text-textPrimaryColor text-white rounded-lg px-4 p-2">
                                    <button onClick={() => { setLocalizarPedido(!localizarPedido); }} className="w-full h-full">
                                        Rastrear pedido
                                    </button>
                                </li>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div onClick={() => handleOpenMenu()} className="w-14 lg:hidden visible h-14 p-2">
                        <div className={`flex flex-col justify-center ${closeIcon ? "gap-0" : ""} gap-1 items-center w-full h-full`}>
                            <div className={`w-3/4 ${closeIcon ? "rotate-45 relative duration-500 left-[-1px]" : "duration-300"} transition-all h-[3px] bg-white`} />
                            <div className={`w-3/4 ${closeIcon ? "hidden" : ""} transition duration-500 h-[3px] bg-white`} />
                            <div className={`w-3/4 ${closeIcon ? "-rotate-45 left-[-1px] duration-500 relative -top-[8.2px]" : "duration-300"} transition-all h-[3px] bg-white`} />
                        </div>
                    </div>
                </div>
            </motion.header>
        </div>
    );
}
