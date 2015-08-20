var React = require('react');
var Header = require('./Header.jsx');
var Navbar = require('./Navbar.jsx');
var TopicBox = require('./TopicBox.jsx');
var Footer = require('./Footer.jsx');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <Header />
        <Navbar />
        <TopicBox />
        <Footer />
      </main>
    )
  }
})

React.render(<App />, document.body);
