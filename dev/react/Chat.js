var React = require("react");
var MessageForm = require("./MessageForm");
var MessagesList = require("./MessagesList");

var MessageActions = require("./Actions/MessageActions");
var Emitter = require("./Emitter");

var MessagesStore = require("./Stores/MessagesStore");

var Chat = React.createClass({
	getInitialState: function() {
		Emitter.on("MESSAGES_RECEIVED", this.showMessages);
		MessageActions.get();
		return { messages: [] };
	},
	showMessages: function() {
		var messages =  MessagesStore.get();
		this.setState({ messages: messages });
		MessageActions.get();
	},
	render: function() {
		return <div>
					<MessagesList messages={this.state.messages} />

					<MessageForm />
				</div>
	}
});

module.exports = Chat;