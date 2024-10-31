import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
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
import ginger from "@/app/pages/home/assets/logosOndetah/ginger.png";
import icone from "@/app/pages/home/assets/iconLogo.svg"
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss"
import logo from "@/app/pages/home/assets/logo.svg"
import { FaArrowLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function PedidoOndetah() {
  const [modalOpen, setModalOpen] = useState(true);
  const [codigoPedido, setCodigoPedido] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const [codigoTransport, setCodigoTransport] = useState("");
  const [messageError, setMessageError] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [primeiraEtapa, setPrimeiraEtapa] = useState(true);
  const [segundaEtapa, setSegundaEtapa] = useState(false);
  const [voltar, setVoltar] = useState(false);
  const [currentIndex, setCurrentIndez] = useState(0);


  console.log(linkUrl);



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
      image: consul.src,
      codigo: "WHP",
    },
    {
      index: 3,
      image: brastemp.src,
      codigo: "WHP",
    },
    {
      index: 4,
      image: kitchenaid.src,
      codigo: "WHP",
    },
    {
      index: 5,
      image: compraCerta.src,
      codigo: "WHP",
    },
    {
      index: 6,
      image: whp.src,
      codigo: "WHP",
    },
    {
      index: 7,
      image: curta.src,
      codigo: "CTA",
    },
    {
      index: 8,
      image: ginger.src,
      codigo: "GIN",
    },

    {
      index: 9,
      image: acioly.src,
      codigo: "AGM",
    },
    {
      index: 10,
      image: dorel.src,
      codigo: "DL",
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
            <motion.div className={`flex absolute ${openSelect && primeiraEtapa ? "lg:top-[14%] top-[10%]" : " top-[15%] lg:top-[24%]"} duration-300 flex-col items-center justify-center md:w-[600px]  w-[90%] bg-white rounded-2xl h-auto transition-all`}>
              <div className="h-20 flex items-center justify-between p-4 lg:p-7 rounded-t-2xl bg-custom-linear w-full">
                <Image className="w-1/4" src={logo} alt="" width={100} height={100} />
                <IoClose
                  onClick={() => handleClose()}
                  className="text-white text-2xl hover:rotate-180 hover:text-[#ff0000] hover:bg-[#FFDDDD] rounded-lg transition-all"
                />
              </div>
              {primeiraEtapa && (
                <div className="max-w-[800px] w-full h-full gap-4 flex-col flex items-center justify-center py-8 lg:py-10 p-4 lg:p-7 ">
                  <h1 className="text-primaryColor w-full text-center text-xl lg:text-2xl font-semibold">
                    Selecione a loja onde realizou a compra:
                  </h1>
                  <div className="w-full flex items-center justify-center flex-col gap-3 h-auto">
                    <p className="w-full text-sm lg:px-[26px] text-left">
                      Selecionar loja:
                    </p>
                    <div className="w-full lg:w-[90%]  h-auto rounded-lg flex items-start   flex-col justify-center bg-transparent border ">
                      <button onClick={() => { setOpenSelect(!openSelect) }} className="w-full px-4 h-12 border-b  flex justify-between items-center">
                        <p className="text-[#4a4a4a98]">
                          Selecione
                        </p>
                        <IoIosArrowDown />
                      </button>

                      <div className={`w-full ${openSelect ? "flex" : "hidden"} bg-[#29265b11] flex-wrap p-5 justify-start items-center gap-4 h-auto`}>
                        {content.map((content, index) => {
                          return (
                            <button
                              onClick={() => handleCodigoTransport(content)}
                              key={index}
                              className={`hover:shadow-md lg:w-[22%] w-[29%] shadow-lg ${clicked === content.index ? "border-2 border-primaryColor shadow-xl scale-90 rounded-md" : ""} bg-white h-full hover:scale-90 transition border-[0.5px]   rounded-lg ${clicked === content.index ? "border-1 shadow-xl rounded-md" : ""}`}
                            >
                              <Image
                                className={` w-full rounded-lg ${clicked === content.codigo ? "border-[0.5px] shadow-xl p-1 rounded-md" : ""} focus:p-4 transition-all`}
                                src={content.image}
                                quality={100}
                                priority
                                width={100}
                                height={100}
                                alt="Clientes ondetah"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {segundaEtapa && (
                <div className="max-w-[800px] w-full h-full gap-3 flex-col flex items-center justify-center py-8 lg:py-10 p-4 lg:p-7 ">
                  <h1 className="text-primaryColor w-full text-center text-xl lg:text-2xl font-semibold">
                    Digite o código do seu pedido:
                  </h1>
                  <div className="w-full lg:w-[95%] flex items-center justify-center flex-col pt-3 gap-4 h-auto">
                    <p className="w-full text-sm px-3 text-left">
                      Código do pedido:
                    </p>
                    <AnimatePresence>
                       {messageError && (
                        <motion.p
                          initial={{ translateX: -100, opacity: 0 }}
                          animate={{ translateX: 0, opacity: 1 }}
                          transition={{ duration: 0.5, ease: "linear" }}
                          className="text-red-500 md:text-sm w-[95%] text-sm pb-0 ">
                          {messageError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <form className="w-full  flex-col flex items-center justify-center">
                      <div className="relative z-0 flex gap-3 w-full lg:w-[95%] mb-5 group">
                        <div className="w-12 border border-[#0095815b] rounded-lg flex items-center justify-center h-12">
                          <Image className="w-full rounded-lg " src={content[currentIndex].image} alt="" width={100} height={100} />
                        </div>
                        <input
                          type="text"
                          name="floating_first_name"
                          id="floating_first_name"
                          className="block py-2.5 px-2 w-[83%] text-sm text-black bg-transparent border rounded-lg  border-gradi appearance-none border-[#0095815b]  focus:outline-none focus:ring-0 focus:border-[#009580] peer"
                          placeholder="Digite o código do seu pedido aqui:"
                          required
                          value={codigoPedido}
                          onChange={(event) => handleCodigoPedido(event)} // Passando o evento para a função handleCodigoPedido
                        />
                      </div>

                      <Link
                        className="w-full lg:w-[95%] h-14  transition-all rounded-2xl"
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
                        <div
                          className={style.unique}
                        >
                          localizar pedido
                        </div>
                      </Link>

                    </form>
                    <button onClick={() => { handleVolta() }} className="w-auto flex gap-3 items-center justify-center">
                      <FaArrowLeftLong />
                      selecionar outra loja
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div >
      )}
    </>
  );
}
