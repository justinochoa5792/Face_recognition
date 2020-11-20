import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

import Navigation from "./component/Navigation";
import Logo from "./component/Logo";
import FaceRecognition from "./component/FaceRecognition.jsx";
import ImageLinkForm from "./component/ImageLinkForm.jsx";
import Rank from "./component/Rank";

const app = new Clarifai.App({
  apiKey: "9da0c8a5c71c410d8eac0912319b0d72",
});

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
      imageUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        console.log(response);
      });
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

// "https://samples.clarifai.com/face-det.jpg"
