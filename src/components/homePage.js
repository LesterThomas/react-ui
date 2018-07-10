'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Drone Management</h1>
        <p>Drone control and telemetry using Flyt APIs.</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }
});

module.exports = Home;
