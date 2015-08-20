var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (
      <ul>
        <li>
          <a href="dummyForum">Forum</a>
        </li>
        <li>
          <a href="dummyMembers">Members</a>
        </li>
        <li>
          <a href="dummyAbout">About</a>
        </li>
        <li>
          <a href="dummySearch">Search</a>
        </li>
      </ul>
    );
  }
});

module.exports = Navbar;
