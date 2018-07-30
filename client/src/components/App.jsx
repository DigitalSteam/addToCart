import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: [],
    };
  }

  componentDidMount() {
    this.getGame();
  }

  getGame() {
    axios.get(`http://localhost:3002/api/game/:${gameId}`)
      .then(results => this.setState({ game: results.data }))
      .catch(err => console.log('error fetching game: ', err));
  }

  render() {
    return (
      <div>
        <Game game={this.state.game} />
      </div>
    );
  }
}

export default App;
