var React = require('react');

var Navbar = React.createClass({

  render: function() {
    return (

      <div className='nav'>
          <h1>Navbar</h1>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
      </div>

    );

  }

});

module.exports = Navbar;
