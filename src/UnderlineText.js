import "./UnderlineText.css";

function UnderlineText(props){
    return (
			<span className='underline-text'>
				<b>{props.children}</b>
				<hr className="ruler"></hr>
			</span>
		);
}

export default UnderlineText;