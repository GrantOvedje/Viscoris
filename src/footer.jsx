import { Link } from "react-router-dom"

export default function Footer(){
    return (
    <footer className="bg-gray-100 dark:bg-slate-800 py-4 px-12 sm:px10 sm:px-6 md:px-10 shadow-[inset_0_1px_0_0] shadow-amber-200 backdrop-blur-sm dark:shadow-amber-600">
        <div className="sm:flex sm:gap-20 md:gap-32 lg:gap-52 py-6">
          <div className="mb-8">
            <h1 className="mb-4 text-5xl font-bold text-amber-500">Viscoris</h1>
            <h3 className="text-2xl font-bold">Get the most out of your shopping experience</h3>
          </div>

          <div className="mb-8">
            <h1 className="mb-3 text-black dark:text-white text-2xl">Pages</h1>

            <ul className="mb-1">
              <li ><Link className="hover:text-amber-500" to="/products/supplement">Suppliments</Link></li>
              <li ><Link className="hover:text-amber-500" to="/products/coffee">Coffee</Link></li>
              <li ><Link className="hover:text-amber-500" to="/products/fuel-factor-x">Factor-X</Link></li>
              <li ><Link className="hover:text-amber-500" to="/products/other-things">Others</Link></li>
              <li ><Link className="hover:text-amber-500" to="/about">About Us</Link></li>
              <li ><Link className="hover:text-amber-500" to="/contacts">Contact Us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-black dark:text-white text-2xl">Contacts</h1>

            <ul className="flex flex-col gap-1">
              <a className="flex gap-2 items-center hover:text-amber-500" href="tel:+234 913 406 4916"><ion-icon name="call"></ion-icon> <p>+234 913 406 4916</p></a>
              <a className="flex gap-2 items-center hover:text-amber-500" href="mailto:viscoris@gmail.com"><ion-icon name="mail"></ion-icon> <p>viscoris@gmail.com</p></a>
            </ul>
            <ul className="flex gap-4">
              <li className="text-2xl">
                <a className="hover:text-amber-500" href="https://wa.me/2348050376399" target="blank"><ion-icon name="logo-whatsapp"></ion-icon></a>
              </li>
              <li className="text-2xl">
                <a className="hover:text-amber-500" href="https://github.com/grantovedje" target="blank"><ion-icon name="logo-github"></ion-icon></a>
              </li>
              <li className="hover:text-amber-500 text-2xl">
                <ion-icon name="logo-facebook"></ion-icon>
              </li>
              <li className="hover:text-amber-500 text-2xl">
                <ion-icon name="logo-twitter"></ion-icon>
              </li>
              <li className="hover:text-amber-500 text-2xl">
                <ion-icon name="logo-instagram"></ion-icon>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center py-4 sm:6 border-t-2 ">
          <h2>built by <a className="underline text-sky-700 hover:text-amber-500" href="https://github.com/GrantOvedje/Viscoris" target="blank"> grant ovedje</a></h2> 
          <h2>Copyright © 2024 Viscoris. All Rights Reserved.</h2>
        </div>
    </footer>
    )
}
