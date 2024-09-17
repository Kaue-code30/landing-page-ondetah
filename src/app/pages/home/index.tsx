"use client"
import { useMotionValueEvent, useScroll } from "framer-motion";
import Header from "./components/header";
import { useState } from "react";
import { FidelizeSeuCliente } from "./components/fidelize";
import Cta from "./components/cta";
import AssitaNossaDemos from "./components/assistaNossasDemos";
import TransFormeSeuNegocio from "./components/transformeSeuNegocio";
import ExperienciaDoCliente from "./components/experienciaDoCliente";

export function Home() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })

    return (
        <div className="h-auto flex overflow-x-hidden flex-col items-center w-full">
            <Header onScroll={scrolled} />
            <FidelizeSeuCliente />
            <TransFormeSeuNegocio/>
            <Cta />
            <AssitaNossaDemos/>
            <ExperienciaDoCliente/>
        </div>



    )
}