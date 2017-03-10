import React, {cloneElement} from 'react';

export default class Wizard extends React.Component {
  constructor(){
    super();
    this.state = {
      players: 0
    };
  }

  setPlayers(players) {
    this.setState({players: players.value});
  }

  render() {
    return(
      <div>
        {
          this.props.children && 
          cloneElement(this.props.children, { 
            setPlayers: this.setPlayers.bind(this), 
            manin: this.state
            })
        }
      </div>
    );
  }
}