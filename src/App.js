import React, { Component } from "react";
import ImageCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  imageClick = id => {

  };

  cardShuffle(){

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <nav className="navbar sticky-top navbar-light bg-light">
          <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li>Click an image to begin!</li>
            <li>Score: 0 | Top Score: 0</li>
            </ul>
            </nav>
        <Title>Superfriends List</Title>
        {this.state.friends.map(friend => (
          <ImageCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            alias={friend.alias}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
