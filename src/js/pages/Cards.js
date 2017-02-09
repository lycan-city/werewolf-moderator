import React from 'react';
import { Link, browserHistory } from 'react-router';

import Header from '../components/Header';

export default class Cards extends React.Component {
  render() {
    return (
      <div>
        <Header name="Cards" />
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <form class="form-horizontal">
                <div class="form-group ">
                  <div class="col-md-6 col-xs-12">
                    <div class="col-md-8 col-xs-6">
                      <input type="checkbox" /> Bodyguard
                    </div>
                    <div class="col-md-2  col-xs-6">
                      <input type="text" name="FirstName" value="2" readOnly size="1" />
                    </div>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <div class="col-md-8 col-xs-6">
                      <input type="checkbox" /> Virginia Woolf
                    </div>
                    <div class="col-md-2 col-xs-6">
                      <input type="text" name="FirstName" value="2" readOnly size="1" />
                    </div>
                  </div>
                </div>
                <div class="form-group ">
                  <div class="col-md-6 col-xs-12">
                    <div class="col-md-8 col-xs-6">
                      <input type="checkbox" /> Werewolf
                    </div>
                    <div class="col-md-2  col-xs-6">
                      <input type="text" name="FirstName" value="2" readOnly size="1" />
                    </div>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <div class="col-md-8 col-xs-6">
                      <input type="checkbox" /> Prince
                    </div>
                    <div class="col-md-2 col-xs-6">
                      <input type="text" name="FirstName" value="2" readOnly size="1" />
                    </div>
                  </div>
                </div>
                <div class="form-group ">
                  <div class="col-md-6 col-xs-12">
                    <div class="col-md-8 col-xs-6">
                      <input type="checkbox" /> Drunk
                    </div>
                    <div class="col-md-2  col-xs-6">
                      <input type="text" name="FirstName" value="2" readOnly size="1" />
                    </div>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <div class="col-md-8 col-xs-6">
                      <input type="checkbox" /> Cupid
                    </div>
                    <div class="col-md-2 col-xs-6">
                      <input type="text" name="FirstName" value="2" readOnly size="1" />
                    </div>
                  </div>
                </div>
                <div class="form-group ">
                  <div class="col-md-6 col-xs-12">
                    <div class="col-md-8 col-xs-6">
                      <input type="checkbox" /> Wild Child
                    </div>
                    <div class="col-md-2  col-xs-6">
                      <input type="text" name="FirstName" value="2" readOnly size="1" />
                    </div>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <div class="col-md-8 col-xs-6">
                      <input type="checkbox" /> Hunter
                    </div>
                    <div class="col-md-2 col-xs-6">
                      <input type="text" name="FirstName" value="2" readOnly size="1" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="panel-footer">
              <Link to={{pathname:"game", query:{type: "balanced"} }} className="btn btn-success pull-right col-md-4 col-xs-12 btn-space"><i class="fa fa-balance-scale" aria-hidden="true"></i> Start Balanced </Link>
              <Link to={{pathname:"game", query:{type: "chaos"} }} className="btn btn-danger pull-right col-md-4 col-xs-12 btn-space"><i class="fa fa-arrows" aria-hidden="true"></i> Start Chaos </Link>
              <button onClick={browserHistory.goBack} className="btn btn-default pull-left col-md-2 col-xs-12 btn-space"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
