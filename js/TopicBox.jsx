var React = require('react');
var Topic = require('./Topic.jsx');

var TopicBox = React.createClass({
  getInitialState: function() {
    return {
      topics: [
        {
          topicTitle: "Spanish books?",
          topicPosted: new Date(),
          topicText: "Does anyone have any?",
          topicStarter: "Colin",
          replies: [
            {
              replyText: "I have a lot of them!",
              author: "Stevie",
              replyPosted: new Date()
            },
            {
              replyText: "Borrow mine anytime.",
              author: "Susie",
              replyPosted: new Date()
            }
          ],
          views: 4
        },
        {
          topicTitle: "Look at this cool verb!",
          topicPosted: new Date(),
          topicText: "The verb いる in Japanese is 'to be' but just for animate things!",
          topicStarter: "Stevie",
          replies: [
            {
              replyText: "So cool.",
              author: "Susie",
              replyPosted: new Date()
            },
            {
              replyText: "Just the coolest!",
              author: "Colin",
              replyPosted: new Date()
            },
            {
              replyText: "Glad you guys like it!",
              author: "Stevie",
              replyPosted: new Date()
            }
          ],
          views: 100
        }
      ]
    }
  },

  render: function() {
    var topicNodes = this.state.topics.map(function(topic) {
      return (
        <Topic topicTitle={topic.topicTitle}
                topicPosted={topic.topicPosted}
                topicText={topic.topicText}
                topicStarter={topic.topicStarter}
                replies={topic.replies}
                views={topic.views} />
      );
    });

    return (
      <table>
        <thead>
          <th>Topic</th>
          <th>Date Posted</th>
          <th>Topic Starter</th>
          <th>Replies</th>
          <th>Views</th>
          <th>Last Post</th>
        </thead>
        <tbody>
          {topicNodes}
        </tbody>
      </table>
    );
  }
});

module.exports = TopicBox;
