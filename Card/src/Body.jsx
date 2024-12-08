import Card from "./Card";

const bodyStyle = {
  height: "100vh",
  margin: "0",
  padding: "",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Body() {
  return (
    <div style={bodyStyle}>
      <Card />
    </div>
  );
}

export default Body;
