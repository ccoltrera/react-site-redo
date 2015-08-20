var React = require('react');

var Topic = React.createClass({
  showTopic: function() {
    this.setState({
      showing: true
    });
  },

  getInitialState: function() {
    return {
      showing: false
    };
  },

  render: function() {
    return (
      <tr>
        <td><a href="dummyTopic">{this.props.topicTitle}</a></td>
        <td>{this.props.topicPosted.toString()}</td>
        <td>{this.props.topicStarter}</td>
        <td><a href="dummyReply">{this.props.replies.length}</a></td>
        <td>{this.props.views}</td>
        <td>{this.props.replies[this.props.replies.length -1].replyPosted.toString()} by {this.props.replies[this.props.replies.length -1].author}</td>
      </tr>
    );
  }
});

module.exports = Topic;
