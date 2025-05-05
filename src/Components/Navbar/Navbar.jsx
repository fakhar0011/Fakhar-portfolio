import React, { useRef, useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    return (
        <div className="flex justify-between items-center mx-6 md:mx-[170px] my-5">
            {/* Mobile Menu Icon */}
            <img
                src={menu_open}
                onClick={openMenu}
                alt="menu open"
                className="block md:hidden fixed right-6 top-6 z-50 w-8 cursor-pointer"
            />

            {/* Nav Menu */}
            <ul
                ref={menuRef}
                className="flex md:flex-row flex-col md:static fixed top-0 right-[-350px] w-[350px] h-full md:w-auto md:h-auto bg-[#1f0016] md:bg-transparent transition-all duration-500 z-40 md:z-auto items-start md:items-center gap-8 md:gap-14 text-white text-lg md:text-xl list-none"
            >
                {/* Close Button */}
                <img
                    src={menu_close}
                    onClick={closeMenu}
                    alt="menu close"
                    className="block md:hidden w-6 mt-6 ml-auto mr-6 cursor-pointer"
                />

                {["home", "about", "services", "work", "contact"].map((item, index) => (
                    <li
                        key={index}
                        className="flex md:flex-col flex-row items-center gap-3 md:gap-1 px-10 md:px-0 cursor-pointer"
                    >
                        <AnchorLink
                            className="no-underline text-white hover:text-fuchsia-400 transition duration-300"
                            href={`#${item}`}
                            offset="50"
                        >
                            <p onClick={() => setMenu(item)}>
                                {item === "about" ? "About me" : item.charAt(0).toUpperCase() + item.slice(1)}
                            </p>
                        </AnchorLink>
                        {menu === item && <img src={underline} alt="underline" className="w-[80px]" />}
                    </li>
                ))}
            </ul>

            {/* Connect Button (hidden on mobile) */}
            <div className="hidden md:block bg-gradient-to-r from-[#DA7C25] to-[#B923E1] px-10 py-4 rounded-full text-lg cursor-pointer hover:scale-105 transition-transform duration-300">
                <AnchorLink className="text-white no-underline" offset={50} href="#contact">
                    Connect with me
                </AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
