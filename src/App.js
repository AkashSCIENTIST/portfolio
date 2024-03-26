import Navbar from "./Navbar";
import "./App.css";
import Contacts from "./Contacts";
import PageLoading from "./PageLoading";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import Body from "./Body";
import AkashKalki from "./AkashKalki";

function App() {
	const [loaded, isLoaded] = useState();
	useEffect(() => {
		document.title = "Hey, I'm Akash !"; // Set the document title
	}, []);
	return (
		<>
			{!isLoaded && <PageLoading />}
			{isLoaded && <Page isLoaded={isLoaded} />}
		</>
	);
}

function Page({ isLoaded }) {
	useEffect(() => {
		isLoaded(true);
	}, []);
	return (
		<>
			<Navbar />
			<AkashKalki />
			{/* <Body/> */}
			<Skills />
			<Contacts />
		</>
	);
}

export default App;
