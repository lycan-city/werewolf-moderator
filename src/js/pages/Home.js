import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
    <div>
      <div class="text-center">
        <h1>Werewolf Moderator</h1>
      </div>
      <hr />
      <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-body">
          <form class="form-horizontal">
            <div class="form-group col-md-12">
              <label class="control-label" for="players">Players</label>
              <input id="players" name="players" type="number" class="form-control input-md" placeholder="0" required="" />
            </div>
            <div class="form-group col-md-12">
              <label class="control-label" for="deck">Deck</label>
              <div class="">
                <select id="deck" name="deck" class="form-control">
                  <option value="0">None</option>
                  <option value="1">Basic</option>
                  <option value="2">Novice</option>
                  <option value="3">Amateur</option>
                  <option value="4">Wolfpack</option>
                  <option value="5">Competent</option>
                  <option value="6">Vampire</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="panel-footer">
          <div class="col-md-12">
            <Link to="cards" className="btn btn-success btn-block">Next  <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
          </div>
          <hr />
          <div class="col-md-12">
            <Link to={{pathname:"game", query:{type: "chaos"} }} className="btn btn-default col-md-4 pull-left"><i class="fa fa-arrows" aria-hidden="true"></i> Quick Chaos</Link>
            <Link to={{pathname:"game", query:{type: "balanced"} }} className="btn btn-default col-md-4 pull-right"><i class="fa fa-balance-scale" aria-hidden="true"></i> Quick Balanced</Link>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      </div>
</div>
);
  }
}