import bannerHome from "@/app/pages/home/assets/capaHome/home.png";
import gif from "@/app/pages/home/assets/gif-ondetah.gif"
import iconLogo from "@/app/pages/home/assets/iconLogo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function FidelizeSeuCliente() {
    return (
        <section
            style={{ backgroundImage: `url(${bannerHome.src})` }}
            className={`md:bg-center bg-[70%] bg-cover items-center flex justify-center lg:h-[110vh] h-auto md:h-[100vh] w-full pb-0 bg-no-repeat bg-[#bfbfbf] bg-blend-multiply`}
        >
            <div className="w-[90%] lg:flex-row flex-col-reverse flex gap-10 items-center   lg:py-0 pb-24 pt-24 justify-center  h-full">

                {/* Coluna Esquerda (Texto e Botões) */}
                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.8, ease: "backInOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-start gap-5 justify-center"
                >
                    {/* Logo no Topo */}
                    <div className="hidden lg:flex h-14 w-14 lg:h-24 lg:w-24 p-3 lg:p-6 bg-custom-linear rounded-xl shadow-md items-center justify-center">
                        <Image className="w-full" src={iconLogo} width={100} height={100} alt="Logo" />
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col w-full gap-2 lg:gap-4">
                        <h1 className="text-3xl lg:text-5xl leading-tight text-textSecondColor font-bold">
                            Fidelize seu cliente com informações em tempo real.
                        </h1>
                        <h2 className="text-textSecondColor text-lg lg:text-xl lg:w-[90%] font-semibold">
                            Transforme a gestão da cadeia de entrega no diferencial que seu e-commerce precisa para crescer.
                        </h2>
                        <p className="text-textSecondColor text-base lg:text-lg">
                            Antes mesmo do cliente questionar, você já sabe a resposta.
                        </p>

                        {/* Botões */}
                        <div className="flex lg:flex-row flex-col gap-2 justify-start items-center">
                            <button className="w-full lg:w-1/4 text-base h-12 bg-primaryColor text-textSecondColor rounded-lg hover:scale-95 transition">
                                <Link href={"#demos"} className="w-full h-full">Veja a demo</Link>
                            </button>
                            <button className="w-full lg:w-2/4 text-base h-12 bg-secondColor text-textSecondColor rounded-lg hover:scale-95 transition">
                                <Link href={"#formulario"} className="w-full h-full">Fale com um especialista</Link>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Coluna Direita (Logo Grande) */}
                <motion.div
                    initial={{ opacity: 0, translateX: 100 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.8, ease: "backInOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-center justify-center h-2/5 lg:h-auto"
                >
                    <Image className="w-2/4 lg:w-3/4" src={gif.src} width={150} height={150} alt="Logo Grande" />
                </motion.div>
            </div>
        </section>
    );
}
