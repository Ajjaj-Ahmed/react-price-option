import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
    ];

    const[open,setOpen] = useState(false)

    return (
        <nav className="bg-yellow-400 text-black">
            <div className="md:hidden text-3xl" onClick={()=>setOpen(!open)}>
                {
                    open ? <IoMdClose />:<RiMenu2Line/>
                }
                
            </div>
            <ul className={`md:flex bg-yellow-400 gap-5 ${open ? '':'hidden'} absolute`}>
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;