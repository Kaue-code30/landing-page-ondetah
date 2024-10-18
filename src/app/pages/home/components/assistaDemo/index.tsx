import Link from "next/link";
import { useState } from "react";

export default function AssistaNossaDemo() {
    const [initVideo, setInitVideo] = useState(false);

    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-white h-auto pt-[100px] pb-[100px] ">
            <div className="w-4/5 lg:w-full max-w-[1200px] gap-5 lg:gap-10 h-auto flex lg:flex-row flex-col-reverse items-center justify-between">
                <div className="flex flex-col gap-3 lg:gap-2 justify-start items-start w-full lg:w-3/5 leading-normal">
                    <h1 className="text-3xl lg:text-4xl leading-tight text-textPrimaryColor font-bold">
                        Assista a nossa demo:
                    </h1>
                    <h2 className="text-textPrimaryColor  leading-tight font-normal text-base lg:text-lg">
                        Veja como o Ondetah ajuda o seu e-commerce
                    </h2>
                    <h3 className="text-textPrimaryColor  leading-tight font-normal text-base lg:text-base">
                        Assista ao vídeo e descubra como a nossa solução completa combina rastreamento em tempo real, comunicação automatizada com seus clientes e ferramentas robustas para gestão de riscos, tudo em uma única plataforma.
                    </h3>
                    <div className="flex w-full items-center gap-3 justify-start lg:flex-row flex-col">
                        <button className="w-full lg:w-[220px] mt-2 text-textSecondColor hover:scale-95 transition h-12 rounded-lg bg-primaryColor">
                            <Link href={"#planos"} className="w-full flex items-center justify-center h-full">
                                Conheça nossos planos
                            </Link>
                        </button>
                        <button onClick={() => setInitVideo(true)} className="w-full lg:w-[220px] mt-2 text-textSecondColor hover:scale-95 transition h-12 rounded-lg bg-secondColor">
                            <p className="w-full flex items-center justify-center h-full">
                                Assista à nossa demo
                            </p>

                        </button>
                    </div>
                </div>
                <div id="demos" className="flex flex-col gap-3 lg:gap-5 justify-start h-[250px] lg:h-[350px] items-end w-full lg:w-3/5 leading-normal">
                    <iframe className="w-full shadow-lg flex object-cover h-full rounded-lg" src={`${initVideo ? "https://www.youtube.com/embed/aAXfdGkUVEk?autoplay=1" : "https://www.youtube.com/embed/aAXfdGkUVEk"}`} title="Demo Ondetah" frameBorder="0" allow={`accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`} referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}