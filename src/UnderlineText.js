import "./UnderlineText.css";

function UnderlineText(props){
    return (
			<span className='underline-text'>
				<hr className="ruler"></hr>
				<b>{props.children}</b>
			</span>
		);
}

export default UnderlineText;