import "./Card.css";
import Image from "./bg.png";

function Card(props) {
	return (
		<div>
			<div className='card'>{props.children}</div>
		</div>
	);
}

export default Card;
