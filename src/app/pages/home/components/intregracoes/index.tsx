import {  AnimationControls, motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward, } from "react-icons/io";
import logoBling from "@/app/pages/home/assets/integracoes/integracao-bling.png"
import logoMirakl from "@/app/pages/home/assets/integracoes/integracao-mirakl.png"
import logoShopify from "@/app/pages/home/assets/integracoes/integracao-shopify.png"
import logoTray from "@/app/pages/home/assets/integracoes/integracao-tray.png"
import logoTrux from "@/app/pages/home/assets/integracoes/integracao-trux.png"
import maisIntegracoes from "@/app/pages/home/assets/integracoes/maisintegracoes.png";
import Image from "next/image";

export default function Integracoes() {
    const controls: AnimationControls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const containerRef = useRef<HTMLDivElement>(null);

    // Estado para armazenar o termo de pesquisa
    // const [searchTerm, setSearchTerm] = useState('');

    // Estado para armazenar a categoria selecionada
    // const [selectedCategory] = useState('E-commerce');

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
            });
        }
    }, [inView, controls]);

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollLeft + 260,
                behavior: "smooth",
            });
        }
    };
    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollLeft - 10000,
                behavior: "smooth",
            });
        }
    };

    // const ButtonList = [

    //     { index: 1, text: "E-commerce" },
    //     { index: 2, text: "Marketplace" },
    //     { index: 3, text: "Marketing" },
    //     { index: 4, text: "PDV" },
    //     { index: 5, text: "CRM" },
    //     { index: 9, text: "Outras" },
    // ];

    const JsonList = [
        { index: 0, title: "Bling", type: "E-commerce", image: logoBling.src },
        { index: 1, title: "Mirakl", type: "Marketing", image: logoMirakl.src },
        { index: 2, title: "Shopify", type: "Marketplace", image: logoShopify.src },
        { index: 3, title: "Tray", type: "PDV", image: logoTray.src },
        { index: 4, title: "Trux", type: "CRM", image: logoTrux.src },
        { index: 5, title: "Em breve", type: "Novas integrações", image: maisIntegracoes.src },
    ];

    // Filtrar a lista com base no termo de pesquisa e na categoria selecionada
    // const filteredList = JsonList.filter(item =>
    //     (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //         item.type.toLowerCase().includes(searchTerm.toLowerCase())) &&
    //     (selectedCategory === 'All' || item.type === selectedCategory)
    // );

    return (
        <section id="integracoes" className="bg-white lg:h-auto max-w-[1996px] lg:pb-0 pb-5 pt-[2%] w-full">
            <div className="flex flex-col w-full items-center justify-center">
                <motion.div ref={ref}
                    initial={{ opacity: 0, y: 100 }}

                    animate={controls} className="flex w-full justify-center lg:pt-28 h-1/4 items-center">
                    <div className="w-[90%] lg:w-[90%] flex items-center gap-2 justify-start lg:justify-start pb-10 flex-col h-full">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={controls}
                            className="lg:w-[85%] shadow-md w-full flex lg:gap-0 gap-3 items-center justify-start py-10 p-5 lg:p-20 flex-col rounded-2xl -mt-[20%] h-[55%] lg:h-[28%] bg-[#EDEDED]"
                        >
                            <h1 className="text-3xl lg:text-4xl text-center lg:w-1/2 leading-tight text-textPrimaryColor font-bold">
                                Integrações
                            </h1>
                            <h2 className="text-textPrimaryColor pt-3 lg:w-4/5 leading-tight text-center w-full font-normal text-base lg:text-lg">
                                Conectamos facilmente a outras ferramentas para potencializar os ganhos da sua operação
                            </h2>

                            {/* Input de busca */}
                            {/* <div className="relative rounded-2xl shadow-md pt-3 flex items-center justify-center w-full lg:w-[700px]">
                                <label htmlFor="search" className="absolute w-20 left-3 top-[60%] transform -translate-y-1/2">
                                    <IoMdSearch fontSize={30} className="p-1 bg-[#BDF5EC] text-secondColor rounded-md" />
                                </label>
                                <input
                                    id="search"
                                    className="w-full h-14 pl-14 pr-4 border rounded-md focus:outline-none"
                                    type="text"
                                    placeholder="Integrações"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado de busca
                                />
                            </div> */}

                            <div className="lg:hidden  my-2 flex items-center w-full justify-between">
                                <div
                                    className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]"
                                    onClick={handleScrollLeft}
                                >
                                    <IoIosArrowBack className="-ml-1 text-primaryColor" fontSize={26} />
                                </div>
                                <div
                                    className="w-10 h-10 hover:scale-95 transition flex rounded-lg items-center justify-center  bg-[#CCCBE4]"
                                    onClick={handleScrollRight}
                                >
                                    <IoIosArrowForward className="ml-1 text-primaryColor font-bold" fontWeight={700} fontSize={26} />
                                </div>
                            </div>

                            {/* Botões de categorias */}
                            <div ref={containerRef} className="lg:w-4/5 flex overflow-x-auto flex-row w-full pb-2 lg:flex-wrap gap-2 lg:pt-5 items-center justify-start lg:justify-center">


                                {
                                    JsonList.map((i, index) => (
                                        <motion.div
                                            ref={ref}
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={controls}
                                            key={index} className="w-[230px] min-w-[265px] shadow-md  lg:w-auto  flex flex-row  gap-4 items-center bg-white lg:items-center justify-start rounded-lg p-5 h-[130px] lg:h-[100px] border-[0.5px]">
                                            <div className={` w-full lg:h-full ${i.index === 5 ? "lg:w-[70px]": "lg:w-[80px]"} lg:w-[80px]  rounded-2xl`}>
                                                <Image className=" w-full lg:object-cover rounded-lg transition shadow-md " src={i.image} alt={`Logo da empresa ${i.title}`} quality={100} width={10000} height={10000} />
                                            </div>
                                            <div className="w-full  lg:w-3/4 flex items-center lg:items-start justify-center flex-col h-full">
                                                <p className="font-bold text-textPrimaryColor">
                                                    {i.title}
                                                </p>
                                                <p className="text-xs lg:text-sm lg:text-left text-center text-textPrimaryColor">
                                                    {i.type}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}


                                {/* {ButtonList.map((i) => (
                                    <button
                                        key={i.index}
                                        onClick={() => setSelectedCategory(i.text)}
                                        className={`h-12 ${selectedCategory === i.text ? 'bg-primaryColor text-textSecondColor' : 'bg-[#D9D9D9] hover:scale-95'} transition duration-300 rounded-lg border w-auto px-3 lg:px-8`}
                                    >
                                        {i.text}
                                    </button>
                                ))} */}
                            </div>
                        </motion.div>



                        {/* <motion.div
                            ref={containerRef}

                            className="w-full lg:w-[80%] flex gap-5 overflow-x-auto pb-3 lg:overflow-x-visible lg:flex-wrap lg:pt-10 "
                        >
                            <AnimatePresence>

                                {filteredList.length > 0 ? (
                                    filteredList.map((i, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, translateY: -10 }}
                                            animate={{ translateY: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, ease: 'linear' }}
                                            key={index} className="min-w-[150px] shadow-md w-[100px] lg:w-[32%] flex lg:flex-row flex-col gap-4 items-center lg:items-start justify-start rounded-lg p-5 h-[200px] lg:h-32 border-[0.5px]">
                                            <div className="w-[80%]  lg:w-1/4  rounded-2xl">
                                                <Image className=" object-cover rounded-lg transition shadow-md " src={i.image} alt={`Logo da empresa ${i.title}`} quality={100} width={10000} height={10000} />
                                            </div>
                                            <div className="w-full lg:w-3/4 flex items-center lg:items-start justify-center flex-col h-full">
                                                <p className="font-bold text-textPrimaryColor">
                                                    {i.title}
                                                </p>
                                                <p className="text-sm text-textPrimaryColor">
                                                    {i.type}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.p initial={{ opacity: 0, translateY: -10 }}
                                        exit={{ opacity: 0, translateY: -10 }}
                                        animate={{ translateY: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, ease: 'linear' }} key={0} className="text-textPrimaryColor font-semibold flex items-center justify-center h-[50px] lg:h-[50px] w-full text-center">Desculpe mas não temos esta integração...</motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div> */}

                        {/* Botão de não encontrar a integração */}
                        <button className="mt-5 w-full lg:w-1/2 text-secondColor font-medium hover:scale-95 duration-300 rounded-lg bg-[#BDF5EC] h-12">
                            <Link href={"#formulario"}>
                                Não encontrei a integração que preciso
                            </Link>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
