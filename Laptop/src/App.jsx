import React from "react";
import Car from "./Car";

const Cardata = [
  {
    id: 1,
    brand: "Brand: Porsche",
    Model: "Model: 911 Carrera",
    price: "Price: $114,400",
    edition: "Basic",
    image:
      "https://www.motortrend.com/files/668d77efaa21ed0008bcd9f2/013-2025-porsche-911-carrera.jpg?w=768&width=768&q=75&format=webp",
  },
  //   {
  //     id: 2,
  //     brand: "Brand: Chevrolet",
  //     Model: "Model: Corvette Stingray",
  //     price: "Price: $66,945",
  //     edition: "Basic",
  //     image:
  //       "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/771c0c312e2cd80388c5dce67a973ecd.jpg",
  //   },
  {
    id: 3,
    brand: "Brand: Toyota",
    Model: "Model: GR86",
    price: "Price: $30,395",
    edition: "Basic",
    image: "https://cdn.motor1.com/images/mgl/x7GYG/s1/2022-toyota-gr-86.jpg",
  },
  {
    id: 4,
    brand: "Brand: Ferrari",
    Model: "Model: 812 Competizione",
    price: "Price: $610,000",
    edition: "Special Edition",
    image:
      "https://www.topgear.com/sites/default/files/2021/11/812_Competizione_statics-details_10_0.jpg",
  },
  {
    id: 5,
    brand: "Brand:  Lamborghini",
    Model: "Model: Huracán STO",
    price: "Price: $333,000",
    edition: "Special Edition",
    image:
      "https://di-uploads-pod42.dealerinspire.com/lamborghinibroward/uploads/2022/03/2021-Lamborghini-Huraca%CC%81n-STO.jpg",
  },
];

const App = () => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {Cardata.map((item) => {
        return (
          <Car
            key={item.id}
            edition={item.edition}
            brand={item.brand}
            Model={item.Model}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default App;
