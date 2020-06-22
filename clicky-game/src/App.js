import React, { Component } from "react";
import avatar from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import "./App.css";

// shuffle upon click
function shuffleAvatars (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    avatar,
    currentScore: 0,
    topScore: 0,
    rightWrong: "Click an image to start",
    clickedAvatar: [],
  };

  handleClick = (id) => {
    // assign empty state array to let it be updated
    if (this.state.clickedAvatar.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clickedAvatar: this.state.clickedAvatar.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "Yip! Yip! You earned a point!",
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You've won!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Duplicated! Reset!",
      clickedAvatar: [],
    });
    this.handleShuffle();
  };

  // shuffle image
  handleShuffle = () => {
    let shuffledAvatars = shuffleAvatars(avatar);
    this.setState({ avatar: shuffledAvatars });
  };

  render() {
    return (
      <Wrapper>
        <Scoreboard
          title="Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Click on an image to earn points. Don't click on an image more than
          once or you will lose!
        </Title>

        <Container>
          <Row>
            {this.state.avatar.map (avatars => (
              <Column size="md-3 sm-6">
                <Card
                  key={avatars.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={avatars.id}
                  image={avatars.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
