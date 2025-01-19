import Card from "./Card";
import UnderlineText from "./UnderlineText";
import "./About.css";
import ContentTable from "./ContentTable";

function About() {
	return (
		<>
			<Card>
				<UnderlineText>{""}</UnderlineText>
				<ContentTable
					body={`I am Akash S P, M.Tech student in Computer Science and Engineering - Information Security at NIT Calicut, with a solid academic foundation and practical experience in AI, cybersecurity, and software development. My projects include developing a hybrid transformer model for psychological disorder detection and implementing post-quantum cryptography to secure voice assistant communication. During my internships at Samsung R&D and VPT.ai, I worked on impactful solutions like financial ROI detection and Tamil word indexing. I am proficient in Python, Java, MERN stack, and databases, and have successfully led teams in competitions such as the Smart India Hackathon 2022.`}
					title={"About"}></ContentTable>
			</Card>
		</>
	);
}

export default About;
