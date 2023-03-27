//step1
import "./ItemDate.css";
//step2
function ItemDate(props) {
  const day = props.day;
  const month = props.month;
  const year = props.year;
  return (
    <div className="mfg-date">
      <span>{day}</span>
      <span> {month}</span>
      <span> {year}</span>
    </div>
  );
}
//step3
export default ItemDate;
