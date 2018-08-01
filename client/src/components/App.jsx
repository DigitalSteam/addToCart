import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {},
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
        console.log(results);
        this.setState({
          game: results,
        });
      })
      .catch((err) => {
        console.log('error fetching game:', err);
      });
  }

  render() {
    return (
      <div>
        <div className="purchase_game_container">
          <div className="purchase_game_area">
            Buy {this.state.game.name}
          </div>
          <div className="purchase_platform"></div>
        </div>
        <div className="purchase_action_container">
          <div className="purchase_price">
            {this.state.game.price}
          </div>
          <div className="btn_addtocart">
            Add to Cart
          </div>
        </div>
      </div>
    );
  }
}

export default App;
