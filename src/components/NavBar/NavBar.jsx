import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
	const [open, set_open] = useState(false);

	const routes = [
		{ id: 1, name: "Home", path: "/" },
		{ id: 2, name: "About", path: "/about" },
		{ id: 3, name: "Services", path: "/services" },
		{ id: 4, name: "Portfolio", path: "/portfolio" },
		{ id: 5, name: "Contact", path: "/contact" },
	];

	return (
		<nav>
			<div
				className="text-2xl md:hidden"
				onClick={() => set_open(!open)}
			>
				{open ? <IoMdClose /> : <IoMenuOutline />}
			</div>
			<ul className="md:flex">
				{routes?.map((route) => (
					<Link
						key={route.id}
						route={route}
					></Link>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
