import bannerHome from "@/app/pages/home/assets/capaHome/home.png"
import iconLogo from "@/app/pages/home/assets/iconLogo.svg"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function FidelizeSeuCliente() {
    return (
        <section className="bg-cover flex items-center justify-center bg-no-repeat w-full h-[100vh] lg:pt-0 pt-32 lg:h-screen " style={{ backgroundImage: `url(${bannerHome.src})` }}>
            <div className="w-[90%] lg:gap-0 gap-10 items-center justify-center flex flex-col-reverse lg:flex-row  lg:pt-[10%] h-full ">

                <motion.div
                    initial={{ opacity: 0, translateX: -100 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.8, ease: "backInOut" }}
                    className="w-full lg:w-1/2 h-4/5 flex flex-col items-start gap-5 justify-center ">
                    <div className=" lg:flex hidden h-14 w-14 lg:h-24 p-3 lg:p-6 items-center justify-center lg:w-24 bg-custom-linear rounded-xl lg:rounded-xl shadow-md">
                        <Image className="w-full" src={iconLogo} width={100} height={100} alt="" />
                    </div>
                    <div className="flex flex-col w-full h-full gap-2 lg:gap-4">
                        <h1 className="text-3xl lg:text-5xl leading-tight text-textSecondColor font-bold">
                            Fidelize seu cliente
                            com informações em tempo real.
                        </h1>
                        <h2 className="text-textSecondColor leading-tight text-lg lg:text-xl lg:w-[90%] font-semibold">
                            Transforme a gestão da cadeia de entrega no diferencial que seu e-commerce precisa para crescer.
                        </h2>
                        <p className="text-textSecondColor leading-tight font-normal text-base lg:text-lg">
                            Antes mesmo do cliente questionar, você já sabe a resposta.
                        </p>
                        <div className="flex lg:flex-row flex-col justify-start items-center gap-2">
                            <button className="w-full lg:w-1/4 text-base h-12 hover:scale-95 transition text-textSecondColor bg-primaryColor rounded-lg">
                                <Link className="w-full h-full" href={""}>Veja a demo</Link>
                            </button>
                            <button className="w-full lg:w-2/4 text-base h-12 text-textSecondColor hover:scale-95 transition bg-secondColor rounded-lg">
                                <Link className="w-full h-full" href={""}>Fale com um especialista</Link>
                            </button>
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: 100 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.8, ease: "backInOut" }} className="w-full lg:w-1/2 h-2/5 flex flex-col items-center gap-5 justify-center ">
                    <Image className="w-2/4" src={iconLogo} width={100} height={100} alt="" />
                </motion.div>
            </div>
        </section>
    )
}