import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: [],
      currentGame: 1,
    };
    // this.getGame = this.getGame(this.state.currentGame);
  }

  componentDidMount() {
    this.getGame(1);
  }

  getGame(gameId) {
    fetch(`/api/games/${gameId}`)
      .then(response => response.json())
      .then((results) => {
        // console.log(results);
        this.setState({
          game: results.data,
        });
      })
      .catch((err) => {
        console.log('error fetching game:', err);
      });
  }

  render() {
    return (
      <div className="block" id="buy">
        <div className="block_header">
         <div game={this.state.game} />
        </div>
      </div>
    );
  }
}

export default App;
