import "./Navbar.css";
import logo_img from "./name.png";

function Navbar() {
	return (
		<div className='navbar'>
			<div className='name'>
				<a href='' className='name'>
					🚀AKASH🛰️
				</a>
			</div>
			<div className='links'>
				<i>
					<a href='' className='link'>
						🏠 Home
					</a>
					<a href='' className='link'>
						🤹 Skills
					</a>
					<a href='#contacts' className='link'>
						📞 Contacts
					</a>
				</i>
			</div>
		</div>
	);
}

export default Navbar;
