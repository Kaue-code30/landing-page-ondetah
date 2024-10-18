import Link from "next/link";

export default function FidelizeSeuCliente() {
    return (
        <section className="w-full bg-cover flex items-center justify-center bg-center bg-no-repeat bg-custom-linear min-h-screen pt-[100px] pb-[130px] ">
            <div className="w-4/5 lg:w-full max-w-[1200px] gap-5 lg:gap-10 h-auto flex lg:flex-col flex-col items-center justify-between">
                <div className="w-full lg:w-full flex flex-col-reverse lg:flex-col gap-3 h-fit items-center justify-center">
                    <div className="w-full h-auto flex gap-2 flex-col ">


                        <h1 className="text-3xl lg:text-5xl lg:w-4/5 lg:text-center  text-white font-bold">
                            Fidelize seu cliente com informações em tempo real.
                        </h1>
                        <h2 className="text-base w-full lg:text-lg lg:text-center lg:w-4/5 text-white lg:font-semibold">
                            Transforme a gestão da cadeia de entrega no diferencial que seu e-commerce precisa para crescer.
                        </h2>
                        <h3 className="text-base lg:text-center lg:w-4/5 text-white lg:font-medium">
                            Antes mesmo do cliente questionar, você já sabe a resposta.
                        </h3>
                        <div className="w-full lg:flex-row flex-col h-auto lg:h-12 gap-3 lg:gap-4 justify-center items-center flex">
                            <button className="w-full lg:w-[200px] hover:scale-95  transition duration-300 hover:bg-primaryColor hover:text-white h-12 lg:h-full rounded-lg bg-white text-black">
                                <Link href={""}>Veja a demo</Link>
                            </button>
                            <button className="w-full lg:w-[250px] h-12 lg:h-full hover:scale-95 transition duration-300 rounded-lg bg-primaryColor hover:bg-white hover:text-black text-white">
                                <Link href={""}>Fale com um especialista</Link>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-auto lg:static  left-0 flex items-center md:gap-5 lg:gap-12 justify-center lg:pb-0 pb-14 pt-10 lg:pt-20">
                        <div className="h-[300px] w-[300px] bg-white rounded-2xl shadow-md">

                        </div>
                        <div className="h-[300px] scale-125 w-[300px] bg-[#BDF5EC] rounded-2xl shadow-md">

                        </div>
                        <div className="h-[300px] w-[300px] bg-white rounded-2xl shadow-md">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}