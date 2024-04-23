import "./Navbar.css";
import logo_img from "./name.png";

function Navbar() {
	return (
		<div className='navbar'>
			<div className='name'>
				<a href='' className='name'>
					AKASH
				</a>
			</div>
			<div className='navbar-links'>
				<i>
					<a href='' className='navbar-link'>
						<b>Home</b>
					</a>
					<a href='' className='navbar-link'>
						<b>Skills</b>
					</a>
					<a href='#contacts' className='navbar-link'>
						<b>Contacts</b>
					</a>
				</i>
			</div>
		</div>
	);
}

export default Navbar;
