var React = require("react");
var MessageForm = require("./MessageForm");
var MessagesList = require("./MessagesList");
var LoginForm = require("./Login/LoginForm");

var MessageActions = require("./Actions/MessageActions");
var Emitter = require("./Emitter");

var MessagesStore = require("./Stores/MessagesStore");

var Chat = React.createClass({
	getInitialState: function() {
		Emitter.on("MESSAGES_RECEIVED", this.showMessages);
		Emitter.on("LOGIN", this.setUsername);
		return { messages: [] };
	},
	showMessages: function() {
		var messages =  MessagesStore.get();
		this.setState({ messages: messages });
		MessageActions.get();
	},
	setUsername: function(payload) {
		this.setState({ username: payload.username });
		MessageActions.get();
	},
	render: function() {
		if(!this.state.username) {
			return <LoginForm />
		}
		return <div>
					<MessagesList messages={this.state.messages} />

					<MessageForm username={this.state.username} />
				</div>
	}
});

module.exports = Chat;