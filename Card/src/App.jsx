import Player from "./Player";
const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <Player
        image="https://i.insider.com/5d09448b1568f20d376ec1cb?width=800&format=jpeg&auto=webp"
        name="Spider-man"
      />
      <Player
        image="https://imageio.forbes.com/blogs-images/insertcoin/files/2018/10/superman1.jpg?height=474&width=711&fit=bounds"
        name="Super-man"
      />
    </section>
  );
};

export default App;
