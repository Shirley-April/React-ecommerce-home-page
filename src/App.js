import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",

      veg1: "Spinach",
      veg1Img:
        "https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      spinachQuantity: 10,

      veg2: "Onion",
      veg2Img:
        "https://images.pexels.com/photos/175415/pexels-photo-175415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      onionQuantity: 30,

      veg3: "Carrots",
      veg3Img:
        "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      carrotQuabtity: 50,

      type2: "Fruits",

      fruit1: " banana",
      fruit1Img:
        "https://images.pexels.com/photos/365810/pexels-photo-365810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      bananaQuantity: 200,

      fruit2: " Mango",
      fruit2Img:
        "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mangoQuantity: 50,
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>GREEN KIOSK</h1>
        <h> Welcome to {this.state.type1} </h>
        <p> {this.state.veg1}</p>
        <img src={this.state.veg1Img} alt="" />
        <p> Quantity {this.state.spinachQuantity} </p>
        <h> Welcome to {this.state.type1} </h>

        <p> {this.state.veg2}</p>
        <img src={this.state.veg2Img} alt="" />
        <p> Quantity {this.state.onionQuantity} </p>
        <h> Welcome to {this.state.type1} </h>
        <p> {this.state.veg3}</p>
        <img src={this.state.veg3Img} alt="" />
        <p> Quantity {this.state.carrotQuantity} </p>
        <h1> Welcome to {this.state.type2} </h1>
        <p> {this.state.fruit1}</p>
        <img src={this.state.fruit1Img} alt="" />
        <p> Quantity {this.state.bananaQuantity} </p>
        <h1> Welcome to {this.state.type2} </h1>
        <p> {this.state.fruit2}</p>
        <img src={this.state.fruit2Img} alt="" />
        <p> Quantity {this.state.mangoQuantity} </p>
      </div>
    );
  }
}

export default App;
