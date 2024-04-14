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
	return (
		<div className='contactss' id='contacts'>
			<div className='contacts'>
				<center>
					<a href='mailto:spakash182@gmail.com'>
						<SiGmail className='contact' alt='mail' />
					</a>
					<a href='https://github.com/AkashSCIENTIST'>
						<SiGithub className='contact' alt='github' />
					</a>
					<a href='https://www.linkedin.com/in/akash-s-p/'>
						<SiLinkedin className='contact' alt='linkedin' />
					</a>
					<a href='https://www.hackerrank.com/spakash182'>
						<SiHackerrank className='contact' alt='hackerrank' />
					</a>
					<a href='https://leetcode.com/spakash182/'>
						<SiLeetcode className='contact' alt='leetcode' />
					</a>
				</center>
			</div>
		</div>
	);
}

export default Contacts;
