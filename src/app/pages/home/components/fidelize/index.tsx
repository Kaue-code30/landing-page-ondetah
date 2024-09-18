import bannerHome from "@/app/pages/home/assets/capaHome/home.png";
import iconLogo from "@/app/pages/home/assets/iconLogo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function FidelizeSeuCliente() {
  return (
    <section
      className="bg-cover bg-center flex items-center justify-center bg-no-repeat w-full h-auto lg:h-auto min-h-screen pt-32 lg:pt-0"
      style={{ backgroundImage: `url(${bannerHome.src})` }}
    >
      {/* Container Principal */}
      <div className="w-[90%] flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center justify-center h-full py-10 lg:py-0">
        
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
                <Link href={""} className="w-full h-full">Veja a demo</Link>
              </button>
              <button className="w-full lg:w-2/4 text-base h-12 bg-secondColor text-textSecondColor rounded-lg hover:scale-95 transition">
                <Link href={""} className="w-full h-full">Fale com um especialista</Link>
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
          <Image className="w-2/4 lg:w-1/3" src={iconLogo} width={150} height={150} alt="Logo Grande" />
        </motion.div>
      </div>
    </section>
  );
}
