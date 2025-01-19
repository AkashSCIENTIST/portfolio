import Card from "./Card";
import ContentTable from "./ContentTable";
import "./Skills.css";
import UnderlineText from "./UnderlineText";

function Skills() {
	// const icons = [
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg",
	// 	// "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
	// 	// "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
	// 	// "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
	// 	// "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
	// 	"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
	// 	"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
	// 	"https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
	// 	"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/eclipse/eclipse-original.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original-wordmark.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
	// 	"https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg",
	// ];
	return (
		<Card>
			<UnderlineText> </UnderlineText>
			<ContentTable title={"Skills"} body={``} />
			{/* <div className='skills' id='skills'>
				<center>
					{icons.map((e) => (
						// <Image src={e} width='70' height='70' key={e} />
						<img src={e} width='70' height='70' key={e} />
					))}
				</center>
			</div> */}
			<br />
			<ContentTable
				subtable={true}
				title={"Programming"}
				body={`Python (with Deep Learning), C, C++, Java, Node.JS`}
			/>
			<br />
			<ContentTable
				subtable={true}
				title={"Web Development"}
				body={`HTML, CSS, JS, React.JS, MERN Stack`}
			/>
			<br />
			<ContentTable
				subtable={true}
				title={"Databases"}
				body={"SQL - MySQL, NoSQL - MongoDB, Firebase"}
			/>
			<br />
			<ContentTable
				subtable={true}
				title={"Generative AI"}
				body={`Prompt Engineering with respect to ChatGPT, Stable Diffusion and DALL-E`}
			/>
			<br />
			<ContentTable
				subtable={true}
				title={"Spoken Language"}
				body={`Tamil, English, Hindi`}
			/>
			<br />
		</Card>
	);
}

export default Skills;
