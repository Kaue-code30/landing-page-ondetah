
import { ClientDataPlano, contactFormDataPlano } from "@/app/pages/home/interfaces/clientData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { ClientData } from "@/app/pages/home/interfaces/clientData";
import { useClientData } from "../../hooks/clientPlano";

export default function ContactForm({
    plano,
    mediaPedidos,
    page,
    nameForm,
}: contactFormDataPlano) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({

        floating_first_name: "",
        floating_plano: plano,
        floating_mediaPedidos: mediaPedidos,
        floating_email: "",
        floating_site: "",
        floating_company: "",
        floating_cnpj: "",
        floating_linkEnviados: "",
        floating_tecnologiasQuePossui: "",
        floating_QuantasTransportadoras: "",
        floating_funcoesDeComunicacao: "",
        floating_terms: "",
        conversion_identifier: nameForm,
        page_name: page,
    });

    const { mutate, isSuccess } = useClientData();
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;

        // Verifica se o evento é disparado por um checkbox
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement; // Type casting explícito para HTMLInputElement, pois apenas inputs têm 'checked'

            setFormData((prevFormData) => {
                if (name === 'floating_terms') {
                    return {
                        ...prevFormData,
                        [name]: checked ? value : "", // Se o checkbox estiver marcado, armazena o valor
                    };
                }

                // Checkbox de múltiplas seleções
                const currentSelections = prevFormData[name as keyof ClientDataPlano]
                    ? (prevFormData[name as keyof ClientDataPlano] as string).split(',')
                    : [];

                const updatedSelections = checked
                    ? [...currentSelections, value].filter(
                        (item, index, self) => self.indexOf(item) === index
                    )
                    : currentSelections.filter(item => item !== value);

                return {
                    ...prevFormData,
                    [name as keyof ClientData]: updatedSelections.join(','), // Atualiza o campo
                };
            });
        } else {
            // Para campos de texto, select e textarea
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name as keyof ClientDataPlano]: value, // Atualiza o valor do campo de texto
            }));
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
                floating_company: "",
                floating_plano: plano,
                floating_site: "",
                floating_linkEnviados: "",
                floating_mediaPedidos: mediaPedidos,
                floating_cnpj: "",
                floating_tecnologiasQuePossui: "",
                floating_QuantasTransportadoras: "",
                floating_funcoesDeComunicacao: "",
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
        if (formData.floating_funcoesDeComunicacao === "") {
            alert("Você precisa selecionar pelo menos um item no campo 'Quais funções de comunicação gostaria?*'.");
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
            <div id="formulario" className="bg-primaryColor  flex items-start justify-start pt-[20px] w-full">
                <form
                    id={nameForm}
                    name={nameForm}
                    className="lg:max-w-md w-full lg:w-[90%] lg:pr-10 mx-auto"
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
                            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            E-mail*
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="floating_company"
                            id="floating_company"
                            className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_company}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Empresa* (Ex. UX Group)
                        </label>

                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="cnpj"
                            name="floating_cnpj"
                            id="floating_cnpj"
                            className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                            value={formData.floating_cnpj}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="cnpj"
                            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            CNPJ*
                        </label>
                    </div>
                    {/* <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="siteEmpresa"
                            name="floating_siteEmpres"
                            id="floating_siteEmpresa"
                            className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=""
                            value={formData.floating_site}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="siteEmpresa"
                            className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Site da empresa*
                        </label>
                    </div> */}
                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="floating_tecnologiasQuePossui"
                            id="floating_tecnologiasQuePossui"
                            className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={formData.floating_tecnologiasQuePossui}
                            onChange={handleChange}
                            required
                        >
                            <option value="0" className="text-white">
                                Qual tecnologia você já possui?*
                            </option>
                            <option value="ERP" className="text-black ">
                                ERP
                            </option>
                            <option value="WMS" className="text-black ">
                                WMS
                            </option>
                            <option value="TMS" className="text-black ">
                                TMS
                            </option>
                            <option value="Outras" className="text-black ">
                                Outras
                            </option>
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="floating_QuantasTransportadoras"
                            id="floating_QuantasTransportadoras"
                            className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={formData.floating_QuantasTransportadoras}
                            onChange={handleChange}
                            required
                        >
                            <option value="0" className="text-white">
                                Quantas transportadoras?*
                            </option>
                            <option value="1" className="text-black ">
                                1
                            </option>
                            <option value="2" className="text-black ">
                                2
                            </option>
                            <option value="até 5" className="text-black ">
                                Até 5
                            </option>
                            <option value="6 ou mais" className="text-black ">
                                6 ou mais
                            </option>
                        </select>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <select
                            name="floating_linkEnviados"
                            id="floating_linkEnviados"
                            className="block py-2 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                            value={formData.floating_linkEnviados}
                            onChange={handleChange}
                            required
                        >
                            <option value="0" className="text-white">
                                {"Qual o número de vezes que o mesmo link será enviado?"}
                            </option>
                            <option value="1" className="text-black ">
                                1
                            </option>
                            <option value="2" className="text-black ">
                                2
                            </option>
                            <option value="3" className="text-black ">
                                3
                            </option>
                            <option value="4 ou mais" className="text-black ">
                                4 ou mais
                            </option>
                            <option value="Não sei" className="text-black ">
                                Não sei
                            </option>

                        </select>
                    </div>
                    <div className="relative p-3 lg:p-5 border flex-col gap-2 z-0 w-full mb-5 group">
                        <div className="pb-2">
                            <label className="text-sm text-[#bfbfbf]" htmlFor="title">Quais funções de comunicação gostaria?*</label>
                        </div>

                        <input className="mr-2 mt-2" type="checkbox" id="floating_funcoesDeComunicacao1" name="floating_funcoesDeComunicacao" value="SMS" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_funcoesDeComunicacao1">SMS</label>
                        <br />

                        <input className="mr-2 mt-2" type="checkbox" id="floating_funcoesDeComunicacao2" name="floating_funcoesDeComunicacao" value="WhatsApp não oficial" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_funcoesDeComunicacao2">WhatsApp não oficial</label>
                        <br />
                        <input className="mr-2 mt-2" type="checkbox" id="floating_funcoesDeComunicacao3" name="floating_funcoesDeComunicacao" value="WhatsApp oficial" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_funcoesDeComunicacao3">WhatsApp oficial</label>
                        <br />

                        <input className="mr-2 mt-2" type="checkbox" id="floating_funcoesDeComunicacao4" name="floating_funcoesDeComunicacao" value="Email" onChange={handleChange} />
                        <label className="text-white" htmlFor="floating_funcoesDeComunicacao4">Email</label>
                        <br />

                    </div>
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
                                Você receberá sua proposta em até 1 dia útil.
                            </div>
                        </motion.div>
                    )}
                    <button
                        type="submit"
                        className={`text-white md:w-full hover:font-semibold w-full bg-transparent border border-white transition-all hover:bg-white focus:ring-4 focus:outline-none hover:text-black focus:ring-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ${(!formData.floating_terms || formData.floating_funcoesDeComunicacao === "") ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!formData.floating_terms || formData.floating_funcoesDeComunicacao === ""}
                    >
                        Enviar contato
                    </button>
                </form>
            </div>
        </>
    );
}
