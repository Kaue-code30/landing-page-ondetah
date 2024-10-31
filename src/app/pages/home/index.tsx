import { useMotionValueEvent, useScroll } from "framer-motion";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { FidelizeSeuCliente } from "./components/fidelize";
import Cta from "./components/cta";
import AssitaNossaDemos from "./components/assistaNossasDemos";
import TransFormeSeuNegocio from "./components/transformeSeuNegocio";
import ExperienciaDoCliente from "./components/experienciaDoCliente";
import ControleTotalDaSuaCadeia from "./components/controleTotalDaSuaCadeiaNew";
import Integracoes from "./components/intregracoes";
import EscolhaOMelhorPlano from "./components/EscolhaOMelhorPlano";
import Faq from "./components/Faq";
import Footer from "./components/footer";
import ContactForm from "./components/contactForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AssistaNossaDemo from "./components/assistaDemo";
import Clientes from "./components/clientes";


export function Home() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    const queryClient = new QueryClient(); // Initialize QueryClient

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    useEffect(() => {
        if (navigator.userAgent.indexOf('Windows') !== -1) {
            document.body.classList.add('windows-zoom');
        }
    }, []);

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

    return (
        <QueryClientProvider client={queryClient}> {/* Provide QueryClient */}
            <div className="h-auto flex overflow-hidden flex-col items-center w-full">
                <Header onScroll={scrolled} />
                <FidelizeSeuCliente />

                {/* <ModalVideoDemo/> */}
                <ControleTotalDaSuaCadeia />
                <Clientes />
                <TransFormeSeuNegocio />
                <Cta />
                {/* <AssitaNossaDemos />
                 */}
                <AssistaNossaDemo />
                <ExperienciaDoCliente />
                <Integracoes />

                <EscolhaOMelhorPlano />
                <Faq />
                <ContactForm content={valuesInput} page="Landing-Page-Ondetah" nameForm="LandingPageOndetah" />
                <Footer />
            </div>
        </QueryClientProvider>
    );
}
