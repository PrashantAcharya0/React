import Picture from "./Picture";
import Heading from "./Heading";
import Discribtion from "./Discribtion";
import Button from "./Button";
const cardStyle = {
  boxShadow:
    " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  margin: "5rem 0",
  width: "400px",
};

function Card() {
  return (
    <div style={cardStyle}>
      <Picture />
      <Heading />
      <Discribtion />
      <Button />
    </div>
  );
}

export default Card;
