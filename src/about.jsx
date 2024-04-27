import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Scroll from "./scroll";
import { useEffect } from "react";

export default function About(){
    useEffect(() => {
        document.title ="About Us | Viscoris"
    }, []); 

    return(
        <>
            <Scroll />
            <Header></Header>
            <main>
                <section className="px-6 py-8 sm:px-16 md:px-40 sm:py-16 lg:px-60">
                    <h1 className="pb-6 font-bold text-center text-3xl sm:text-4xl md:text-5xl text-black dark:text-white">About Us</h1>

                    <p className="pb-3 md:text-xl">Welcome to Viscoris Nigeria Limited, An Inovative method for client satisfaction. With Viscoris, you can get the most out of your shopping experience. We provide the Best shopping service.</p>

                    <h2 className="pb-1 font-semibold text-xl sm:text-2xl md:text-3xl text-black dark:text-white">Our History</h2>
                    <p className="pb-3 md:text-xl">Viscoris is a nigeria limited enterprice owned by Mrs. Helen Ovedje, an accountant and entrepreneur, a lecturer of Delta State Polytechnic Otefe, and who is also a partner of Immeri global company and the Fuel Factor X organization. She founded this enterprice with the aim of futhering her business plan on meeting the needs of others, so a need for an Ecommerce web application came in. And then Viscoris was made by her son, <a className="underline text-sky-700 hover:text-amber-500" href="https://github.com/grantovedje" target="blank"> Grant Ovedje</a>, who is a software developer.</p>

                    <h2 className="pb-1 font-semibold text-xl sm:text-2xl md:text-3xl text-black dark:text-white">Our mission</h2>
                    <p className="pb-1 md:text-xl">The goal is to meet the needs of others with the products we have. With our <Link className="text-sky-400" to="/products/supplement">Suppliments</Link> you can trust to have a healthy and infection free life as well as being free from problems that comes as a result of aging.</p>
                    <p className="pb-1 md:text-xl"> With our <Link className="text-sky-400" to="/products/coffee">Coffee</Link> products you can trust to have a more balanced living, free from stress, for they are more than just a coffee.</p>
                    <p className="pb-1 md:text-xl">With the <Link className="text-sky-400" to="/products/factor-x">Fuel Factor X</Link>, you can trust to have a more economical fuel treatment for it is a fuel treatment product that treats the fuel that your vehicle burns, making it more effective.</p>
                    <p className="pb-3 md:text-xl">And why not spies your look with <Link className="text-sky-400" to="/products/wears">these cloths</Link>, shoes, domestic appliances and others we offer. For a healthy living without a better looking is more like an unhappy feeling.</p>

                    <p className=" md:text-xl">We provide the Best shopping service. Our commitment extends beyond personal success. Come have a life with Us.</p>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}
