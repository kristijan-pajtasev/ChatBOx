var React = require("react");
var MessageForm = require("./MessageForm");
var MessagesList = require("./MessagesList");
var LoginForm = require("./Login/LoginForm");

var MessageActions = require("./Actions/MessageActions");
var Emitter = require("./Emitter");

var MessagesStore = require("./Stores/MessagesStore");

var Chat = React.createClass({displayName: "Chat",
	getInitialState: function() {
		Emitter.on("MESSAGES_RECEIVED", this.showMessages);
		Emitter.on("LOGIN", this.setUsername);
		MessageActions.get();
		return { messages: [] };
	},
	showMessages: function() {
		var messages =  MessagesStore.get();
		this.setState({ messages: messages });
		MessageActions.get();
	},
	setUsername: function(payload) {
		this.setState({ username: payload.username });
	},
	render: function() {
		if(!this.state.username) {
			return React.createElement(LoginForm, null)
		}
		return React.createElement("div", null, 
					React.createElement(MessagesList, {messages: this.state.messages}), 

					React.createElement(MessageForm, {username: this.state.username})
				)
	}
});

module.exports = Chat;