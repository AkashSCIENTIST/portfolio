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
						<b>🏠 Home</b>
					</a>
					<a href='' className='link'>
						<b>🤹 Skills</b>
					</a>
					<a href='#contacts' className='link'>
						<b>📞 Contacts</b>
					</a>
				</i>
			</div>
		</div>
	);
}

export default Navbar;
