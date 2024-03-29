import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      {props.children}
      {props.className}
    </div>
  );
}

export default Card;
