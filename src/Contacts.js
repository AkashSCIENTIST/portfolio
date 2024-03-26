import "./Contacts.css";
import {
	SiGmail,
	SiGithub,
	SiLinkedin,
	SiHackerrank,
	SiLeetcode,
} from "react-icons/si";
import { Link } from "react-router-dom";

function Contacts() {
	const contact_size = 50;
	return (
		<div className='contactss' id='contacts'>
			<div className='contacts'>
				<center>
					<a href='mailto:spakash182@gmail.com'>
						<SiGmail className='contact' alt='mail' size={contact_size} />
					</a>
					<a href='https://github.com/AkashSCIENTIST'>
						<SiGithub className='contact' alt='github' size={contact_size} />
					</a>
					<a href='https://www.linkedin.com/in/akash-s-p/'>
						<SiLinkedin
							className='contact'
							alt='linkedin'
							size={contact_size}
						/>
					</a>
					<a href='https://www.hackerrank.com/spakash182'>
						<SiHackerrank
							className='contact'
							alt='hackerrank'
							size={contact_size}
						/>
					</a>
					<a href='https://leetcode.com/spakash182/'>
						<SiLeetcode
							className='contact'
							alt='leetcode'
							size={contact_size}
						/>
					</a>
				</center>
			</div>
			<div className='cc'>
				<center>
					<b>🚀Site developed by Akash using React.js⚛️</b>
				</center>
			</div>
		</div>
	);
}

export default Contacts;
