import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import style from "./style.module.scss";
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
import icone from "@/app/pages/home/assets/iconeOndetahLocalizarPedido.svg";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function PedidoOndetah() {
  const [modalOpen, setModalOpen] = useState(true);
  const [codigoPedido, setCodigoPedido] = useState("");
  const [codigoTransport, setCodigoTransport] = useState("");
  const [messageError, setMessageError] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [primeiraEtapa, setPrimeiraEtapa] = useState(true);
  const [segundaEtapa, setSegundaEtapa] = useState(false);
  const [voltar, setVoltar] = useState(false);
  const [currentIndex, setCurrentIndez] = useState(0);





  const [clicked, setClicked] = useState();

  const handleSetLink = (codigoTransport: string, codigoPedido: string) => {
    let result: string;
    let boolean = false;
    if (codigoPedido === undefined || codigoPedido.length <= 2) {
      result = "Por favor informe um número de pedido válido.";
      setMessageError(result);
    } else if (codigoTransport === undefined || codigoTransport === "") {
      result = "Por favor selecione um transportador.";
      setMessageError(result);
    } else {
      result = `https://cliente.ondetah.com.br/${codigoTransport}/${codigoPedido}`;
      boolean = true;
      setLinkUrl(result);
    }
    return {
      validate: boolean,
      message: result,
    };
  };

  const handleCodigoPedido = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodigoPedido(event.target.value);
  };

  const handleCodigoTransport = (codigo: { codigo: string, index: any }) => {
    setCodigoTransport(codigo.codigo);
    setClicked(codigo.index);
    setSegundaEtapa(true);
    setPrimeiraEtapa(false)
    setCurrentIndez(codigo.index);
    setVoltar(true);
    // primeiraEtapa ? setSegundaEtapa(false) : setSegundaEtapa(true);
  };



  const handleVolta = () => {
    setPrimeiraEtapa(true);
    setVoltar(false);
    setSegundaEtapa(false);
    setMessageError("")
    setCodigoPedido("");
  }

  const handleClose = () => {
    setModalOpen(false);
    setMessageError("")
  };

  const content = [
    {
      index: 0,
      image: carrefour.src,
      codigo: "CRF",
    },
    {
      index: 1,
      image: dafiti.src,
      codigo: "DF",
    },
    {
      index: 2,
      image: curta.src,
      codigo: "CTA",
    },

    {
      index: 3,
      image: acioly.src,
      codigo: "AGM",
    },


    {
      index: 4,
      image: dorel.src,
      codigo: "DL",
    },
    {
      index: 5,
      image: brastemp.src,
      codigo: "WHP",
    },
    {
      index: 6,
      image: consul.src,
      codigo: "WHP",
    },
    {
      index: 7,
      image: kitchenaid.src,
      codigo: "WHP",
    },
    {
      index: 8,
      image: compraCerta.src,
      codigo: "WHP",
    },
    {
      index: 9,
      image: whp.src,
      codigo: "WHP",
    },
  ];



  useEffect(() => {
    if (codigoPedido.length > 0) {
      setMessageError("");
    }
  }, [codigoPedido])



  return (
    <>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.3 }}
          id="static-modal"
          data-modal-backdrop="static"
          aria-hidden="true" style={{ zIndex: 100 }}

          className={`fixed z-50 bg-[#00000093] transition-all flex items-center justify-center w-full left-0 h-[120vh] top-[0%] lg:top-0`}
        >
          <AnimatePresence>
            <div className="flex absolute md:top-1/4 top-[20%] items-center justify-center md:w-[700px]  w-[400px] bg-white rounded-2xl h-[500px] md:h-[500px] transition-all">
              <div className="p-10 h-full flex items-center w-full justify-center flex-col">
                <div className={`w-full   flex ${voltar ? "justify-between" : "justify-end pt-[10px]"}  items-center`}>
                  {voltar && (
                    <motion.div initial={{ opacity: 0 }}
                      animate={{ opacity: 100 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => handleVolta()} className="text-black hover:shadow-sm py-2 cursor-pointer flex gap-2 ml-3 items-center justify-center flex-row-reverse  text-lg px-2  opacity-95 rounded-lg ">voltar <FaArrowLeft /></motion.div>

                  )}
                  <IoClose
                    onClick={() => handleClose()}
                    className="text-black text-2xl hover:rotate-180 hover:text-[#ff0000] hover:bg-[#dedede] rounded-lg transition-all"
                  />
                </div>


                {primeiraEtapa && (
                  <motion.div initial={{ opacity: 0, translateX: -80 }}
                    animate={{ translateX: 0, opacity: 100 }}
                    transition={{ duration: 0.4 }} className=" flex items-center justify-center w-full h-full">
                    <div className="w-full h-full gap-10 flex flex-col items-center justify-center">
                      <div className="flex w-full lg:pl-[15px]  items-center justify-start">
                        <Image className="w-16" src={icone} alt="" width={100} height={100} />
                        <h3 className="md:text-[25px] md:pl-0 pl-[10px] leading-normal md:text-center flex justify-center items-center w-full text-[19px] text-[#29235c]">
                          Selecione a loja onde realizou a compra:
                        </h3>
                      </div>

                      <div className="w-full md:flex md:items-center md:justify-center gap-3 grid md:pt-2 pt-3 grid-cols-4 md:flex-wrap">
                        {content.map((content, index) => {
                          return (
                            <div
                              onClick={() => handleCodigoTransport(content)}
                              key={index}
                              className={`hover:shadow-md shadow-lg  hover:scale-90 transition border-[1px] border-[#0000000f]  rounded-lg ${clicked === content.index ? "border-1 shadow-xl rounded-md" : ""}  md:w-[110px] w-[70px]`}
                            >
                              <Image
                                className={` w-full rounded-lg ${clicked === content.codigo ? "border-1 shadow-xl p-1 rounded-md" : ""} focus:p-4 transition-all`}
                                src={content.image}
                                quality={100}
                                priority
                                width={100}
                                height={100}
                                alt="Clientes ondetah"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {segundaEtapa && (
                  <motion.div
                    initial={{ opacity: 0, translateX: 100 }}
                    animate={{ translateX: 0, opacity: 100 }}
                    transition={{ duration: 0.4 }}
                    className=" flex flex-col items-center justify-center w-full h-full">
                    <div className="flex items-center justify-center w-full flex-col">
                      <div className="flex w-[95%] items-center justify-start">
                        <Image className="lg:w-20 w-16 border-[#ededed] shadow-md rounded-lg" src={content[currentIndex].image} alt="" width={100} height={100} />
                        <h3 className="md:text-[28px] md:pl-4  pl-[10px] leading-normal md:text-left flex justify-start items-center w-full  text-[#29235c]">
                          Digite o código do seu pedido:
                        </h3>
                      </div>
                    </div>

                    <form className="w-full gap-2 flex items-center justify-center pt-0 md:pt-4">
                      {/* <Image className="w-10" src={icone} alt="" width={100} height={100} /> */}
                      <div className="relative z-0 pt-5 w-[95%] mb-5 group">
                        <input
                          type="text"
                          name="floating_first_name"
                          id="floating_first_name"
                          className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gradi appearance-none border-[#0095815b]  focus:outline-none focus:ring-0 focus:border-[#009580] peer"
                          placeholder="Digite o código do seu pedido aqui:"
                          required
                          value={codigoPedido}
                          onChange={(event) => handleCodigoPedido(event)} // Passando o evento para a função handleCodigoPedido
                        />

                      </div>
                    </form>

                    <AnimatePresence>
                      {messageError && (
                        <motion.p
                          initial={{ translateX: -100, opacity: 0 }}
                          animate={{ translateX: 0, opacity: 1 }}
                          transition={{ duration: 0.5, ease: "linear" }}
                          className="text-red-500 md:text-lg w-[95%] text-sm pb-0 pt-3">
                          {messageError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <Link
                      className="w-[95%] h-14 mt-5 hover:p-[1px] transition-all rounded-2xl"
                      onClick={(e) => {
                        const linkResult = handleSetLink(
                          codigoTransport,
                          codigoPedido
                        );
                        if (linkResult.validate === false) {
                          e.preventDefault();
                          setMessageError(linkResult.message);
                        } else {
                          setLinkUrl(linkResult.message);
                        }
                      }}
                      href={linkUrl}
                      target="_blank"
                    >
                      <button
                        type="submit"
                        className={style.unique}
                      >
                        localizar pedido
                      </button>
                    </Link>

                  </motion.div>
                )}

              </div>
            </div> </AnimatePresence>
        </motion.div >
      )}
    </>
  );
}
