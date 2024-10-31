import { useRef } from "react";
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
import iconeLogo from "@/app/pages/home/assets/iconLogo.svg"

const images = [
    carrefour,
    dafiti,
    consul,
    brastemp,
    kitchenaid,
    compraCerta,
    whp,
    curta,
    ginger,
    acioly,
    dorel,
];

export default function Clientes() {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollLeft - 1000,
                behavior: "smooth",
            });
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollLeft + 1000,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white h-auto pt-[50px] pb-[30px]">
            <div className="w-[90%] lg:w-full max-w-[1200px] gap-5 lg:gap-6 h-auto flex  flex-col items-center justify-center">
                <div className="lg:flex w-full gap-10 lg:flex-row-reverse lg:items-center">
                    <div className="w-full ">
                        <div className="lg:w-[65%]">
                            <h1 className="text-black text-4xl lg:text-4xl pb-2 font-bold h-auto lg:w-[90%]">
                                Titulo
                            </h1>
                            <p className="text-black w-full lg:w-[90%]">
                                Ou seja, uma experiência única, pensada no cliente final, com
                                soluções personalizadas, que conectam tecnologias e operações.
                            </p>
                        </div>
                    </div>

                    <div className="hidden h-2/4 rounded-2xl bg-custom-linear p-6 w-[15%] lg:flex items-center justify-center">
                        <Image
                            className=" "
                            alt="Clientes Ondetah"
                            width={100}
                            height={100}
                            src={iconeLogo}
                        />
                    </div>
                </div>

                <hr className=" border-[#bfbfbf9b] border-1 w-full " />

                <div className="w-full flex-row gap-4 pb-2 md:[display:flex] [display:none] justify-center md:justify-end">
                    <div
                        className="w-10 h-10 flex items-center justify-center shadow-md transition-all rounded-lg bg-[#cccbe4] cursor-pointer"
                        onClick={handleScrollLeft}
                    >
                        <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={27} />
                    </div>
                    <div
                        className="w-10 h-10 flex items-center justify-center shadow-md transition-all rounded-lg bg-[#cccbe4] cursor-pointer"
                        onClick={handleScrollRight}
                    >
                        <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={27} />
                    </div>
                </div>

                <div
                    className="flex w-full lg:flex-row flex-row items-center gap-5 pb-5 transition lg:flex  lg:pl-[0%] overflow-auto"
                    ref={containerRef}
                >
                    {images.map((image, index) => (
                        <Image
                            className="w-24 transition border-transparent lg:rounded-2xl hover:border-2 hover:border-transparent hover:shadow-xl lg:p-2  text-black lg:w-[130px]"
                            key={index}
                            src={image.src}
                            alt="Logo dos clientes UX"
                            width={100}
                            height={100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

