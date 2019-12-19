import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ImageCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import jluimages from "./jluimages.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    jluimages
  };

  imageClick = id => {

  };

  cardShuffle() {

  };

  // Map over this.state.friends and render a ImageCard component for each JSON object
  render() {
    return (
      <div>
        <NavBar 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        />
        <Wrapper>
        <Title>Superfriends Image Game</Title>
        {this.state.jluimages.map(friend => (
          <ImageCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            alias={friend.alias}
            location={friend.location}
          />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
