import { AnimationControls, motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import bannerCta from "@/app/pages/home/assets/cta.png"



export default function Cta() {

    const controls: AnimationControls = useAnimation();
    const ref = useRef(null)
    const [windows, setWindows] = useState(false);
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

    useEffect(() => {
        if (navigator.userAgent.indexOf('Windows') !== -1) {
            setWindows(true);
        }
    }, []);


    return (
        <section className="w-full h-[60vh] lg:h-[50vh] pt-14 lg:pt-[5%]  flex items-center justify-center">
            <motion.div ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                style={{ backgroundImage: `url(${bannerCta.src})` }}
                className="w-full lg:flex-row flex-col bg-cover bg-[75%] flex justify-center lg:gap-0 gap-5 lg:justify-center items-start lg:items-center px-5 lg:px-32  h-full ">
                <div className="w-[85%] h-full flex items-center justify-center">
                    <div className="w-full flex lg:flex-row flex-col gap-5 items-center justify-center h-full">
                        <h1 className={`text-2xl ${windows ? "text-xl" : "lg:text-[44px] lg:pr-10"} lg:pl-5 leading-normal lg:w-[63%] text-white font-bold`}>
                            Agilidade e informação desde o
                            clique até o cliente:
                        </h1>
                        <button className="lg:w-[30%] w-full hover:scale-95 transition bg-secondColor text-textSecondColor rounded-lg h-12">
                            <Link className="w-full h-full" href={"https://calendly.com/naticamposux/ux-group-voce"}> Agendar reunião</Link>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}