import Header from "./header";
import Footer from "./footer";
import Scroll from "./scroll";
import { useEffect } from "react";
import buyerseller from "./images/buyerseller.svg";

export default function Contact(){
    useEffect(() => {
        document.title ="Contact Us | Viscoris"
    }, []); 

    return(
        <>
            <Scroll />
            <Header></Header>

            <main>
                <section className="flex flex-col items-center px-6 sm:px-20 py-8 lg:px-56 dark:bg-sky-800">
                    <div className="flex flex-col items-center py-10">
                        <div>
                            <h1 className="mb-6 text-center text-4xl sm:text-5xl text-black dark:text-white font-bold">Contact Us</h1>
                            <h3 className="mb-10 text-center text-xl font-bold">Simply click on any of the contact detail below to make a request on the product or item you admire. Or visit our Address.</h3>
                        </div>
                        {/* You can please give us a call, chat us on whatsapp, send an email, all on a product or item you admire and would like to get by simply clicking on any of the contact details below. Or visit our Adress. */}
                        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2  md:justify-center">
                            <div className="w-52 sm:w-72 bg-slate-50 dark:bg-sky-950 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                                <div className="mb-8 inline-flex items-center justify-center text-white text-xl p-2 bg-indigo-500 rounded-md shadow-lg">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                                </div>

                                <div className="flex flex-col gap-2">
                                <a className="text-slate-900 dark:text-white text-base font-medium tracking-wider" href="https://wa.me/2348050376399" target="blank">+234 805 037 6399</a>
                                <a className="text-slate-900 dark:text-white text-base font-medium tracking-wider" href="https://wa.me/2349134064916" target="blank">+234 913 406 4916</a>
                                </div>
                            </div>

                            <div className="w-52 sm:w-72 bg-slate-50 dark:bg-sky-950 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                                <div className="mb-8 inline-flex items-center justify-center text-white text-xl p-2 bg-indigo-500 rounded-md shadow-lg">
                                <ion-icon name="call"></ion-icon>
                                </div>

                                <div className="flex flex-col gap-2">
                                <a className="text-slate-900 dark:text-white text-base font-medium tracking-wider" href="tel:+234 805 037 6399" target="blank">+234 805 037 6399</a>
                                <a className="text-slate-900 dark:text-white text-base font-medium tracking-wider" href="tel:+234 913 406 4916" target="blank">+234 913 406 4916</a>
                                </div>
                            </div>

                            <div className="w-52 sm:w-72 bg-slate-50 dark:bg-sky-950 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                                <div className="mb-8 inline-flex items-center justify-center text-white text-xl p-2 bg-indigo-500 rounded-md shadow-lg">
                                <ion-icon name="mail"></ion-icon>
                                </div>

                                <div className="flex flex-col gap-2">
                                <a className="text-slate-900 dark:text-white text-base font-medium tracking-tighter" href="mailto:viscoris@gmail.com">viscoris@gmail.com</a>
                                <a className="text-slate-900 dark:text-white text-sm sm:text-base font-medium tracking-tighter" href="mailto:helenovedje1972@gmail.com">helenovedje1972@gmail.com</a>
                                </div>
                            </div>

                            <div className="w-52 sm:w-72 bg-slate-50 dark:bg-sky-950 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                                <div className="inline-flex items-center justify-center text-white text-xl p-2 bg-indigo-500 rounded-md shadow-lg">
                                <ion-icon name="home"></ion-icon>
                                </div>

                                <h3 className="text-slate-900 dark:text-white mt-8 text-base font-medium tracking-tighter">Edjemuonyavwe Community Town-Hall Shopping Plaza, Otorho Road, Oghara Junction, Oghara, Delta State.</h3>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={buyerseller} width={650} height={1117} alt="woman shopping" />
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}
