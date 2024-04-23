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
					body={
						`Information Student at PSG College of Technology (2020-2024).\nIntern at Samsung PRISM (2022-2023).\nWinner of Smart India Hackathon 2022`
					}
					title={"About"}></ContentTable>
			</Card>
		</>
	);
}

export default About;
