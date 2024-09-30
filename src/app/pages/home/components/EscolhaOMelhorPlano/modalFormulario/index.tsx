import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";


export interface DataFormulario {
    mediaPedidos: number | undefined;
    plano: string | undefined;
    close: () => void;
    estado: boolean;

}
export interface DataFormularioObject {
    mediaPedidos: number | undefined;
    plano: string | undefined;

}



export default function ModalFormulario({  plano, close,  }: DataFormulario) {
    return (
        <div className={`fixed z-50 bg-[#00000093] transition-all flex items-end justify-center w-full left-0 h-full top-[0%] `}>
           
            <AnimatePresence>
                <motion.div key={0} className="lg:w-[35%] w-[95%] p-5 h-[95%] lg:h-[90%] rounded-t-2xl shadow-md bg-custom-linear" initial={{ translateY: 300, opacity: 0, }} transition={{ duration: 0.4, ease: "linear" }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: 100, opacity: 0 }}>
                    <div className="w-full flex justify-end items-center">
                        <IoClose
                            onClick={() => close()}
                            className="text-white text-2xl flex items-end  hover:rotate-180 hover:text-[#ff0000] hover:bg-[#FFF] rounded-lg transition-all"
                        />
                    </div>

                    <div className="w-full h-full flex flex-col items-center pt-[5%] lg:pt-16 justify-start ">
                        <h1 className="text-2xl mb-5 text-center lg:text-left font-bold text-white">
                            Contratação do plano {plano}
                        </h1>
                        <form

                            className="max-w-md w-[90%] mx-auto"
                        // onSubmit={handleSubmit}
                        >
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    // value={formData.floating_first_name}
                                    // onChange={handleChange}
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
                                    // value={formData.floating_email}
                                    // onChange={handleChange}
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
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    // value={formData.floating_company}
                                    // onChange={handleChange}
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
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    // value={formData.floating_phone}
                                    // onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="cnpj"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    CNPJ*
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="cnpj"
                                    name="floating_cnpj"
                                    id="floating_cnpj"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                                    placeholder=" "
                                    // value={formData.floating_phone}
                                    // onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="cnpj"
                                    className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Site da empresa*
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <select
                                    name="floating_numeroFuncionarios"
                                    id="floating_numeroFuncionarios"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    // value={formData.floating_numeroFuncionarios}
                                    // onChange={handleChange}
                                    required
                                >
                                    <option value="0" className="text-white">
                                        Quais tecnologias você já possui?*
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
                                    name="floating_numeroFuncionarios"
                                    id="floating_numeroFuncionarios"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    // value={formData.floating_numeroFuncionarios}
                                    // onChange={handleChange}
                                    required
                                >
                                    <option value="0" className="text-white">
                                        Quantas transportadoras?*
                                    </option>
                                    <option value="ERP" className="text-black ">
                                        1
                                    </option>
                                    <option value="WMS" className="text-black ">
                                        2
                                    </option>
                                    <option value="TMS" className="text-black ">
                                        Até 5
                                    </option>
                                    <option value="Outras" className="text-black ">
                                        6 ou mais
                                    </option>
                                </select>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <select
                                    name="floating_numeroFuncionarios"
                                    id="floating_numeroFuncionarios"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    // value={formData.floating_numeroFuncionarios}
                                    // onChange={handleChange}
                                    required
                                >
                                    <option value="0" className="text-white">
                                        Quais funções de comunicação gostaria?*
                                    </option>
                                    <option value="ERP" className="text-black ">
                                        SMS
                                    </option>
                                    <option value="WMS" className="text-black ">
                                        WhatsApp
                                    </option>
                                    <option value="TMS" className="text-black ">
                                        E-mail
                                    </option>

                                </select>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <select
                                    name="floating_numeroFuncionarios"
                                    id="floating_numeroFuncionarios"
                                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    // value={formData.floating_numeroFuncionarios}
                                    // onChange={handleChange}
                                    required
                                >
                                    <option value="0" className="text-white">
                                        Quantas comunicações?*
                                    </option>
                                    <option value="ERP" className="text-black ">
                                        1
                                    </option>
                                    <option value="WMS" className="text-black ">
                                        2
                                    </option>
                                    <option value="TMS" className="text-black ">
                                        3
                                    </option>
                                    <option value="TMS" className="text-black ">
                                        4 ou mais
                                    </option>

                                </select>
                            </div>
                            <button className="w-full h-12 bg-white flex items-center justify-center rounded-lg">
                                enviar
                            </button>
                        </form>
                    </div>
                </motion.div>
            </AnimatePresence>

        </div>
    )
}