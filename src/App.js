import Navbar from "./Navbar";
import "./App.css";
import Contacts from "./Contacts";
import PageLoading from "./PageLoading";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import Body from "./Body";
import AkashKalki from "./AkashKalki";
import LeftBar from "./LeftBar";
import Card from "./Card";

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
		<div className='app'>
			{/* <Navbar /> */}
			<div className='page_divider'>
				<div className='main_left'>
					<LeftBar />
					<div className='inner_left'>
						<LeftBar />
					</div>
				</div>
				<div className='main_middle'>
					<Card>
						<AkashKalki />
					</Card>
					<Skills />
					<Skills />
				</div>
				<div className='main_right'>
					<LeftBar />
				</div>
			</div>
		</div>
	);
}

export default App;
