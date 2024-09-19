import { AnimationControls, motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function Integracoes() {
    const controls: AnimationControls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    // Estado para armazenar o termo de pesquisa
    const [searchTerm, setSearchTerm] = useState('');

    // Estado para armazenar a categoria selecionada
    const [selectedCategory, setSelectedCategory] = useState('E-commerce');

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
            });
        }
    }, [inView, controls]);

    const ButtonList = [

        { index: 1, text: "E-commerce" },
        { index: 2, text: "Marketplace" },
        { index: 3, text: "Marketing" },
        { index: 4, text: "PDV" },
        { index: 5, text: "CRM" },
        { index: 9, text: "Outras" },
    ];

    const JsonList = [
        { index: 0, title: "RD station", type: "Marketing", image: "" },
        { index: 1, title: "Send Grid", type: "Marketing", image: "" },
        { index: 2, title: "Wordpress", type: "Marketing", image: "" },
        { index: 3, title: "HubSpot", type: "Marketing", image: "" },
        { index: 4, title: "Salesforce", type: "Marketing", image: "" },
    ];

    // Filtrar a lista com base no termo de pesquisa e na categoria selecionada
    const filteredList = JsonList.filter(item =>
        (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.type.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === 'All' || item.type === selectedCategory)
    );

    return (
        <section className="w-full h-auto overflow-hidden mt-0 flex items-center justify-center">
            <div className="w-[90%] lg:w-[90%] flex items-center gap-2 justify-start lg:justify-start pb-10 flex-col h-full">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    className="w-[90%] shadow-md absolute flex lg:gap-0 gap-3 items-center justify-start py-10 p-5 lg:p-20 flex-col rounded-2xl -mt-[200px] h-[55%] lg:h-[28%] bg-[#EDEDED]"
                >
                    <h1 className="text-3xl lg:text-4xl text-center lg:w-1/2 leading-tight text-textPrimaryColor font-bold">
                        Integrações
                    </h1>
                    <h2 className="text-textPrimaryColor pt-3 leading-tight text-center w-full font-normal text-base lg:text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h2>

                    {/* Input de busca */}
                    <div className="relative rounded-2xl shadow-md pt-3 flex items-center justify-center w-full lg:w-[700px]">
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
                    </div>

                    {/* Botões de categorias */}
                    <div className="lg:w-1/2 flex flex-wrap gap-2 pt-3 items-center justify-center">
                        {ButtonList.map((i) => (
                            <button
                                key={i.index}
                                onClick={() => setSelectedCategory(i.text)}
                                className={`h-12 ${selectedCategory === i.text ? 'bg-primaryColor text-textSecondColor' : 'bg-[#D9D9D9] hover:scale-95'} transition duration-300 rounded-lg border w-auto px-3 lg:px-8`}
                            >
                                {i.text}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Lista de Integrações filtrada */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={controls}
                    className="w-full lg:w-[80%] flex gap-5 overflow-x-auto pb-3 lg:overflow-x-visible lg:flex-wrap pt-[320px] lg:pt-[280px]"
                >
                    {filteredList.length > 0 ? (
                        filteredList.map((i, index) => (
                            <div key={index} className="min-w-[150px] shadow-md w-[100px] lg:w-[32%] flex lg:flex-row flex-col gap-4 items-center lg:items-start justify-start rounded-lg p-5 h-[200px] lg:h-32 border-[0.5px]">
                                <div className="w-[80%] h-full lg:w-1/4 lg:h-full rounded-2xl bg-primaryColor">
                                    {/* Espaço para a imagem ou conteúdo */}
                                </div>
                                <div className="w-full lg:w-3/4 flex items-center lg:items-start justify-center flex-col h-full">
                                    <p className="font-bold text-textPrimaryColor">
                                        {i.title}
                                    </p>
                                    <p className="text-sm text-textPrimaryColor">
                                        {i.type}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-textPrimaryColor font-semibold flex items-center justify-center h-[50px] lg:h-[130px] w-full text-center">Desculpe mas não temos esta integração...</p>
                    )}
                </motion.div>

                {/* Botão de não encontrar a integração */}
                <button className="mt-5 w-full lg:w-1/2 text-secondColor font-medium hover:scale-95 duration-300 rounded-lg bg-[#BDF5EC] h-12">
                    <Link href={""}>
                        Não encontrei a integração que preciso
                    </Link>
                </button>
            </div>
        </section>
    );
}
