import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Faq() {

    const [openStates, setOpenStates] = useState<boolean[]>(new Array(6).fill(false));

    const JsonList = [
        {
            index: 0,
            title: "O Ondetah é responsável pela minha entrega?",
            text: "O Ondetah não é uma transportadora, portanto não realizamos a sua entrega. Não somos responsáveis por problemas na sua entrega como: atrasos, falhas na entrega e etc.",
        },
        {
            index: 1,
            title: "Como consigo falar mais sobre a minha entrega?",
            text: "Para mais informações e/ou alterações de endereços de entrega, entre em contato diretamente com o SAC da loja onde a compra foi realizada. Eles darão mais informações e lhe auxiliarão da melhor forma possível. ",
        },
        {
            index: 2,
            title: "Como descubro qual é a transportadora da minha entrega?",
            text: "No link de rastreio enviado pela loja onde a compra foi realizada, você consegue localizar o transportador.",
        },
        {
            index: 3,
            title: "Como consigo rastrear o meu pedido?",
            text: "Acesse a área de “Rastrear pedido” e insira o número do pedido que consta no e-mail enviado pela loja ou você pode localizar logo abaixo do seu nome no link de rastreio como exemplo abaixo.",
        },
    ]
    const handleOpen = (index: number) => {
        // Alterna o estado de aberto/fechado do item específico
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index]; // Alterna o estado do item
            return newStates;
        });
    }

    return (
        <section className="bg-custom-linear lg:h-auto max-w-[1996px] lg:pt-10 pt-14 lg:pb-12 pb-10 w-full  ">
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center lg:pt-16 h-1/4 items-center">
                    <div className="flex  lg:flex-col flex-col items-center pb-10 justify-start w-[90%] lg:w-[78%] h-full">
                        <div className="flex flex-col gap-5 w-full lg:w-ful leading-normal">
                            <h1 className="text-3xl lg:text-4xl text-left lg:text-left  leading-tight text-textSecondColor font-bold">
                                FAQ
                            </h1>
                            <h2 className="text-textSecondColor  pt-2 leading-tight text-left  w-full font-normal text-base">
                                Aqui você encontra as respostas para as dúvidas mais comuns sobre o Ondetah.
                            </h2>
                        </div>
                        <div className="h-auto  flex-col lg:flex hidden text-textSecondColor w-full gap-3 mt-10 ">
                            {JsonList.map((i, key) => {
                                return (
                                    <motion.div transition={{ duration: 0.3, ease: "linear" }}
                                        animate={{ height: openStates[key] ? "180px" : "70px" }} key={key} onClick={() => handleOpen(key)} className={`w-full cursor-pointer items-start justify-center flex flex-col rounded-lg ${openStates[key] ? "h-[180] bg-white text-textPrimaryColor" : "h-80px]"}  p-5 border`}>
                                        <div className={`w-full flex justify-between h-10  ${openStates[key] ? "border-b-[0.5px] pb-3 mb-2" : ""}  border-secondColor `}>
                                            <h1 className="text-lg font-semibold">{i.title}</h1>
                                            <div className={`${openStates[key] ? "rotate-180" : "text-primaryColor"} w-7 transition duration-300 hover:scale-95 text-primaryColor h-7 flex items-center bg-[#BDF5EC] rounded-lg justify-center`}>
                                                <IoIosArrowDown fontSize={20} />
                                            </div>

                                        </div>

                                        <p className={`w-4/5 text-base ${openStates[key] ? "flex" : "hidden"}`}>{i.text}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                        <div className="h-auto  flex-col lg:hidden flex text-textSecondColor w-full gap-3 mt-10 ">
                            {JsonList.map((i, key) => {
                                return (
                                    <motion.div transition={{ duration: 0.3, ease: "linear" }}
                                        animate={{ height: openStates[key] ? "300px" : "100px" }} key={key} onClick={() => handleOpen(key)} className={`w-full cursor-pointer items-start justify-center  flex flex-col rounded-lg ${openStates[key] ? "h-[180] bg-white text-textPrimaryColor" : "h-80px] bg-[#ffffff06]"}  p-5 border`}>
                                        <div className={`w-full flex justify-between h-auto  ${openStates[key] ? "border-b-[0.5px] pb-3 mb-2" : ""}  border-secondColor `}>
                                            <h1 className="text-base w-4/5 font-semibold">{i.title}</h1>
                                            <div className={`${openStates[key] ? "rotate-180" : "text-primaryColor"} w-7 transition duration-300 hover:scale-95 text-primaryColor h-7 flex items-center bg-[#BDF5EC] rounded-lg justify-center`}>
                                                <IoIosArrowDown fontSize={20} />
                                            </div>

                                        </div>

                                        <p className={`w-full text-base ${openStates[key] ? "flex" : "hidden"}`}>{i.text}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}