import Header from "../header";
import Footer from "../footer";
import Scroll from "../scroll";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const products=[
    {
        image:"/src/images/vaginne.jpg",
        name:"Vaginne",
        about:"An intimate gel used to put an end to different female reproductive organ issues, itching, as well as childlessness. Vaginne boost the production of lactobacilli to keep the vagina healthy, kills bad bacterial with its anti-bacterial effects, repair vagina tissue, keeps it fresh and eliminate all unpleasant odor.",
        price:"₦20,000",
        alt:"image of a vaginne product",
    },

    {
        image:"/src/images/flexes1.jpg",
        name:"Flexes",
        about:"Humans do experience joint, bone, and even muscle pains at least once in thier life. Recent studies also show that both young and older people do experience one type of joint and bone problem or another. Flexes is a total comprehensive solution for bone and joint health. it has a unique taste and ready to drink anytime!",
        price:"₦70,000",
        alt:"image of a flexes product",
    },

    {
        image:"/src/images/adwelle1.jpg",
        name:"Adwelle",
        about:"Adwelle is a fruit and grains powdered drink that helps to regulate the balance of intestinal bacterial, reduces the risk of intestinal disease, promotes mineral absorption, lower blood fat and cholesterol, relieves constipation, regulates blood sugar, improves the immune system and enhances anti-inflammatory effect.",
        price:"₦60,000",
        alt:"image of a adwelle product",
    },
]
export default function Supplements(){
    useEffect(() => {
        document.title ="Supplements | Viscoris"
    }, []); 

    return(
        <>
            <Scroll/>
            <Header></Header>

            <main>
                <section className="bg-slate-50 dark:bg-slate-800 px-4 md:px-10 py-8 lg:flex gap-10 items-center">
                    <div className="flex flex-col gap-3 px-1 sm:px-5 pt-10 text-center lg:text-left md:px-6 md:pt-0">
                
                        <h1 className="text-3xl text-black dark:text-white sm:text-4xl md:text-6xl font-extrabold">Live Healthy With <span className="text-amber-500">immeri</span> Products</h1>
                        <p className="not-italic text-base md:text-base">With these Immeri supplements Viscoris renders you can have a strong and healthy life, free from health challenges that comes from unhealthy diet, infections and mostly from ageing. Below you can see the 3 (three) available powerful product we render.</p>
                    </div>
                    <div>
                        <img src="/src/images/healthywoman.svg" width={1180} alt="svg of and healthy looking woman" />
                    </div>
                </section>

                <section className="dark:bg-sky-900 px-4 py-6 md:py-16 sm:px-10 md:px-16">
                    <div>
                        <h1 className="text-black dark:text-white text-xl sm:text-2xl md:text-3xl text-center font-bold mb-8  ">Our <span className="text-amber-500">immeri</span> Products</h1>
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
                                        
                                        <p className="text-slate-800 dark:text-slate-50 p-2  bg-gray-200 dark:bg-sky-800">{products.about}</p>
                                        <Link className="w-full rounded py-2 text-center text-lg font-bold text-white bg-sky-800 dark:bg-sky-600" to="/contacts">Request Item</Link>
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