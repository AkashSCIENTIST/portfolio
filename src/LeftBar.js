import "./LeftBar.css";
import Card from "./Card";
import AkashImage from "./leo.png";
import Contacts from "./Contacts";

function LeftBar() {
	return (
		<div className='left_card'>
			<Card>
				<center>
					<div className='dividor'>
						<div className='left-bar-left'>
							<img src={AkashImage} className='profile-photo' />
						</div>
						<div className='left-bar-right'>
							<b className='profile-name'>AKASH S P</b>
							<p className='dob-text'>Born August 2, 2002</p>
						</div>
					</div>
					<Contacts />
					<div className='links'>
						<a href='#home'>
							<button className='link'>🏠 Home</button>
						</a>
						<a href='#skills'>
							<button className='link'>🤹 Skills</button>
						</a>
						<a href='#contacts'>
							<button className='link'>📞 Contacts</button>
						</a>
					</div>
				</center>
			</Card>
		</div>
	);
}

export default LeftBar;
