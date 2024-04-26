import Header from "../header";
import Footer from "../footer";
import Scroll from "../scroll";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const products=[
    {
        image:"/src/images/ginseng1.webp",
        name:"ginseng Pack",
        about:"With these Immeri supplements we render you can have a strong and healthy life, free from health challenges that comes from unhealthy diet, infections and mostly from ageing.",
        price:"₦14,000",
        alt:"image of a ginseng coffee",
    },

    {
        image:"/src/images/tongkatali.webp",
        name:"tongkatali Pack",
        about:"With these Immeri supplements we render you can have a strong and healthy life, free from health challenges that comes from unhealthy diet, infections and mostly from ageing.",
        price:"₦14,000",
        alt:"image of a tongkatali coffee",
    },

    {
        image:"/src/images/tongkataliganoderma.webp",
        name:"tongkatali-ganoderma",
        about:"With these Immeri supplements we render you can have a strong and healthy life, free from health challenges that comes from unhealthy diet, infections and mostly from ageing.",
        price:"₦14,000",
        alt:"image of a tongkatali-ganoderma coffee",
    },
]

export default function Coffee(){
    useEffect(() => {
        document.title ="Coffees | Viscoris"
    }, []);

    return(
        <>
            <Scroll />
            <Header></Header>

            <main>
                <section className="bg-slate-50 dark:bg-slate-800 flex flex-col items-center px-4 sm:px-10 md:px-16 lg:px-10 py-8 lg:flex-row lg:gap-10">
                    <div className="flex flex-col gap-3 px-1 mb-4 sm:px-6 pt-10 text-center lg:text-left md:px-8 md:pt-0">
                
                        <h1 className="text-3xl text-black dark:text-white sm:text-4xl md:text-6xl font-extrabold">Feal alive with <span className="text-amber-500">Fullife</span> Café</h1>
                        <p className=" text-base md:text-base">With these coffee products Viscoris renders you can have a more stress free, balanced and healthy life. Come have a taste with us and feal the life. More than just a coffee.</p>
                    </div>
                    <div>
                        <img className="rounded-xl"  width={800}  src="/src/images/cup-coffee-table-front-street-with-city-lights-background.jpg" alt="svg of and healthy looking woman" />
                    </div>
                </section>

                <section className="dark:bg-sky-900 px-4 py-6 md:py-16 sm:px-10 md:px-16">
                    <div>
                        <h1 className="text-black dark:text-white text-xl sm:text-2xl md:text-3xl text-center font-bold mb-8  ">Our <span className="text-amber-500">Coffee</span> Products</h1>
                    </div>

                    <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
                        {
                            products?.map((products)=>(
                                <div key={products.name} className=" border border-amber-300 dark:shadow-cyan-500/50 shadow-lg w-60 sm:w-72 md:w-96 lg:w-80">
                                    <img src={products.image} className="w-60 sm:w-72 md:w-96 lg:w-80" height={200} alt={products.alt} />
                                    <div className="flex flex-col gap-3 p-2 bg-gray-50 dark:bg-sky-950">
                                        <div className="flex justify-between">
                                            <p className="text-xl font-semibold text-black dark:text-white">{products.name}</p>
                                            <p className="text-xl font-thin text-black dark:text-white">{products.price}</p>
                                        </div>
                                        <Link className="w-full px-8 rounded py-1 text-center text-lg font-bold text-white bg-cyan-600 dark:bg-cyan-400" to="/contacts">Request Item</Link>
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