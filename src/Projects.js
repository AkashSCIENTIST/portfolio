import "./Projects.css";
import Card from "./Card";
import ContentTable from "./ContentTable";
import UnderlineText from "./UnderlineText";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import leo from "./leo.png";
import blockchain from "./blockchain.jpg";
import finance from "./finance.jpg";
import tamilwiki from "./tamilwiki.jpg";
import search from "./search.jpg";
import psychology from "./psychology.jpg";
import rootwords from "./rootwords.jpg";
import rootwords2 from "./rootwords2.jpg";

function Projects() {
	return (
		<>
			<Card>
				<UnderlineText></UnderlineText>
				<ContentTable title={"Projects"} body={``} />
				<br></br>
				<div className='projects'>
					<Project
						img={psychology}
						name={"Psychological Disorder Detection using Hybrid Transformer"}
						desc={`The definition of a
					psychological disorder is an upsetting pattern of feelings, ideas, or
					actions. Early detection reduces stigma, increases overall well-being,
					prevents complications, minimises the chance of crisis situations, and
					starts the process of taking appropriate action. Several NLP related
					Hybrid Transformer models have been created to identify conditions in
					tweets such as stress, anxiety, depression, and so on. The highest
					accuracy of the created models is 99.99%.`}
					/>
					<Project
						img={blockchain}
						name={"Securing Communication using Modified SPHINCS+C"}
						desc={`Certain voice assistants frequently use
					private blockchains to store their data. The blockchains of today are impenetrable. The
					security of blockchain technology is at risk due to the emergence of quantum computers,
					which have the capacity to manipulate blockchains and their data. These cryptographic
					techniques, known as post-quantum algorithms, are resistant to quantum computing. One
					such existing post-quantum cryptography algorithm is SPHINCS+. It is NIST Category 5 algorithm. 
					SPHINCS+ generates a
					relatively huge signature. The SPHINCS+C algorithm was created to reduce signature
					size in order to overcome this. The already-existing SPHINCS+C was altered further to
					reduce the size of the signatures that SPHINCS+C created.
					`}
					/>
					<Project
						img={finance}
						name={"Financial Region of Interest Detector"}
						desc={`
					As part of the Samsung PRISM Internship, a model was designed to identify the
					Region of Interest (ROI) in a smartphone snapshot of banking apps. The ROI is a
					rectangle section that contains important material such as the names of the stocks, banks,
					currencies, and stock exchange. The ROI will be detected and identified by a deep
					learning algorithm, which is especially made for finance applications like Yahoo Finance
					and BloomBerg. Several models have been tuned and used in this procedure. The primary
					performance metric was mAP50. The mAP50 of the best-performing model was 84%.`}
					/>
					<Project
						img={search}
						name={"Multi Modal Search Engine (Prototype) for SIH 2022"}
						desc={`Hexagon Search, a prototype multimodal search engine, was developed in
					response to the Smart India Hackathon's AT980 challenge description. It is unified
					database software that allows you to search text or terms across a variety of file types,
					such as Word, Excel, PDF, JPG, and PNG, using Computer Vision and NLP
					functionalities internally. Additionally, it has connectivity with pre-established database
					terms.
					`}
					/>
					<Project
						img={tamilwiki}
						name={"Tamil Wiki Search Extension"}
						desc={`This Project was implemented under Venmurasu Programming Team’s
					intra-collage hackathon. The Venmurasu Programming Team is a voluntary organisation made up of
					PSG College of Technology faculty, students, and alumni that is dedicated to developing
					the NLP environment for the Tamil language.It aimed to improve Tamil Wiki site’s search functionality, using NLP based
					principles. For this, Existing publicly visible pages of the were web-scraped and indexed
					using ZincSearch. New Search facility was developed and it offers superior results
					compared to existing features.`}
					/>
					<Project
						img={rootwords2}
						name={"Root Words Indexing for Tamil"}
						desc={`Accomplished as a part of the Venmurasu Programming Team's remote
					internship. The Venmurasu Programming Team is a voluntary organisation made up of
					PSG College of Technology faculty, students, and alumni that is dedicated to developing
					the NLP environment for the Tamil language. The goal of the project is to identify
					indexes for all Tamil terms from the "Venmurasu Novel Series" and index them all. From
					the original novels, a total of 4,49,239 unique Tamil words are retrieved, and 9,028 of
					those words are indexed. In addition to this an User Interface was also developed for
					real-world use.
					`}
					/>
				</div>
			</Card>
		</>
	);
}

function Project({ img, name, desc }) {
	const contentStyle = {
		maxWidth: "600px",
		width: "75%",
		backgroundColor: "var(--background)",
		borderRadius: "11px",
		maxHeight: "100vh",
	};
	return (
		<Popup
			trigger={
				<div className='project'>
					<div
						className='project-image'
						style={{
							backgroundImage: `url(${img})`,
						}}></div>
					<p className='project-name'>
						{name} <br></br><i>(Click to see more...)</i>
					</p>
				</div>
			}
			contentStyle={contentStyle}
			closeOnDocumentClick
			modal
			nested>
			<div className='popup modal'>
				<div
					className='project-image-popup'
					style={{
						backgroundImage: `url(${img})`,
					}}></div>
				<p className='project-name more-pad'>{name}</p>
				{desc && (
					<>
						<p className='project-desc more-pad'>{desc}</p>
					</>
				)}
			</div>
		</Popup>
	);
}

export default Projects;
