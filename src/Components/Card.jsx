import "./Card.css";
import Square from "./Square";

const Card = ({ apiData }) => {

  const {API, Description, Link} = apiData;
  
  return (
    <div className="cardContainer">
      <a target="_blank" rel="noreferrer" href={Link} >
        <span>{API}</span>
      </a>
      <span>{Description}</span>
      <Square />
    </div>
  );
};

export default Card;
