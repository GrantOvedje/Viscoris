import Header from "../header";
import Footer from "../footer";
import Scroll from "../scroll";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import vintage1 from "../images/vintage.avif";
import vintage2 from "../images/vintage2.jpg";
import blackshoe from "../images/Black-cover-shoe-women.jpg";
import brownshoe from "../images/brown-cover-shoe-women.jpg";
import blackpalm from "../images/black-palm-women.jpg";
import womenopenshow1 from "../images/women-open-show-1.jpg";
import womenopenshow2 from "../images/women-open-show-2.jpg";
import womenopenshow3 from "../images/women-open-show-3.jpg";
import light1 from "../images/sencor-light-2.png";
import light2 from "../images/cencor-light-1.png";
import womanshopping from "../images/woman-shopping.svg";


const shirts=[
    {
        image: vintage1,
        name:"Vintage shirt",
        price:"₦10,000",
        alt:"8 vintage shirt on hanger",
    },

    {
        image: vintage2,
        name:"vintage shit",
        price:"₦10,000",
        alt:"3 vintage shirt",
    },
]

const shoesProduct = [
    {
        image: blackshoe,
        name:"Female black shoe",
        price:"₦12,000",
        alt:"female black cover shoe",
    },

    {
        image: brownshoe,
        name:"Female brown shoe",
        price:"₦12,000",
        alt:"female brown cover shoe",
    },

    {
        image: blackpalm,
        name:"female black palm",
        price:"₦7,000",
        alt:"female black palm",
    },

    {
        image: womenopenshow1,
        name:"Female high shoe",
        price:"₦18,000",
        alt:"some sets of female high shoe",
    },

    {
        image: womenopenshow2,
        name:"female high shoe",
        price:"₦18,000",
        alt:"some sets of female high shoe",
    },

    {
        image: womenopenshow3,
        name:"female high shoe",
        price:"₦18,000",
        alt:"some sets of female high shoe",
    },
]

const appliances = [
    {
        image: light1,
        name: "Body sensor light",
        price: "₦6,000",
        alt: "intelligent light",
    },

    {
        image: light2,
        name: "Body sensor light",
        price: "₦6,000",
        alt: "intelligent light",
    }
]

export default function Others(){
    useEffect(() => {
        document.title ="Other Products | Viscoris";
    }, []); 

    return(
        <>
            <Scroll />
            <Header></Header>

            <main>
                <section className="bg-slate-50 dark:bg-slate-800 px-4 md:px-10 py-8 lg:py-0 lg:flex lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-3 px-1 sm:px-5 pt-10 text-center lg:text-left lg:w-2/3 md:px-6 md:pt-0">
                
                        <h1 className="text-3xl text-black dark:text-white sm:text-4xl md:text-6xl font-extrabold">Easy living with our other <span className="text-amber-500">shopping</span> items</h1>
                        <p className="not-italic text-base md:text-base">Why not spies your look with these clothes, shoes, domestic appliances and others we offer. A healthy living without a better looking is more like an unhappy feeling. Come have a life with us.</p>
                    </div>
                    <div>
                        <img className="w-full lg:w-96" src="/src/images/woman-shopping.svg" width={500} alt="svg of and healthy looking woman" />
                    </div>
                </section>

                <section className="dark:bg-sky-900 px-4 py-6 md:py-16 sm:px-10 md:px-16 lg:px-24">
                    <div>
                        <h1 className="text-black dark:text-white text-xl sm:text-2xl md:text-3xl text-center font-bold mb-8  ">Our <span className="text-amber-500">FFX</span> category</h1>
                    </div>

                    <h1 className="text-black dark:text-white text-lg sm:text-xl md:text-2xl text-center font-bold mb-5 ">Dress</h1>
                    <div className="mb-7 flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
                        {
                            shirts?.map((shirts)=>(
                                <div key={shirts.name} className=" border border-amber-300 dark:shadow-cyan-500/50 shadow-lg w-60 sm:w-72 md:w-96 lg:w-80">
                                    <img src={shirts.image} className="w-60 sm:w-72 md:w-96 lg:w-80" height={200} alt={shirts.alt} />
                                    <div className="flex flex-col gap-3 p-2 bg-gray-50 dark:bg-sky-950">
                                        <div className="mb-4 flex justify-between">
                                            <p className="text-xl font-semibold text-black dark:text-white">{shirts.name}</p>
                                            <p className="text-xl font-thin text-black dark:text-white">{shirts.price}</p>
                                        </div>
                                        <Link className="w-full rounded py-2 text-center text-lg font-bold text-white bg-cyan-600 dark:bg-cyan-500" to="/contacts">Request Item</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    

                    <h1 className="text-black dark:text-white text-lg sm:text-xl md:text-2xl text-center font-bold mb-5 ">Shoes and foot-wears</h1>
                    <div className="mb-7 flex flex-col items-center gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
                        {
                            shoesProduct?.map((shoe)=>(
                                <div key={shoe.name} className=" border border-amber-300 dark:shadow-cyan-500/50 shadow-lg w-60 sm:w-72 md:w-96 lg:w-80">
                                    <img src={shoe.image} className="w-60 lg:h-72 sm:w-72 md:w-96 lg:w-80" height={200} alt={shoe.alt} />
                                    <div className="flex flex-col gap-3 p-2 bg-gray-50 dark:bg-sky-950">
                                        <div className="mb-4 flex justify-between">
                                            <p className="text-xl font-semibold text-black dark:text-white">{shoe.name}</p>
                                            <p className="text-xl font-thin text-black dark:text-white">{shoe.price}</p>
                                        </div>
                                        <Link className="w-full rounded py-2 text-center text-lg font-bold text-white bg-cyan-600 dark:bg-cyan-500" to="/contacts">Request Item</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <h1 className="text-black dark:text-white text-lg sm:text-xl md:text-2xl text-center font-bold mb-5 ">Domestic utensils and appliances</h1>
                    <div className="mb-7 flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
                        {
                            appliances?.map((appliances)=>(
                                <div key={appliances.name} className=" border border-amber-300 dark:shadow-cyan-500/50 shadow-lg w-60 sm:w-72 md:w-96 lg:w-80">
                                    <img src={appliances.image} className="w-60 sm:w-72 md:w-96 lg:w-80" height={200} alt={appliances.alt} />
                                    <div className="flex flex-col gap-3 p-2 bg-gray-50 dark:bg-sky-950">
                                        <div className="mb-4 flex justify-between">
                                            <p className="text-xl font-semibold text-black dark:text-white">{appliances.name}</p>
                                            <p className="text-xl font-thin text-black dark:text-white">{appliances.price}</p>
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
