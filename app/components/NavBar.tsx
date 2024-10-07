import { Link } from "@remix-run/react";
import headerLogo from "./../../public/images/header-logo.svg";
import Hamburger from "./../../public/icons/hamburger.svg";
import { navLinks } from "./../constants";

export default function NavBar() {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <div className="flex justify-between items-center max-container">
                <Link to="/">
                    <img src={headerLogo} alt="NavLogo" width={130} height={29}/>
                </Link>
                {/* Hide the Menu on Mobile, making it visible for Desktop users */}
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden font-semibold">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link to={item.href} className="font-montserrat leading-normal text-lg text-slate-700">{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <img src={Hamburger} alt = "hamburger" width={25} height={25} className="lg:hidden"/>
                </div>
            </div>
        </header>
    )
}