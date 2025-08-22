import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
	const nevMenu = () => {
		return (
			<>
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					<Link href={"/about"}>About</Link>
				</li>
				<li>
					<Link href={"/services"}>Products</Link>
				</li>
				<li>
					<Link href={"/blogs"}>Blogs</Link>
				</li>
				<li>
					<Link href={"/contact"}>Contact</Link>
				</li>
			</>
		)
	}

	return (
		<div className='rounded-lg bg-gradient-to-tr from-green-50 to-green-100'>
			<div className='navbar w-11/12 mx-auto'>
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							{nevMenu()}
						</ul>
					</div>
					<Link href={"/"} className='flex items-center justify-center ml-2 gap-2'>
						<Image src={"/assets/logo.ico"} width={40} height={30} alt="Fresh Veggies Logo" />
						<p className="text-xl font-bold invisible sm:visible">Fresh<span className='text-green-500'>Veggies</span></p>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex ">
					<ul className="menu menu-horizontal px-1 font-medium">
						{nevMenu()}
					</ul>
				</div>
				<div className="navbar-end flex items-center gap-3">
					{/* avatar */}
					<div className="tooltip tooltip-bottom">
						<img
							className='w-10 h-10 rounded-full object-cover cursor-pointer'
							src={"/assets/avatar.png"}
							alt=""
						/>
					</div>

					{/* login button */}
					<a className="btn bg-green-400 hover:bg-green-500 rounded-md ">Login</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;