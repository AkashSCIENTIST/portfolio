import { useEffect } from "react";
import CoverImage from "./cover.png";
import "./Body.css";

function Body() {
	useEffect(() => {
		console.log(CoverImage);
	}, []);
	return (
        <img src={CoverImage} className="coverimage" />
    );
}

export default Body;
