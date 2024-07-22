/** @format */

import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false);
		});
	});
	const [mobileMenu, setMobileMenu] = useState(false);
	const toggleMenu = () => {
		mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
	};

	return (
		<nav className={` NavbarContainer ${sticky ? "dark-navbar" : ""} `}>
			<img src={logo} alt='' className='logoPic' />

			<ul className={mobileMenu ? "" : "hide-mobile-menu"}>
				<li>
					<Link to='hero-Container' smooth={true} offset={0} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='programs-container'
						smooth={true}
						offset={-260}
						duration={500}>
						Program
					</Link>
				</li>
				<li>
					<Link to='about' smooth={true} offset={-150} duration={500}>
						About Us
					</Link>
				</li>
				<li>
					<Link to='campus' smooth={true} offset={-260} duration={500}>
						Campus
					</Link>
				</li>
				<li>
					<Link to='testemonials' smooth={true} offset={-260} duration={500}>
						Testimonials
					</Link>
				</li>
				<li>
					<button className='btn'>
						<Link to='contact' smooth={true} offset={-260} duration={500}>
							Contact Us
						</Link>
					</button>
				</li>
			</ul>
			<img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
		</nav>
	);
};

export default Navbar;
