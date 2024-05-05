import "./App.css";
import PageLoading from "./PageLoading";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import AkashKalki from "./AkashKalki";
import LeftBar from "./LeftBar";
import About from "./About";
import Education from "./Education";
import Navbar from "./Navbar";
import FooterGradiant from "./FooterGradiant";
import Contacts from "./Contacts";
import Projects from "./Projects";

function App() {
	return <Page />;
}

function Page() {
	return (
		<>
			<div className='app'>
				<Navbar />
				<AkashKalki />
				<About />
				<Projects />
				<Education />
				<Skills />
				<Contacts />
				<FooterGradiant />
			</div>
		</>
	);
}

export default App;
