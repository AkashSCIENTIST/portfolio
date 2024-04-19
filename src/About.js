import Card from "./Card";
import UnderlineText from "./UnderlineText";
import "./About.css";

function About() {
	return (
		<>
			<Card>
				<UnderlineText>About</UnderlineText>
				<div className='about' >
					<ul>
						<li>
							Information Student at PSG College of Technology (2020-2024)
						</li>
						<li>Intern at Samsung PRISM (2022-2023)</li>
						<li>Winner of Smart India Hackathon 2022</li>
					</ul>
				</div>
			</Card>
		</>
	);
}

export default About;
