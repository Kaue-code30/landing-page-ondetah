import Link from "next/link";

export default function Cta() {
    return (
        <section className="w-full h-[55vh] lg:h-[50vh] pt-20 pb-20 flex items-center justify-center">
            <div className="w-[90%] lg:flex-row flex-col flex justify-center lg:gap-0 gap-5 lg:justify-between items-start lg:items-center px-5 lg:px-32  rounded-2xl h-full bg-custom-linear">
                <h1 className="text-2xl lg:text-[42px] leading-normal lg:w-[63%] text-white font-bold">
                    Agilidade e informação desde o
                    clique até o cliente:
                </h1>
                <button className="lg:w-[30%] w-full hover:scale-95 transition bg-primaryColor text-textSecondColor rounded-lg h-12">
                    <Link className="w-full h-full" href={""}> Agendar reunião</Link>
                </button>
            </div>
        </section>
    )
}