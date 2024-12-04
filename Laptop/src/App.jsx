import Laptop from "./Laptop";
import Bird from "./Bird";

const App = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Laptop
        image="https://www.digitaltrends.com/wp-content/uploads/2022/05/lenovo-legion-5i-pro.jpg?resize=1000%2C600&p=1"
        alt="Legion 5"
      />
      <Laptop
        image="https://www.digitaltrends.com/wp-content/uploads/2022/05/lenovo-legion-5i-pro.jpg?resize=1000%2C600&p=1"
        alt="Legion 5"
      />
      <Laptop
        image="https://www.digitaltrends.com/wp-content/uploads/2022/05/lenovo-legion-5i-pro.jpg?resize=1000%2C600&p=1"
        alt="Legion 5"
      />
      <Bird
        image="https://www.allaboutbirds.org/guide/assets/og/619048721-1200px.jpg"
        alt=" Crow"
      />
      <Bird
        image="https://www.allaboutbirds.org/guide/assets/og/619048721-1200px.jpg"
        alt=" Crow"
      />
      <Bird
        image="https://www.allaboutbirds.org/guide/assets/og/619048721-1200px.jpg"
        alt=" Crow"
      />
    </section>
  );
};

export default App;
