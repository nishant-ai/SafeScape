import logo from "../../assets/safescape.png"
const Navbar = () => {
    return(
        // Desktop <div>
            <nav className="flex justify-start items-center pt-5 px-5 pb-10">
                <div className="flex justify-around items-center">
                    <div className="flex justify-center items-center">
                        <img src={logo}
                            alt="logo" className="w-16 h-16"/>
                        <p className="text-black font-semibold text-xl">Safe<span className="text-[#FE9900]">Scape</span></p>
                    </div>
                    <ul className="hidden md:flex space-x-10 ml-16 mr-10 items-center justify-center">
                        <li>
                            <a className="text-black" href="#about">About Us</a>
                        </li>
                        <li>
                            <a className="text-black" href="#services">Services</a>
                        </li>
                        <li>
                            <a className="text-black" href="#contact">Pricing</a>
                        </li>
                        <li>
                    <button className="text-white border-0 rounded-3xl bg-[#FE9900] px-7 py-3">
                        Get Api Key
                    </button>
                    </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar
