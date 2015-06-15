var React = require("react");
var MessageForm = require("./MessageForm");
var MessagesList = require("./MessagesList");

var Chat = React.createClass({
	getInitialState: function() {
		return { messages: [] };
	},
	render: function() {
		return <div>
					<MessagesList messages={this.state.messages} />

					<MessageForm />
				</div>
	}
});

module.exports = Chat;