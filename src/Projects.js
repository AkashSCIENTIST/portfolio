import "./Projects.css";
import Card from "./Card";
import ContentTable from "./ContentTable";
import UnderlineText from "./UnderlineText";

import leo from "./leo.png";
import blockchain from "./blockchain.jpg";
import finance from "./finance.jpg";
import tamilwiki from "./tamilwiki.jpg";
import search from "./search.jpg";
import psychology from "./psychology.jpg";
import rootwords from "./rootwords.jpg";

function Projects() {
	return (
		<Card>
			<UnderlineText>{}</UnderlineText>
			<ContentTable title={"Projects"} body={``} />
			<br></br>
			<div className='projects'>
				<Project
					img={psychology}
					name={"Psychological Disorder Detection using Hybrid Transformer"}
				/>
				<Project
					img={blockchain}
					name={"Securing Communication using Modified SPHINCS+C"}
				/>
				<Project img={finance} name={"Financial Region of Interest Detector"} />
				<Project img={tamilwiki} name={"Tamil Wiki Search Extension"} />
				<Project img={rootwords} name={"Root Words Indexing for Tamil"} />
				<Project
					img={search}
					name={"Multi Modal Search Engine (Prototype) for SIH 2022"}
				/>
			</div>
		</Card>
	);
}

function Project({ img, name }) {
	return (
		<div className='project'>
			<div
				className='project-image'
				style={{
					backgroundImage: `url(${img})`,
				}}></div>
			<p className='project-name'>{name}</p>
		</div>
	);
}

export default Projects;
