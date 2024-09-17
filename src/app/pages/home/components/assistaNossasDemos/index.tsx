import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import banner from "@/app/pages/home/assets/capaHome/home.png";
import { AnimatePresence, AnimationControls, motion, useAnimation, useInView } from "framer-motion";

export default function AssitaNossaDemos() {
    const [view, setViewVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const controls: AnimationControls = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
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
    

    const handleSetIndex = (i: number) => {
        setCurrentIndex(i);
        setViewVideo(true);
    };

    return (
        <section className="w-full lg:h-[80vh] h-auto overflow-hidden pb-20 flex items-center justify-center">
            <div className="w-[90%] flex items-center justify-start pt-5 flex-col h-full">
                <h1 className="text-3xl lg:text-4xl leading-tight text-textPrimaryColor font-bold">
                    Assista às nossas demos:
                </h1>
                <h2 className="text-textPrimaryColor pt-2 leading-tight font-normal text-base lg:text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h2>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    className="flex w-full mt-5 gap-5 h-full pb-5 overflow-y-hidden items-start lg:items-center lg:justify-center justify-start overflow-x-auto">
                    {jsonList.map((item, key) => (

                        <div key={key} className={`min-w-[300px] w-[350px] lg:w-[400px] flex flex-col gap-5 z-0 rounded-2xl p-10 h-[500px] shadow shrink-0 relative`}>
                            <AnimatePresence>
                                {currentIndex === key && view ? (
                                    <motion.div
                                        className="w-full flex h-2/4 transition rounded-2xl shadow"
                                        initial={{ opacity: 0, }}
                                        animate={{ opacity: 1, }}
                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                        exit={{ opacity: 0, translateY: -10 }}
                                    >
                                        <video controls preload="auto" autoPlay className="w-full  h-[230px] object-cover rounded-2xl">
                                            <source src={item.link} type="video/mp4" />
                                            Seu navegador não suporta vídeos.
                                        </video>
                                    </motion.div>

                                ) : (
                                    <div className="w-full h-2/4 rounded-2xl bg-primaryColor">
                                        <Image src={banner.src} className="w-full rounded-2xl object-cover" alt="" quality={100} width={100} height={100} />
                                    </div>
                                )}

                                <div className="flex gap-3 pt-5 flex-col items-start justify-start w-full h-1/2">
                                    <h3 className="text-lg font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="text-base">
                                        {item.text}
                                    </p>
                                    <button onClick={() => handleSetIndex(key)} className="flex w-1/2 mt-10 hover:scale-95 transition items-center text-secondColor gap-2 text-base justify-start">
                                        <IoPlayCircleOutline className="text-xl" />
                                        Assistir vídeo
                                    </button>
                                </div>
                            </AnimatePresence>
                        </div>

                    ))}
                </motion.div>
            </div>
        </section>
    );
}
