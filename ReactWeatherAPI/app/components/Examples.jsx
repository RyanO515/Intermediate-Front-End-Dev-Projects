var React = require("react");
var {Link} = require("react-router");

var Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className="text-center page-title">Examples</h3>
        <p>Try out a few examples to fetch some weather: </p>
        <ol>
          <li>
            <Link to="/?location=Richmond">Richmond, VA</Link>
          </li>
          <li>
            <Link to="/?location=London">London, UK</Link>
          </li>
          <li>
            <Link to="/?location=San Franscisco, CA">San Fransisco, CA</Link>
          </li>
        </ol>
      </div>

    );
  }
});

module.exports = Examples;
