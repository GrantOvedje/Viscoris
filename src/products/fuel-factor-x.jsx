import Header from "../header";
import Footer from "../footer";
import Scroll from "../scroll";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ffxsinglepack from "../images/FFX-single-pack.png";
import ffxbottle from "../images/Fuel-Factor-X-Bottle.jpg";
import ffxgallon from "../images/Fuel-Factor-X-1-Gallon.png";
import ffxbucket from "../images/Fuel-Factor-X-1-Bucket.png";
import ffxdrum from "../images/Fuel-Factor-X-Drum.png";
import ffx from "../images/ffx.jpg";

const ffxProduct=[
    {
        image: ffxsinglepack,
        name:"FFX pack",
        price:"12,000",
        alt:"fuel factor x single pack",
    },

    {
        image: ffxbottle,
        name:"FFX Bottle",
        price:"₦44,000",
        alt:"fuel factor x Bottle",
    },

    {
        image: ffxgallon,
        name:"FFX Gallon",
        price:"₦210,000",
        alt:"fuel factor x Gallon",
    },

    {
        image: ffxbucket,
        name:"FFX Bucket",
        price:"₦900,000",
        alt:"fuel factor x Bucket",
    },

    {
        image: ffxdrum,
        name:"FFX Drum",
        price:"₦3,000,000",
        alt:"fuel factor x Drum",
    },

]

export default function FactorX(){
    useEffect(() => {
        document.title ="Fuel Factor X | Viscoris";
    }, []); 

    return(
        <>
            <Scroll /> 
            <Header></Header>

            <main>
                <section className="bg-slate-50 dark:bg-slate-800 flex flex-col items-center px-4 sm:px-10 md:px-16 lg:px-10 py-8 lg:flex-row lg:gap-10">
                    <div className="flex flex-col gap-3 px-1 mb-4 sm:px-6 pt-10 text-center lg:text-left lg:w-2/3 md:px-8 md:pt-0">
                
                        <h1 className="text-3xl text-black dark:text-white sm:text-4xl md:text-6xl font-extrabold">Get the most out of our <span className="text-amber-500">FFX</span> product</h1>
                        <p className=" text-base md:text-base">Fuel Factor X is a fuel treatment product that can be used in both gasoline and diesel engines. This product has a variety of functions including: reducing emission, boost performance and improve the longitivity or your engine. By using this additive you will save money on fuel costs and produce less exhaust.</p>
                    </div>
                    <div>
                        <img className="rounded-xl h-72"  width={700} src={ffx} alt="man holding a syringe with a fuel factor x" />
                    </div>
                </section>

                <section className="dark:bg-sky-900 px-4 py-6 md:py-16 sm:px-10 md:px-16">
                    <div>
                        <h1 className="text-black dark:text-white text-xl sm:text-2xl md:text-3xl text-center font-bold mb-8  ">Our <span className="text-amber-500">FFX</span> category</h1>
                    </div>

                    <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
                        {
                            ffxProduct?.map((products)=>(
                                <div key={products.name} className=" border border-amber-300 dark:shadow-cyan-500/50 shadow-lg w-60 sm:w-72 md:w-96 lg:w-80">
                                    <img src={products.image} className="w-60 sm:w-72 md:w-96 lg:w-80" height={200} alt={products.alt} />
                                    <div className=" flex flex-col gap-3 p-2 bg-gray-50 dark:bg-sky-950">
                                        <div className="mb-4 flex justify-between">
                                            <p className="text-xl font-semibold text-black dark:text-white">{products.name}</p>
                                            <p className="text-xl font-thin text-black dark:text-white">{products.price}</p>
                                        </div>
                                        <Link className="w-full rounded py-2 text-center text-lg font-bold text-white bg-cyan-600 dark:bg-cyan-500" to="/contacts">Request Item</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}
