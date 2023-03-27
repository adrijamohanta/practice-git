import "./Item.css";

function Item(props) {
  const itemName = props.name;
  return (
    <div className="yoyo">
      <p className="yo">{itemName}</p>
      {props.children}
    </div>
  );
}

export default Item;
