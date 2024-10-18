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
                transition: { duration: 0.5 },
            });
        }
    }, [inView, controls]);

    useEffect(() => {
        if (navigator.userAgent.indexOf('Windows') !== -1) {
            setWindows(true);
        }
    }, []);


    return (
        <section style={{ backgroundImage: `url(${bannerCta.src})` }} className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-primary pt-[100px] pb-[100px] h-auto">
            <motion.div ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                className="w-[90%] lg:w-full max-w-[1200px] h-full lg:flex-row flex-col flex items-center justify-between">
                <div className="w-full flex items-center justify-between h-full">
                    <div className="w-[1896px] flex lg:flex-row flex-col gap-5 items-center justify-between h-full">
                        <h1 className={`text-4xl leading-normal lg:w-[50%] text-white font-bold`}>
                            Agilidade e informação desde o
                            clique até o cliente:
                        </h1>
                        <button className="lg:w-[30%] w-full hover:scale-95 transition bg-secondColor text-textSecondColor rounded-lg h-12">
                            <Link className="w-full flex items-center justify-center h-full" href={"#formulario"}> Agendar reunião</Link>
                        </button>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}