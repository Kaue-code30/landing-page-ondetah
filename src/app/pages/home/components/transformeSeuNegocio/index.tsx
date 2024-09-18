import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import imagem from "@/app/pages/home/assets/capaHome/home.png"
import { useEffect, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function TransFormeSeuNegocio() {
    const [currentIndex, setCurrentIndex] = useState(0);





    const ButtonList = [
        {
            textButton: "Lorem Ipsum is simply",
            index: 0,
        },
        {
            textButton: "Lorem Ipsum is simply",
            index: 1,
        },
        {
            textButton: "Lorem Ipsum is simply",
            index: 2,
        },
        {
            textButton: "Lorem Ipsum is simply",
            index: 3,
        },

    ]

    const JsonList = [
        {
            index: 0,
            title: "Competitividade em prazos de entrega:",
            text: "Com dados históricos e previsões detalhadas, nossa plataforma permite a análise de risco de atrasos por transportadora, região e sub-região. Antecipe problemas com a matriz de risco e ajuste prazos de forma estratégica, garantindo uma experiência de entrega superior e alinhada com as expectativas dos clientes",
            imagem: imagem.src
        },
        {
            index: 1,
            title: "1",
            text: "Com dados históricos e previsões detalhadas, nossa plataforma permite a análise de risco de atrasos por transportadora, região e sub-região. Antecipe problemas com a matriz de risco e ajuste prazos de forma estratégica, garantindo uma experiência de entrega superior e alinhada com as expectativas dos clientes",
            imagem: imagem.src
        },
        {
            index: 2,
            title: "2",
            text: "Com dados históricos e previsões detalhadas, nossa plataforma permite a análise de risco de atrasos por transportadora, região e sub-região. Antecipe problemas com a matriz de risco e ajuste prazos de forma estratégica, garantindo uma experiência de entrega superior e alinhada com as expectativas dos clientes",
            imagem: imagem.src
        },
        {
            index: 3,
            title: "3",
            text: "Com dados históricos e previsões detalhadas, nossa plataforma permite a análise de risco de atrasos por transportadora, região e sub-região. Antecipe problemas com a matriz de risco e ajuste prazos de forma estratégica, garantindo uma experiência de entrega superior e alinhada com as expectativas dos clientes",
            imagem: imagem.src
        },
    ]

    const handleTeste = (i: number) => {
        setCurrentIndex(i)
    }

    const handleNext = () => {

        setCurrentIndex((prevIndex) => (prevIndex + 1) % JsonList.length);
    };
    const handlePrevious = () => {

        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? JsonList.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
        }, 10000);


        return () => clearInterval(interval);
    }, []);


    return (
        <section className="w-full lg:h-[85vh] h-auto overflow-hidden  mt-20  flex items-center justify-center">
            <div className="w-[90%] flex items-center gap-2 justify-center  flex-col h-full">
                <h1 className="text-3xl lg:text-4xl text-left  leading-tight text-textPrimaryColor font-bold">
                    Transforme o seu negócio.
                </h1>
                <h2 className="text-textPrimaryColor pt-2 leading-tight lg:text-center text-left w-full font-normal text-base lg:text-lg">
                    Confira os benefícios do Ondetah.
                </h2>
                <div className="mt-3 lg:flex w-full hidden justify-center items-center gap-5 h-16 ">
                    {ButtonList.map((i, key) => {
                        return (
                            <span className={`${currentIndex === key ? "bg-primaryColor text-white" : "text-textPrimaryColor"} border h-12 w-[230px] hover:scale-95 hover:bg-primaryColor transition hover:text-textSecondColor  rounded-lg px-3`} key={key}>
                                <button onClick={() => handleTeste(key)} className="w-full h-full">
                                    {i.textButton}
                                </button>
                            </span>
                        )
                    })}
                </div>
                <div className=" relative lg:flex hidden lg:mt-0 mt-3 top-[25%] lg:gap-0 gap-10 justify-between w-[100%]">
                    <button onClick={() => handlePrevious()} className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]">
                        <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={27} />
                    </button>
                    <button onClick={() => handleNext()} className="w-10 h-10 flex hover:scale-95 transition rounded-lg hover: items-center justify-center  bg-[#CCCBE4]">
                        <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={27} />
                    </button>


                </div>
                <div className="lg:w-[80%] w-full mt-5 flex lg:flex-row gap-5 lg:gap-10 flex-col-reverse  h-auto">
                    <AnimatePresence>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0.7, translateX: -50 }}
                            animate={{ opacity: 1.3, translateX: 0 }}
                            transition={{ duration: 0.6, ease: "linear" }}
                            className="lg:w-1/2 w-full h-full flex flex-col gap-5 items-start lg:items-start justify-center">
                            <h1 className="text-3xl lg:text-4xl text-left text-black font-bold">
                                {JsonList[currentIndex].title}
                            </h1>
                            <h2 className="text-black text-left  w-full lg:w-[90%]">
                                {JsonList[currentIndex].text}
                            </h2>
                            <button className="w-full lg:w-[200px] text-textSecondColor hover:scale-95 transition h-12 rounded-lg bg-secondColor">
                                veja a demo
                            </button>
                        </motion.div>
                        <div className=" relative flex lg:hidden lg:mt-0 mt-0 top-[40%] lg:gap-0 gap-10 justify-between w-[100%]">
                            <button onClick={() => handlePrevious()} className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]">
                                <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={27} />
                            </button>
                            <button onClick={() => handleNext()} className="w-10 h-10 flex hover:scale-95 transition rounded-lg hover: items-center justify-center  bg-[#CCCBE4]">
                                <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={27} />
                            </button>
                        </div>
                        <motion.div
                            key={currentIndex + 5}
                            initial={{ opacity: 0.8, translateX: 50 }}
                            animate={{ opacity: 1.3, translateX: 0 }}
                            transition={{ duration: 0.6, ease: "linear" }}
                            className="lg:w-1/2 w-full h-full flex flex-col gap-5 items-center justify-center">
                            <Image className="w-full object-cover rounded-2xl  lg:rounded-2xl shadow-md flex" width={1000} quality={100} height={1000} src={JsonList[currentIndex].imagem} alt="Imagem ondetag"></Image>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}