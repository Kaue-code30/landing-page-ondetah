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
            index: 4,
            title: "Como o Ondetah reduz o número de contatos no SAC?",
            text: "O Ondetah oferece uma solução integrada de rastreamento e comunicação que fornece informações em tempo real para os clientes. Isso permite que eles acompanhem o status de suas entregas e recebam notificações automáticas sobre atualizações importantes, como mudanças no prazo de entrega ou eventuais problemas. Com essas informações acessíveis e transparentes, o cliente não precisa entrar em contato com o SAC para esclarecer dúvidas, reduzindo significativamente o número de interações.",
        },
        {
            index: 5,
            title: "Como o Ondetah permite a redução de ocorrências?",
            text: "O Ondetah centraliza a gestão da cadeia de entrega, permitindo a visualização em tempo real das entregas e antecipando possíveis problemas. A plataforma envia alertas preventivos antes que uma ocorrência precise ser registrada. Dessa forma, problemas como atrasos, falhas na entrega ou informações desencontradas podem ser resolvidos rapidamente, antes de gerar insatisfação e a necessidade de abrir ocorrências formais.",
        },
        {
            index: 6,
            title: "Como é feita a compensação de CO2 da minha entrega através do Ondetah?",
            text: "A compensação de CO2 é realizada por meio de parcerias com programas certificados de sustentabilidade que calculam a pegada de carbono gerada durante o processo de entrega. A cada entrega rastreada, o Ondetah estima a quantidade de CO2 emitido com base em fatores como distância percorrida, peso do produto e tipo de transporte utilizado. Para neutralizar essas emissões, o Ondetah contribui para projetos de compensação, como o plantio de árvores ou investimentos em energias renováveis, que removem ou evitam a emissão de CO2 na atmosfera.",
        },
        {
            index: 7,
            title: "Com o Ondetah consigo identificar qual o meu maior gargalo de entrega?",
            text: "Sim, o Ondetah permite identificar os maiores gargalos na sua operação de entrega. A plataforma oferece dashboards e relatórios detalhados com dados em tempo real sobre cada etapa do processo de entrega. Esses insights incluem métricas como tempo de processamento, atrasos, locais com maior incidência de problemas, e causas frequentes de falhas na entrega.",
        },
        {
            index: 8,
            title: "Qual a diferença de comunicação via API Whatsapp oficial e não oficial?",
            text: "A API oficial do WhatsApp, desenvolvida pela Meta, permite automatizar o envio de mensagens e gerenciar conversas com vários usuários ao mesmo tempo, garantindo o cumprimento de regras de privacidade e boas práticas definidas pela empresa. Existem também APIs não oficiais, criadas por outros provedores, que permitem enviar mensagens pelo WhatsApp. Embora não sejam feitas pela Meta, elas podem ser usadas sem restrições, desde que sigam os mesmos padrões de privacidade e boas práticas exigidos pelo WhatsApp",
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
                                        animate={{ height: openStates[key] ? "195px" : "70px" }} key={key} onClick={() => handleOpen(key)} className={`w-full cursor-pointer items-start justify-center flex flex-col rounded-lg ${openStates[key] ? "h-[180] bg-white text-textPrimaryColor" : "h-80px]"}  p-5 border`}>
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