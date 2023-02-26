import "./MultiColorText.css";

function MultiColorText(props){
    return <div class="wrapper">
    <div class="container">
      <h1>{props.children}</h1>
    </div>
  </div>;
}

export default MultiColorText;