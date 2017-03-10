import React from 'react';
import { Link, browserHistory } from 'react-router';

import Header from '../components/Header';

export default class Game extends React.Component {
  render() {
	  const card = (
		  <div class="media">
			  <div class="media-left media-middle">
				  <a href="#">
					  <img class="media-object" src="https://dummyimage.com/85x85/000/fff" alt="..." />
				  </a>
			  </div>
			  <div class="media-body">
				  <h4 class="media-heading">Bodyguard</h4>
				  Total: 1
			  </div>
		  </div>
	  );

	  const cards = [card, card, card, card];
    return (
		<div>
			<Header name="Game" />
			<div class="col-md-4 col-md-offset-4">
				<div class="panel panel-default ">
					<div class="panel-body">
						{cards}
					</div>
					<div class="panel-footer">
						<Link to="screenplay" className="btn btn-success pull-right col-md-6 col-xs-12"><i class="fa fa-book" aria-hidden="true"></i> Screenplay</Link>
						<button onClick={browserHistory.goBack} class="btn btn-default pull-left col-md-4 col-xs-12"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}