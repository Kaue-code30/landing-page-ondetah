import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

interface Props {
    urlVideo: string;
    closeModalFunc: () => void;
}

export default function ModalVideoDemo({ closeModalFunc }: Props) {
    const [closeModal, setCloseModal] = useState(false);

    // Função para fechar o modal
    const handleCloseModal = () => {
        setCloseModal(true);
        setTimeout(() => {
            closeModalFunc(); // Chama a função de fechamento após a animação de saída
        }, 500); // Ajuste o tempo para ser igual à duração da animação de saída
    };

    return (
        <AnimatePresence>
            {!closeModal && ( // Controla a presença do modal com a condição
                <motion.div
                    className="w-full h-full fixed flex items-center justify-center bg-[#0000009f] z-50 top-0 left-0"
                >
                    <motion.div
                        animate={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="lg:w-[60%] w-[90%] rounded-2xl flex-col flex items-start justify-center px-5 pt-5 pb-5 lg:px-7 lg:pb-7 lg:pt-5 shadow-2xl h-[45%] lg:h-[70%] bg-white"
                    >
                        <button onClick={handleCloseModal} className="w-full relative flex items-center justify-end lg:h-7">
                            <CgClose className="lg:w-6 h-7 w-7 text-[#CB1919] hover:bg-[#CB1919] hover:text-[#FFDDDD] p-1 hover:scale-95 lg:h-6 duration-500 flex bg-[#FFDDDD] rounded-lg items-center justify-center" />
                        </button>
                        <div className="w-full h-full pt-2">
                        <iframe className="w-full object-cover h-full rounded-lg"  src="https://www.youtube.com/embed/-vYDbur_qoU?autoplay=1" title="Demo Ondetah" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
