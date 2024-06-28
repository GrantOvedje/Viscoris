import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supports } from "localforage";

export default function Header(){
    const [menu, setMenu] = useState("invisible");

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    const [hidden, setHidden] = useState(true);
    
    const themeRef = useRef();
    useEffect(()=> {
        let handleClickOutside = (e)=> {
        if (!themeRef.current.contains(e.target)){
            setHidden(true)
        }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return() => {
        document.removeEventListener("mousedown", handleClickOutside);
        }
    });

    const menuRef = useRef();
    useEffect(()=> {
      let handleClickOutside = (e)=> {
        if (!menuRef.current.contains(e.target)){
          setMenu("invisible");
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
  
      return() => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    });

    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const options =[
        {
        icon: "sunny",
        text: "light",
        },

        {
        icon: "cloudy-night",
        text: "dark",
        },

        {
        icon: "desktop-outline",
        text: "system",
        },
    ];
    
    function onWindowMatch() {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
        element.classList.add("dark");
        } else {
        element.classList.remove("dark");
        }
    }

    onWindowMatch();

    useEffect(()=> {
        switch (theme) {
        case "dark":
            element.classList.add('dark');
            localStorage.setItem("theme", "dark");
            break;
        case "light":
            element.classList.remove('dark');
            localStorage.setItem("theme", "light");
            break;
        default:
            localStorage.removeItem("theme");
            onWindowMatch();
            break;
        }
    }, [theme]);

    darkQuery.addEventListener("change", (e)=> {
        if (!("theme" in localStorage)) {
        if (e.matches) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
        }
    });

    return(
        <header className="sticky top-0 z-40 flex items-center justify-between  bg-white/80 dark:bg-slate-800/80 px-3 sm:px-5 py-2 text-slate-900 shadow-[inset_0_-1px_0_0] shadow-amber-200 backdrop-blur-sm dark:shadow-amber-600 dark:text-gray-100">
            <h1 className="font-bold text-2xl text-amber-500"><Link to={`/`}>Viscoris</Link></h1>

            <nav className="hidden md:flex">
                <ul className="flex gap-8 lg:gap-14">
                    {/* <li className="hover:text-amber-500"><Link to="/products/supplement">Suppliments</Link></li> */}
                    <li className="hover:text-amber-500"><a href="/products/supplement">Suppliments</a></li>
                    <li className="hover:text-amber-500"><Link to="/products/coffee">Coffee</Link></li>
                    <li className="hover:text-amber-500"><Link to="/products/fuel-factor-x">Factor-X</Link></li>
                    <li className="hover:text-amber-500"><Link to="/products/other-things">Others</Link></li>
                    <li className="hover:text-amber-500"><Link to="/about">About Us</Link></li>
                    <li className="hover:text-amber-500"><Link to="/contacts">Contact Us</Link></li>
                </ul>
            </nav>

            <div className="flex gap-2">
                <div className="border rounded border-amber-600 dark:border-amber-600 md:hidden">
                    <button onClick={()=> setMenu("visible")} className=" leading-3 text-1xl rounded-full m-1">
                    <ion-icon name="menu"></ion-icon>
                    </button>
                </div>

                <div ref={themeRef} className="border rounded border-amber-600 dark:border-amber-600">

                    <button 
                    className=" leading-3 text-1xl rounded-full m-1"
                    onClick={()=> setHidden(!hidden)}
                    
                    >
                    {theme === "dark" ? <ion-icon name="cloudy-night"></ion-icon> 
                        :
                        (theme === "light" ? <ion-icon name="sunny"></ion-icon> : <ion-icon name="cloudy-night"></ion-icon> 
                        || 
                        theme === "system" ? <ion-icon name="desktop-outline"></ion-icon> : <ion-icon name="light"></ion-icon> 
                        )
                    }
                    </button>

                    {!hidden && 
                    <div className="fixed top-12 right-2 dark:bg-slate-700 dark:shadow-cyan-500/50 bg-gray-100 shadow-lg p-2 rounded">
                        { options?.map((opt)=> (
                            <button 
                            key={opt.text} 
                            onClick={()=>[ setTheme(opt.text), setHidden(true)]}                 
                            className={`flex items-center justify-start text-left w-28 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}
                            >
                            <ion-icon name={opt.icon}></ion-icon>
                            <span className="px-3">{opt.text}</span>
                            </button>
                        ))}
                    </div>
                    }
                </div>
            </div>

            <div ref={menuRef} className={`absolute  ${ menu } top-0 right-0 px-6 py-5 text-lg bg-slate-100 dark:bg-slate-600 min-h-screen w-2/3 transition-opacity duration-1000 ease-in-out md:hidden dark:text-slate-100`}>
                <div className="mb-10 ">
                    <button onClick={()=> setMenu("invisible")} className="leading-3 text-2xl rounded-full m-1">
                    <ion-icon name="close"></ion-icon>
                    </button>
                </div>

                <ul className="flex flex-col gap-3">
                    <li className="hover:text-amber-500">
                        <Link onClick={()=> setMenu("invisible")} to="/products/supplement">Suppliments</Link>
                    </li>
                    <li className="hover:text-amber-500">
                        <Link onClick={()=> setMenu("invisible")} to="/products/coffee">Coffee</Link>
                    </li>
                    <li className="hover:text-amber-500">
                        <Link onClick={()=> setMenu("invisible")} to="/products/fuel-factor-x">Factor-X</Link>
                    </li>
                    <li className="hover:text-amber-500">
                        <Link onClick={()=> setMenu("invisible")} to="/products/other-things">Others</Link>
                    </li>
                    <li className="hover:text-amber-500">
                        <Link onClick={()=> setMenu("invisible")} to="/about">About Us</Link>
                    </li>
                    <li className="hover:text-amber-500">
                        <Link onClick={()=> setMenu("invisible")} to="/contacts">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </header>        
    )
}