import React, {cloneElement} from 'react';
import werewolfService from '../services/werewolf';


export default class Wizard extends React.Component {
  constructor(){
    super();
    this.state = {
      players: 0,
      currentDeck: '',
    };
  }

  setPlayers(players) {
    this.setState(Object.assign({}, this.state, players));
  }

  setCurrentDeck(currentDeck){
    this.setState(Object.assign({}, this.state, currentDeck));
  }

  render() {
    return(
      <div>
        {
          this.props.children && 
          cloneElement(this.props.children, { 
            setPlayers: this.setPlayers.bind(this),
            state: this.state,
            decks: Object.keys(werewolfService.getDecks()),
            })
        }
      </div>
    );
  }
}