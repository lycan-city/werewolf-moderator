import React from 'react';
import { Link, browserHistory } from 'react-router';
import service from '../services/werewolf';

import Header from '../components/Header';

export default class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			deck: [],
			players: 0,
			mode: '', //TODO: Better way to do this
			currentCards: [],
			currentDeck: '',
		};

		this.rematch = this.rematch.bind(this);
	}

	componentWillMount() {
		const { players, mode, currentCards, currentDeck } = JSON.parse(localStorage.getItem('currentState')); console.log('currentDeck', currentDeck);
		const game = service.createGame(players, mode, currentCards, currentDeck);
		this.setState({ players, mode, currentCards, deck: game.deck, currentDeck });
	}

	rematch(){
		const game = service.createGame(this.state.players, this.state.mode, this.state.currentCards, this.state.currentDeck);
		const state = Object.assign({}, this.state, { deck: game.deck });
		this.setState(state);
	}

	render() {
		console.log('state', this.state);
		const cards = this.state.deck.map(c =>
			<div class="media" key={c.role}>
				<div class="media-left media-middle">
					<a href="#">
						<img class="media-object" src="https://dummyimage.com/85x85/000/fff" alt="..." />
					</a>
				</div>
				<div class="media-body">
					<h4 class="media-heading">{c.role}</h4>
					Total: <span>{c.amount}</span>
				</div>
			</div>
		);

		return (
			<div>
				<Header name="Game" />
				<div class="col-md-4 col-md-offset-4">
					<div class="panel panel-default ">
						<div class="panel-body">
							{cards}
						</div>
						<div class="panel-footer">
							<Link to="/" className="btn btn-default col-md-2 col-xs-12"><i class="fa fa-arrow-left" aria-hidden="true"></i></Link>
							<button onClick={this.rematch} className="btn btn-primary col-md-4 col-xs-12 col-md-offset-1"><i class="fa fa-refresh" aria-hidden="true"></i> Rematch</button>
							<Link to="screenplay" className="btn btn-success col-md-4 col-xs-12 col-md-offset-1"><i class="fa fa-book" aria-hidden="true"></i> Screenplay</Link>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}