import { useEffect, useState } from "react";
import carrefour from "@/app/pages/home/assets/logosOndetah/carrefour.png";
import dafiti from "@/app/pages/home/assets/logosOndetah/dafiti.png";
import curta from "@/app/pages/home/assets/logosOndetah/curta.png";
import dorel from "@/app/pages/home/assets/logosOndetah/dorel.png";
import acioly from "@/app/pages/home/assets/logosOndetah/acciloly01.png";
import consul from "@/app/pages/home/assets/logosOndetah/consul.png";
import brastemp from "@/app/pages/home/assets/logosOndetah/brastemp.png";
import compraCerta from "@/app/pages/home/assets/logosOndetah/compra-certa.png";
import kitchenaid from "@/app/pages/home/assets/logosOndetah/kitchenaid.png";
import whp from "@/app/pages/home/assets/logosOndetah/whp.png";
import ginger from "@/app/pages/home/assets/logosOndetah/ginger.png";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function Clientes() {
    const initialClientes = [
        { id: 0, logo: carrefour.src, alt: "Logo Carrefour" },
        { id: 1, logo: dafiti.src, alt: "Logo Dafiti" },
        { id: 2, logo: consul.src, alt: "Logo Consul" },
        { id: 3, logo: brastemp.src, alt: "Logo Brastemp" },
        { id: 4, logo: kitchenaid.src, alt: "Logo Kitchenaid" },
        { id: 5, logo: compraCerta.src, alt: "Logo Compra Certa" },
        { id: 6, logo: whp.src, alt: "Logo Whirpool" },
        { id: 7, logo: curta.src, alt: "Logo Curta" },
        { id: 8, logo: ginger.src, alt: "Logo Ginger" },
        { id: 9, logo: dorel.src, alt: "Logo Dorel" },
        { id: 10, logo: acioly.src, alt: "Logo Acioly" },
    ];

    const [visibleCount, setVisibleCount] = useState(7); // Set a default for SSR
    const [startIndex, setStartIndex] = useState(0);

    // Adjust visibleCount based on screen width (client-side only)
    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth < 768 ? 2 : 7);
        };

        // Set initial visibleCount on mount and listen for resize events
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Update the displayed clients based on the startIndex and visibleCount
    const displayedClientes = initialClientes.slice(startIndex, startIndex + visibleCount).concat(
        initialClientes.slice(0, Math.max(0, startIndex + visibleCount - initialClientes.length))
    );

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % initialClientes.length);
    };

    const handlePrevious = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + initialClientes.length) % initialClientes.length);
    };

    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white h-auto pt-10 pb-10 lg:pt-[80px] lg:pb-[80px]">
            <div className="w-[90%] lg:w-full max-w-[1200px] gap-5 lg:gap-10 h-auto flex lg:flex-row flex-col-reverse items-center justify-between">
                <div className="flex flex-col gap-3 lg:gap-3 justify-center items-center w-full leading-normal">
                    <h1 className="text-3xl lg:text-4xl leading-tight text-textPrimaryColor font-bold">
                        Clientes que fazem a diferença
                    </h1>
                    <h2 className="text-textPrimaryColor text-center leading-tight font-normal text-base lg:text-lg">
                        Parceiros que confiam na nossa expertise e visão de futuro.
                    </h2>
                    <div className="w-full h-[120px] lg:h-auto flex pt-5 items-center justify-center gap-3">
                        <button onClick={handlePrevious} className="w-10 h-10 hover:scale-90 transition flex rounded-lg items-center justify-center bg-[#CCCBE4]">
                            <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={27} />
                        </button>
                        <motion.div initial={{ translateX: 100 }} animate={{ translateX: 0 }} className="w-4/5 lg:w-full flex justify-center gap-4 h-full">
                            {displayedClientes.map((cliente) => (
                                <motion.div initial={{ translateX: 10 }} transition={{ ease: "easeInOut", duration: 0.1 }} animate={{ translateX: 0 }} key={cliente.id} className={`w-24 h-24 lg:w-[130px] transition-all p-2 flex items-center justify-center lg:h-[130px] rounded-md shadow-md border-[0.5px]`}>
                                    <Image className="w-full lg:w-full rounded-lg" src={cliente.logo} alt={cliente.alt} width={100} height={100} />
                                </motion.div>
                            ))}
                        </motion.div>
                        <button onClick={handleNext} className="w-10 h-10 flex hover:scale-90 transition rounded-lg items-center justify-center bg-[#CCCBE4]">
                            <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={27} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
