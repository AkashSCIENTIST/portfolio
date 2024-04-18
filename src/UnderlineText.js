import "./UnderlineText.css";

function UnderlineText(props){
    return (
			<span className='underline-text'>
				<b>{props.children}</b>
			</span>
		);
}

export default UnderlineText;