import React, { Component } from "react";
import avatar from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

// shuffle upon click
function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    avatar,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedAvatar: []
  };

  clickedImage = id => {
    // assign empty state array to let it be updated
    let clickedAvatar = this.state.clickedAvatar;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState ({
      showAlert: 0
    });

    // if image is clicked, id indexed avatar
    if (clickedAvatar.indexOf(id) === -1) {
      // push id into that id into array to be stored
      clickedAvatar.push(id);
      console.log(clickedAvatar);
      this.handleIncrement();
      this.makeShuffle();
      
    }else if (this.state.score === 8) {
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedAvatar: []
      });
    } else {
      // alert player loss
      this.setState({
        score: 0,
        clickedAvatar: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState ({
        topScore: score
      });
    }
  };

  handleIncrement = () => {
    this.setState ({ score: this.state.score + 1});
  };

  // shuffle image
  makeShuffle = () => {
    this.setState ({ avatar: shuffle(avatar) });  
  };

  render () {
    return (
      <div className="container">
        <div 
        className="alert alert-success"
        style={{ opacity: this.state.showAlert}}>
          You clicked this one already, please try again
          </div>
      <div className="alert alert-primary"
      style={{ opacity: this.state.showSuccess }}>
        Excelsior! You haven't clicked any duplicates!
        </div>
      <Scoreboard 
       title="Avatar: The Last Airbender Clicky Game"
       score= {this.state.score}
       topScore= {this.state.topScore}/>
      <div className="row">
        {this.state.avatar.map(avatars => (
          <Card
          key= {avatars.id}
          id= {avatars.id}
          title= {avatars.title}
          image= {avatars.image}
          clickedImage= {this.clickedImage} />
        ))}
        </div>
        </div>
    );
  }
}

export default App;