import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Jumbotron from "./components/Jumbotron";
import Scorecard from "./components/Scorecard";

// Function to shuffle order of images
  function shuffleFriends(array) {
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
    return array;
};

class App extends React.Component{ 
    
  state = {
    friends,
    score: 0,
    message: "",
    clicked: []
  };
  
  // Click handle
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // Increment
  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      message: "Nice Work!",
      message2: ""
    });   
    this.handleShuffle();
  };

  // Reset
  handleReset = () => {
    this.setState({
      score: 0,
      message: "",      
      message2: "NOPE! You already clicked that one. Try Again.",
      clicked: [],      
    });
    this.handleShuffle();
  };

  // Shuffle
  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

render() {
  return(
    <div>
      <Jumbotron>            
      Click an image to earn points, but don't click the same one twice!
      </Jumbotron>

      <Scorecard
      title = "SCORE:"
      number={this.state.score} 
      message={this.state.message}
      message2={this.state.message2} 
      />

      <Wrapper>
      {friends.map(
      (friend) => {
      return (     
      <FriendCard      
      id={friend.id}
      image={friend.image}
      handleClick={this.handleClick}
      handleIncrement={this.handleIncrement}
      handleReset={this.handleReset}
      handleShuffle={this.handleShuffle}
      key={friend.id}      
      />      
    )
  }
)}
      </Wrapper>
    </div>  
  )
}

// End extend components
}
export default App;
