import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";

import Navigation from "./component/Navigation";
import Logo from "./component/Logo";
// import FaceRecognition from "./component/FaceRecognition.jsx";
import ImageLinkForm from "./component/ImageLinkForm.jsx";
import Rank from "./component/Rank";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (e) => {
    console.log(e.targe.value);
  };

  onSubmit = () => {
    console.log("submit");
  };

  render() {
    return (
      <div>
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
