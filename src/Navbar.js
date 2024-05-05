import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
	const [theme, setTheme] = useState(
		localStorage.getItem("AkashPortfolioTheme"),
	);

	useEffect(() => {
		if (theme === "Light Mode") {
			root.style.setProperty("--background", "#fefefe");
			root.style.setProperty("--textcolor", "#0b1215");
			setTheme("Light Mode");
			localStorage.setItem("AkashPortfolioTheme", "Light Mode");
			console.log(localStorage.getItem("AkashPortfolioTheme"));
		} else if (theme === "Dark Mode") {
			root.style.setProperty("--background", "#0b1215");
			root.style.setProperty("--textcolor", "#fafafa");
			setTheme("Dark Mode");
			localStorage.setItem("AkashPortfolioTheme", "Dark Mode");
			console.log(localStorage.getItem("AkashPortfolioTheme"));
		} else {
			root.style.setProperty("--background", "#fefefe");
			root.style.setProperty("--textcolor", "#0b1215");
			setTheme("Light Mode");
			localStorage.setItem("AkashPortfolioTheme", "Light Mode");
			console.log(localStorage.getItem("AkashPortfolioTheme"));
		}
	}, []);

	function changeTheme() {
		if (theme === "Light Mode") {
			root.style.setProperty("--background", "#0b1215");
			root.style.setProperty("--textcolor", "#fafafa");
			setTheme("Dark Mode");
			localStorage.setItem("AkashPortfolioTheme", "Dark Mode");
			console.log(localStorage.getItem("AkashPortfolioTheme"));
		} else {
			root.style.setProperty("--background", "#fefefe");
			root.style.setProperty("--textcolor", "#0b1215");
			setTheme("Light Mode");
			localStorage.setItem("AkashPortfolioTheme", "Light Mode");
			console.log(localStorage.getItem("AkashPortfolioTheme"));
		}
	}

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
					<button onClick={changeTheme} className='theme-changer'>
						{theme}
					</button>
				</i>
			</div>
		</div>
	);
}

export default Navbar;
