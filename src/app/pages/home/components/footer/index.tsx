import Image from "next/image";
import logo from "@/app/pages/home/assets/logo.svg"
import { useState } from "react";
import Link from "next/link";
import PedidoOndetah from "../localizarPedido";
import poweredUX from "@/app/pages/home/assets/powered-by-ux.svg";

export default function Footer() {
    const [localizarPedido, setLocalizarPedido] = useState(false)

    const jsonList = [
        {
            index: 0,
            nameLink: "Funcionalidades",
            link: ""
        },
        {
            index: 1,
            nameLink: "Planos",
            link: ""
        },
        {
            index: 2,
            nameLink: "Integrações",
            link: ""
        },
    ]

    return (
        <footer className="h-auto pt-10 lg:pt-0 flex flex-col items-center justify-center w-full bg-primaryColor">
            {localizarPedido && (
                <PedidoOndetah />
            )}
            <div className="w-[90%] flex lg:pb-0 pb-10 lg:items-center flex-col lg:flex-row gap-5 justify-between text-textSecondColor lg:h-[210px] ">
                <Image className="w-36" width={100} height={100} alt="" src={logo} />
                <div className="w-full lg:flex-row flex-col flex items-center justify-end h-auto lg:h-[150px]">
                    <ul className={`lg:flex lg:items-center flex lg:flex-row lg:mr-5 flex-col w-full justify-end gap-5`}>
                        {jsonList.map((i, key) => (
                            <li key={key} className="hover:scale-95 transition">
                                <Link className={`${i.index === 3 ? "border rounded-lg" : ""} lg:px-3 lg:p-2`} href={i.link}>{i.nameLink}</Link>
                            </li>
                        ))}
                        <li
                            onClick={() => { setLocalizarPedido(!localizarPedido); }}
                            className="border lg:w-auto w-1/2 text-center cursor-pointer hover:bg-textSecondColor transition hover:text-textPrimaryColor hover:scale-95 text-white rounded-lg px-4 p-2"
                        >
                            Rastrear pedido
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex items-center lg:justify-center bg-custom-linear flex-col h-[150px] lg:h-20 border-t border-t-white lg:flex-row gap-5 justify-between text-textSecondColor ">
                <div className="w-[90%] lg:py-5 py-5  h-full lg:flex-row flex-col flex lg:items-center justify-around lg:justify-between">
                    <Link target="_blank" href={"https://uxgroup.com.br/politica-de-privacidade"}>Politica de Privacidade</Link>
                    <Image className="w-32 flex mr-5" width={1000} quality={100} height={1000} alt="" src={poweredUX} />
                </div>
            </div>
        </footer>
    )
}