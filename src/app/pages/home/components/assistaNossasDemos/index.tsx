import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import banner from "@/app/pages/home/assets/capaHome/home.png";
import { AnimatePresence, AnimationControls, motion, useAnimation, useInView } from "framer-motion";
import ModalVideoDemo from "./modal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function AssitaNossaDemos() {
    const [view, setViewVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);


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

    const jsonList = [
        {
            title: "Display Regular",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://www.gov.br/pt-br/midias-agorabrasil/video-fundo.mp4/"
        },
        {
            title: "Display Regular",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://static.videezy.com/system/resources/previews/000/008/296/original/Young_African_American_Woman_Laughing_Dancing_2.mp4"
        },
        {
            title: "Display Regular",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            link: "https://www.gov.br/pt-br/midias-agorabrasil/video-fundo.mp4/"
        },
    ];

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollLeft + 260,
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



    const handleClose = () => {
        setOpen(false);
    }

    const handleSetIndex = (i: number) => {
        setCurrentIndex(i);
        setViewVideo(true);
        setOpen(true);
    };

    return (
        <section id="demos" className="bg-white overflow-auto lg:h-auto lg:pt-0 pb-14 pt-20 lg:pb-14 max-w-[1996px] w-full  ">
            {open && (
                <ModalVideoDemo closeModalFunc={() => handleClose()} urlVideo={view ? jsonList[currentIndex].link : ""} />
            )}
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex w-full justify-center h-1/4 items-center">
                    <div className="flex  lg:flex-col flex-col items-center pb-10 justify-start w-[90%] lg:w-[77%] h-full">
                        <div className="flex flex-col gap-3 lg:gap-5 justify-center items-center w-full lg:w-3/5 leading-normal">
                            <h1 className="text-3xl lg:text-4xl leading-tight text-textPrimaryColor font-bold">
                                Assista à nossa demo:
                            </h1>
                            <h2 className="text-textPrimaryColor  leading-tight font-normal text-base lg:text-lg">
                                Veja como o Ondetah ajuda o seu e-commerce
                            </h2>
                        </div>
                        <div className="lg:hidden  my-2 flex items-center w-full justify-between">
                            <div
                                className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]"
                                onClick={handleScrollLeft}
                            >
                                <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={26} />
                            </div>
                            <div
                                className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]"
                                onClick={handleScrollRight}
                            >
                                <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={26} />
                            </div>
                        </div>
                        <motion.div
                            ref={containerRef}
                            className="flex w-full mt-5 h-full pb-5 overflow-y-hidden items-start lg:items-center gap-5 justify-start overflow-x-auto">
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 100 }}
                                animate={controls}
                                className="flex w-full h-full gap-4">
                                {jsonList.map((item, key) => (
                                    <div key={key} className={`min-w-[300px] w-[300px] lg:w-[32%]  flex flex-col gap-5 z-0 rounded-2xl p-5 lg:p-10 lg:h-auto h-[500px] shadow-md border-[0.5px] shrink-0 relative`}>
                                        <AnimatePresence>
                                            <div className="w-full h-2/4 rounded-2xl bg-primaryColor">
                                                <Image src={banner.src} className="w-full rounded-2xl object-cover" alt="" quality={100} width={100} height={100} />
                                            </div>
                                            <div className="flex gap-3 pt-5 flex-col items-start justify-start w-full h-1/2">
                                                <h3 className="text-lg lg:pt-2 font-semibold">
                                                    {item.title}
                                                </h3>
                                                <p className="text-base">
                                                    {item.text}
                                                </p>
                                                <div className="flex w-full items-start justify-center lg:flex-row flex-col">
                                                    <button onClick={() => handleSetIndex(key)} className="flex lg:w-1/2 mt-10 hover:scale-95 transition items-center text-secondColor gap-2 text-base justify-start">
                                                        <IoPlayCircleOutline className="text-xl" />
                                                        Assistir vídeo
                                                    </button>
                                                    <button onClick={() => handleSetIndex(key)} className="flex lg:w-1/2 mt-10 hover:scale-95 transition items-center text-secondColor gap-2 text-base justify-start">
                                                        <IoPlayCircleOutline className="text-xl" />
                                                        Assistir vídeo
                                                    </button>
                                                </div>

                                            </div>
                                        </AnimatePresence>
                                    </div>

                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
