import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { supports } from "localforage";
import Scroll from "./scroll";
import { useEffect } from "react";
import shopping from "./images/shopping.scg

export default function Home() {
  useEffect(() => {
    document.title ="Home | Viscoris"
  }, []); 

  const list =[
    {
      icon: "car-sharp",
      head: "Free Shipping",
      text:"Order Over 5 Items",
    },

    {
      icon: "lock-closed-sharp",
      head: "Secure Payment",
      text: "100 Secure Payment",
    },

    {
      icon: "refresh-sharp",
      head: "Easy Returns",
      text: "10 Days Returns",
    },

    {
      icon: "call",
      head: "24/7 Support",
      text: "Call Us Anytime",
    }
  ];

  const products=[
    {
      image:"/src/images/vaginne.jpg",
      name:"Supplements",
      detail:"We deal on supplements for a better, healthy living.",
      button:"view our supplements",
      path:"/products/supplement",
    },
    {
      image:"src/images/cup-coffee-table-front-street-with-city-lights-background.jpg",
      name:"Coffees",
      detail:"We deal on coffees with extra benefits. More than just a coffee.",
      button:"view our coffees",
      path:"/products/coffee",
    },
    {
      image:"src/images/ffx-executive-pack.png",
      name:"Fuel Factor X",
      detail:"With fuel factor you can have a more economical fuel treatment.",
      button:"view our Fuel Factor",
      path:"/products/fuel-factor-x",
    },
    {
      image:"/src/images/vintage.avif",
      name:"Others",
      detail:"Others we deal on such as shirt, shoes, and small domestic appliances.",
      button:"see other things",
      path:"/products/other-things"
    },
  ]

  return ( 
    <>
      <Scroll />
      <Header></Header>

      <main>
        <section className=" bg-gradient-to-br from-sky-50 via-sky-100 to-sky-300 px-4 md:px-10 py-8 shadow-[inset_0_-1px_0_0] shadow-sky-100 dark:from-sky-600 dark:via-sky-800 dark:to-sky-950 dark:shadow-sky-800 lg:flex gap-10 items-center">
          <div className="flex flex-col gap-3 px-1 sm:px-5 pt-10 text-center md:text-left md:px-6 md:pt-0">
            
            <h1 className="text-4xl text-black dark:text-white sm:text-5xl md:text-7xl font-extrabold">Better Life With <span className="text-amber-500">Viscoris</span></h1>
            <p className="not-italic text-base md:text-xl">An Inovative method for client satisfaction. With Viscoris, you can get the most out of your shopping experience. We provide the Best shopping service. Come have a life with Us.</p>
            <Link className="rounded py-3 text-center text-lg font-bold text-white bg-cyan-600 dark:bg-cyan-400" to="/about">More About Us</Link>
          </div>

          <div>
            <img src={shopping} width={1364} height={1117} alt="woman shopping" />
          </div>
        </section>

        <section className="">
          <div className="p-2 mx-2 sm:mx-10 md:mx-0 md:flex md:justify-between">
            {
              list?.map((list)=> (
                <div key={list.icon} className="bg-slate-50 dark:bg-sky-200 m-3 md:w-2/6 flex gap-1 items-center p-2 shadow-md rounded-lg">
                  <div className="leading-3 text-5xl md:leading-1 lg:leading-3 m-1 text-sky-500 dark:text-sky-600">
                    <ion-icon name={list.icon}></ion-icon>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl md:text-xl lg:text-2xl text-black dark:text-slate-800">{list.head}</h1>
                    <p className="dark:text-slate-700">{list.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        <section className="px-4 py-10 sm:px-10 md:px-16  md:py-16 bg-slate-50 dark:bg-slate-800">
          <div>
            <h1 className="mb-8 text-center text-4xl sm:text-4xl text-black dark:text-white font-bold">Explore Our Products</h1>
          </div>

          
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center">
            {
              products?.map((products)=>(
                <div key={products.name} className=" border border-amber-300 dark:shadow-cyan-500/50 shadow-lg w-60 sm:w-72 md:w-96 lg:w-80">
                  <img src={products.image} className="w-60 h-56 sm:w-72 md:w-96 lg:w-96 lg:h-80" alt={products.alt} />
                  <div className="p-2 flex flex-col gap-3 bg-white dark:bg-sky-950">
                    <p className="text-xl font-semibold text-black dark:text-white">{products.name}</p>
                    <p className="p-1">{products.detail}</p>
                    <Link className="w-full rounded py-2 text-center text-lg font-bold text-white bg-cyan-600 dark:bg-cyan-500" to={products.path}>{products.button}</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        <section className="flex flex-col items-center px-4 sm:px-16 md:px-24 lg:px-16 py-8 lg:flex-row lg:justify-between gap-10 dark:bg-sky-800">
          <div className="flex flex-col items-center py-10">
            <div>
              <h1 className="mb-6 text-center text-4xl sm:text-5xl text-black dark:text-white font-bold">Contact Us</h1>
              <h3 className="mb-10 text-center textxl font-bold">You can please give us a call, send an email on a product you admire Or visit our Adress</h3>
            </div>

            <div className="flex flex-col items-center gap-6 lg:justify-center  lg:grid lg:grid-cols-2">

              <div className="w-52 sm:w-72 lg:w-52 bg-slate-50 dark:bg-sky-950 rounded-lg px-6 py-8 lg:py-4 ring-1 ring-slate-900/5 shadow-xl">
                <div className="mb-8 inline-flex items-center justify-center text-white text-xl p-2 bg-indigo-500 rounded-md shadow-lg">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </div>

                <div className="flex flex-col gap-2">
                  <a className="text-slate-900 dark:text-white text-base font-medium tracking-wider" href="https://wa.me/2348050376399" target="blank">+234 805 037 6399</a>
                  <a className="text-slate-900 dark:text-white text-base font-medium tracking-wider" href="https://wa.me/2349134064916" target="blank">+234 913 406 4916</a>
                </div>
              </div>

              <div className="w-52 sm:w-72 lg:w-52 bg-slate-50 dark:bg-sky-950 rounded-lg px-6 py-8 lg:py-4 ring-1 ring-slate-900/5 shadow-xl">
                <div className="mb-8 inline-flex items-center justify-center text-white text-xl p-2 bg-indigo-500 rounded-md shadow-lg">
                <ion-icon name="call"></ion-icon>
                </div>

                <div className="flex flex-col gap-2">
                <a className="text-slate-900 dark:text-white text-base font-medium tracking-wider" href="tel:+234 805 037 6399" target="blank">+234 805 037 6399</a>
                <a className="text-slate-900 dark:text-white text-base font-medium tracking-wider" href="tel:+234 913 406 4916" target="blank">+234 913 406 4916</a>
                </div>
              </div>

              <div className="w-52 sm:w-72 lg:w-52 bg-slate-50 dark:bg-sky-950 rounded-lg px-6 py-8 lg:py-4 ring-1 ring-slate-900/5 shadow-xl">
                <div className="mb-8 inline-flex items-center justify-center text-white text-xl p-2 bg-indigo-500 rounded-md shadow-lg">
                <ion-icon name="mail"></ion-icon>
                </div>

                <div className="flex flex-col gap-2">
                <a className="text-slate-900 dark:text-white text-base font-medium tracking-tighter" href="mailto:viscoris@gmail.com">viscoris@gmail.com</a>
                <a className="text-slate-900 dark:text-white text-sm sm:text-base lg:text-sm font-medium tracking-tighter" href="mailto:helenovedje1972@gmail.com">helenovedje1972@gmail.com</a>
                </div>
              </div>

              <div className="w-52 sm:w-72 bg-slate-50 dark:bg-sky-950 rounded-lg px-6 py-8 lg:py-4 ring-1 ring-slate-900/5 shadow-xl">
                <div className="inline-flex items-center justify-center text-white text-xl p-2 bg-indigo-500 rounded-md shadow-lg">
                <ion-icon name="home"></ion-icon>
                </div>

                <h3 className="text-slate-900 dark:text-white mt-8 text-base font-medium tracking-tighter">Edjemuonyavwe Community Town-Hall Shopping Plaza, Otorho Road, Oghara Junction, Oghara, Delta State.</h3>
              </div>
            </div>
          </div>

          <div>
            <img src="/images/buyerseller.svg" width={650} height={1117} alt="woman shopping" />
          </div>
        </section>
      </main>
      
      <Footer></Footer>      
    </>
  )
}

