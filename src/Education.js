import Card from "./Card";
import ContentTable from "./ContentTable";
import "./Education.css";
import UnderlineText from "./UnderlineText";

function Education() {
	return (
		<Card>
			<UnderlineText>{}</UnderlineText>
			<ContentTable title={"Education"} body={``} />
			<br></br>
			<ContentTable
				subtable={true}
				title={"Bachelor's"}
				body={`
				Information Technology at PSG College of Technology. 
				From 2020 to 2024.
				CGPA : 9.19
				`}
			/>
			<br></br>
			<ContentTable
				subtable={true}
				title={"Higher Secondary"}
				body={`
				HSC at Vikas Vidyalaya Matriculation HIgher Secondary School, Tiruppur.
				From 2018 to 2020.
				Percentage : 94.5%
				`}
			/>
			<br></br>
			<ContentTable
				subtable={true}
				title={"Secondary"}
				body={`
				SSLC at St. Joseph's Matriculation HIgher Secondary School, Tiruppur.
				From 2006 to 2018.
				Percentage : 94.6%
				`}
			/>
		</Card>
	);
}

export default Education;
