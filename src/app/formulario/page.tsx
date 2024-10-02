"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContactForm from "../pages/home/components/contactFormPlano";
import Footer from "../pages/home/components/footer";
import Header from "../pages/home/components/header";
import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function FormularioContratacao() {
    const [scrolled, setScrolled] = useState(false);
    const [plano, setPlano] = useState("");
    const [media, setMedia] = useState("");
    const { scrollY } = useScroll();
    const queryClient = useMemo(() => new QueryClient(), []);
    const valuesInput = [
        {
            value: "Melhorar a experiência do cliente durante o processo de compra",
        },
        {
            value: "Reduzir os contatos no SAC",
        },
        {
            value: "Diminuir atrasos e problemas na entrega dos pedidos",
        },
        {
            value: "Antecipar e mitigar riscos operacionais",
        },
        {
            value: "Reduzir a pegada de carbono das operações logísticas",
        },
    ];
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });



    useEffect(() => {
        if (typeof window !== "undefined") {
            /* eslint-disable no-unused-vars */
            const localPlano = localStorage.getItem("plano")
            setPlano(`${localPlano}`)
            const localMedia = localStorage.getItem("media")
            setMedia(`${localMedia}`)
            /* eslint-disable no-unused-vars */
        }
    }, []);


    return (
        <QueryClientProvider client={queryClient}>
            <Header onScroll={scrolled} />
            <div className="h-auto bg-primaryColor pt-28  flex lg:w-full w-full flex-col items-center justify-center">
                <motion.div initial={{ translateX: -100, opacity: 0 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.7, ease: "linear" }} className="h-auto scale-95 flex lg:w-full w-[90%] pb-10 flex-col items-center justify-center">


                    <h1 className={`text-3xl lg:text-4xl text-left text-white lg:text-center  leading-tight   font-bold`}>
                        Escolha o melhor plano para você:
                    </h1>
                    <h2 className={`pt-3 leading-tight lg:text-center text-white text-left  w-full font-normal text-base`}>
                        Nossos planos são do tamanho das necessidades do seu negócio.
                    </h2>
                    <ContactForm mediaPedidos={`${media}`} plano={`${plano}`} content={valuesInput} page="Landing-Page-Ondetah" nameForm="LandingPageOndetah" />
                </motion.div>
            </div>

            <Footer />
        </QueryClientProvider>

    )
}