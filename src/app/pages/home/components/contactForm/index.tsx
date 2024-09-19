import { useClientData } from "@/app/pages/home/hooks/client";
import { contactFormData } from "@/app/pages/home/interfaces/clientData";
import { QueryClientProvider } from "@tanstack/react-query";
import Script from "next/script";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { ClientData } from "@/app/pages/home/interfaces/clientData";

export default function ContactForm({
    content,
    inputAlternative,
    page,
    nameForm,
}: contactFormData) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        floating_first_name: "",
        floating_email: "",
        floating_phone: "",
        floating_company: "",
        floating_cargo: "",
        floating_segmento: "",
        floating_numeroFuncionarios: "",
        floating_querofalarSobre: "",
        floating_message: "",
        floating_terms: "",
        conversion_identifier: nameForm,
        page_name: page,
    });

    const { mutate, isLoading, isSuccess } = useClientData();
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        if (type === 'checkbox') {
            setFormData(prevFormData => {
                // Se for o checkbox dos termos, definir o valor conforme o estado `checked`
                if (name === 'floating_terms') {
                    return {
                        ...prevFormData,
                        [name]: checked ? value : "",
                    };
                }

                // Verifica se o campo é um checkbox para múltiplas seleções
                const currentSelections = prevFormData[name as keyof ClientData] ? prevFormData[name as keyof ClientData].split(',') : [];
                const updatedSelections = checked
                    ? [...currentSelections, value].filter((item, index, self) => self.indexOf(item) === index)
                    : currentSelections.filter(item => item !== value);

                return {
                    ...prevFormData,
                    [name as keyof ClientData]: updatedSelections.join(','),
                };
            });
        } else {
            setFormData({
                ...formData,
                [name as keyof ClientData]: value,
            });
        }
    };


    useEffect(() => {
        if (isSuccess) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);

            setFormData({
                floating_first_name: "",
                floating_email: "",
                floating_phone: "",
                floating_company: "",
                floating_cargo: "",
                floating_numeroFuncionarios: "",
                floating_segmento: "",
                floating_querofalarSobre: "",
                floating_message: "",
                floating_terms: "",
                conversion_identifier: nameForm,
                page_name: page,
            });
        }
    }, [isSuccess]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Verifique se o checkbox de termos está marcado
        if (!formData.floating_terms) {
            alert("Você precisa aceitar os termos para enviar o formulário.");
            return;
        }

        // Verifique se o campo 'querofalarSobre' não está vazio
        if (formData.floating_querofalarSobre === "") {
            alert("Você precisa selecionar pelo menos um item no campo 'Quero falar sobre'.");
            return;
        }

        // Se todas as validações forem passadas, envie os dados do formulário
        mutate(formData);
    };




    return (
        <>
            {/* <Script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js"
      ></Script> */}
            <section id="formulario" className="bg-primaryColor pt-[80px] w-full">
                <div className="w-full md:w-full text-white gap-3 pb-5 flex text-center items-center justify-center flex-col">
                    <h1 className="w-[90%] text-3xl font-bold md:w-full text-center">
                        Fale diretamente com o nosso time.
                    </h1>
                    <p className="w-4/5 md:w-full">
                        Nos informe qual tipo de contato gostaria de fazer.
                    </p>
                </div>
                <form
                    id={nameForm}
                    name={nameForm}
                    className="max-w-md w-[90%] mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_first_name}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nome*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_email}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            E-mail*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="tel"
                            name="floating_phone"
                            id="floating_phone"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_phone}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Telefone*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_company}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Empresa* (Ex. UX Group)
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="floating_numeroFuncionarios"
                            id="floating_numeroFuncionarios"
                            className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={formData.floating_numeroFuncionarios}
                            onChange={handleChange}
                            required
                        >
                            <option value="0" className="text-white">
                                Número de funcionários*
                            </option>
                            <option value="1 - 10" className="text-black ">
                                1 - 10
                            </option>
                            <option value="11 - 50" className="text-black ">
                                11 - 50
                            </option>
                            <option value="51 - 200" className="text-black ">
                                51 - 200
                            </option>
                            <option value="201 - 500" className="text-black ">
                                201 - 500
                            </option>
                            <option value="501 - 1.000" className="text-black ">
                                501 - 1.000
                            </option>
                            <option value="1.001 - 5.000" className="text-black ">
                                1.001 - 5.000
                            </option>
                            <option value="5.001 - 10.000" className="text-black ">
                                5.001 - 10.000
                            </option>
                            <option value="Mais de 10.000" className="text-black ">
                                Mais de 10.000
                            </option>

                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="floating_segmento"
                            id="floating_segmento"
                            className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={formData.floating_segmento}
                            onChange={handleChange}
                            required
                        >
                            <option value="Segmento*" className="text-white">
                                Segmento*
                            </option>
                            <option value="Comércio Varejista" className="text-black ">
                                Comércio Varejista
                            </option>
                            <option value="Comércio Atacadista" className="text-black ">
                                Comércio Atacadista
                            </option>
                            <option value="Transporte de cargas" className="text-black ">
                                Transporte de cargas
                            </option>
                            <option value="Indústria" className="text-black ">
                                Indústria
                            </option>
                            <option value="Serviços" className="text-black ">
                                Serviços
                            </option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="floating_cargo"
                            id="floating_cargo"
                            className="block py-2.5 px-0 w-full text-sm text-[#bfbfbf] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={formData.floating_cargo}
                            onChange={handleChange}
                            required
                        >
                            <option value="Cargo" className="text-white">
                                Cargo*
                            </option>
                            <option value="Proprietário/ Fundador" className="text-black ">
                                Proprietário/ Fundador
                            </option>
                            <option value="C-Level/ Diretor" className="text-black ">
                                C-Level/ Diretor
                            </option>
                            <option value="Gerente/Coordenador" className="text-black ">
                                Gerente/Coordenador
                            </option>
                            <option value="Especialista" className="text-black ">
                                Especialista
                            </option>
                            <option value="Analista" className="text-black ">
                                Analista
                            </option>
                            <option value="Consultor Externo" className="text-black ">
                                Consultor Externo
                            </option>
                            <option value="Outros" className="text-black ">
                                Outros
                            </option>
                        </select>
                    </div>
                    <div className="relative p-3 lg:p-5 border flex-col gap-2 z-0 w-full mb-5 group">
                        <div className="pb-2">
                            <label className="text-sm text-[#bfbfbf]" htmlFor="title">Quero falar sobre*</label>
                        </div>

                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre1" name="floating_querofalarSobre" value="Plataforma de e-commerce" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre1">Plataforma de e-commerce</label>
                        <br />

                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre2" name="floating_querofalarSobre" value="Logística para e-commerce: Fulfillment" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre2">Logística para e-commerce: Fulfillment</label>
                        <br />

                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre3" name="floating_querofalarSobre" value="TMS Embarcador" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre3">TMS Embarcador</label>
                        <br />

                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre4" name="floating_querofalarSobre" value="TMS Transportador" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre4">TMS Transportador</label>
                        <br />

                        <input className="mr-2" type="checkbox" id="floating_querofalarSobre5" name="floating_querofalarSobre" value="Gestão de pedidos, comunicação e rastreio" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre5">CX: Comunicação, gestão de pedidos e rastreio</label>
                        <br />

                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre6" name="floating_querofalarSobre" value="Torre de controle em tempo real e envios" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre6">Torre de controle em tempo real e envios</label>
                        <br />

                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre7" name="floating_querofalarSobre" value="PUDO: Retirada e Coleta de Mercadorias" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre7">PUDO: Retirada e Coleta de Mercadorias</label>
                        <br />
                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre7" name="floating_querofalarSobre" value="Parcerias" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre8">Parcerias</label>
                        <br />

                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre8" name="floating_querofalarSobre" value="Quero trabalhar na UX Group!" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre8">Quero trabalhar na UX Group!</label>
                        <br />
                        <input className="mr-2 mt-2" type="checkbox" id="floating_querofalarSobre9" name="floating_querofalarSobre" value="Outros" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_querofalarSobre9">Outros</label>
                        <br />
                    </div>

                    {inputAlternative?.map((data) => (
                        <div key={data.id} className="relative z-0 w-full mb-5 group">
                            <input
                                type={data.type}
                                name={data.name}
                                id={data.id}
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                                placeholder={data.placeholder}
                                onChange={handleChange}
                                required={data.required}
                            />
                            <label
                                htmlFor={data.id}
                                className="peer-focus:font-medium absolute text-sm text-[#bfbfbf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                {data.text}
                            </label>
                        </div>
                    ))}
                    <div className="grid md:grid-cols-1 md:gap-6">

                        <input
                            type="hidden"
                            id="referencia"
                            name="referencia"
                            value={page}
                        />
                        <div className="flex items-center pb-10">
                            <input
                                id="floating_terms"
                                name="floating_terms"
                                type="checkbox"
                                value="Eu concordo em receber comunicações."
                                onChange={handleChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label
                                htmlFor="cf_terms"
                                className="ms-2 text-sm font-medium text-[#bfbfbf] focus:text-white"
                            >
                                Eu concordo em receber comunicações.*
                            </label>
                        </div>
                    </div>

                    {showSuccess && (
                        <motion.div
                            initial={{ left: -400, opacity: 0 }}
                            animate={{
                                left: 100,
                                opacity: 100,
                                transition: { duration: 0.5 },
                            }}
                            id="toast-simple"
                            className="fixed bottom-[80%] left-20  flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow "
                            role="alert"
                        >
                            <FaRegCheckCircle className="w-9 text-4xl text-[#009580] " />
                            <div className="ps-4 text-sm text-black font-normal">
                                <h1 className="text-base ">Obrigado pelo contato.</h1>
                                Em Breve nosso time comercial entrará em contato com você.
                            </div>
                        </motion.div>
                    )}
                    <button
                        type="submit"
                        className={`text-white md:w-full hover:font-semibold w-full bg-transparent border border-white transition-all hover:bg-white focus:ring-4 focus:outline-none hover:text-black focus:ring-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ${(!formData.floating_terms || formData.floating_querofalarSobre === "") ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!formData.floating_terms || formData.floating_querofalarSobre === ""}
                    >
                        Enviar contato
                    </button>
                </form>
            </section>
        </>
    );
}
