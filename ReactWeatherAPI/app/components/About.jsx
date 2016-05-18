var React = require("react");

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className="text-center page-title">About this App</h3>
        <p>This app was created as a Front-End development project for FreeCodeCamp.  Here are some helpful links if you wish to see my first version of this weather app project, my full portfolio, or source code on GitHub.</p>
        <ul>
          <li>
            <a href="http://codepen.io/KingStilts/full/rxObeO/">
              OpenWeather API Part 1
            </a>
          </li>

          <li>
            <a href="http://codepen.io/KingStilts/full/xwYgdZ/">
            Ryan's Web Design Fun Shop
            </a>
          </li>

          <li>
            <a href="https://github.com/RyanO515/Intermediate-Front-End-Dev-Projects/tree/master/ReactWeatherAPI">ReactWeatherAPI Github Repo</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
