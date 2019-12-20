import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ImageCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import jluimages from "./jluimages.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    jluimages: jluimages,
    currentScore: 0,
    topScore: 0,
    clicked: []
  };

  shuffle = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  shuffleImages = event => {
    let id = parseInt(event.target.id);
    let jluimages = this.shuffle(this.state.jluimages);
    this.setState({ jluimages });
  }

  // Map over this.state.friends and render a ImageCard component for each JSON object
  render() {
    return (
      <div>
        <NavBar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Wrapper>
          <Title>Superfriends Image Game
        <br />
            <h5>Get 1 Point for Clicking Each Image Once</h5>
            <h5>Avoid Clicking Any Image Twice</h5>
          </Title>
          {this.state.jluimages.map(img => (
            <ImageCard
              shuffleImages={this.shuffleImages}
              id={img.id}
              key={img.id}
              name={img.name}
              image={img.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
