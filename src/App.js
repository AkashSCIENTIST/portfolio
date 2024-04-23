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
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const handleMouseMove = (e) => {
		setCursorPosition({ x: e.clientX, y: e.clientY });
	};

	return (
		<>
			<div className='app' onMouseMove={handleMouseMove}>
				<Navbar />
				<AkashKalki />
				<About />
				<Education />
				<Skills />
				{/* <div className='page_divider'>
					<div className='main_left'>
						<LeftBar />
						<div className='inner_left'>
							<LeftBar />
						</div>
					</div>
					<div className='main_middle'>
						<AkashKalki />
						<About />
						<Education />
						<Skills />
					</div>
					<div className='main_right'>
						<LeftBar />
					</div>
				</div> */}
				{/* <CustomCursor cursorPosition={cursorPosition} /> */}
				<Contacts/>
				<FooterGradiant />
			</div>
		</>
	);
}

const CustomCursor = ({ cursorPosition }) => {
	return (
		<div
			className='custom-cursor'
			style={{ left: cursorPosition.x, top: cursorPosition.y }}
		/>
	);
};

export default App;
