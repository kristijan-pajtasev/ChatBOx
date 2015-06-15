var React = require("react");
var MessageActions = require("./Actions/MessageActions");

var MessageForm = React.createClass({
	sendMessage: function() {
		console.log("sendMessage");
		var message = this.refs.message.getDOMNode().value;
		console.log("Message: " + message)
		this.refs.message.getDOMNode().value = "";
		MessageActions.send("Me", message);
	},
	render: function() {
		return <div>
					<textarea ref="message">
					</textarea>
					<button onClick={this.sendMessage}>Send</button>
				</div>
	}
});

module.exports = MessageForm;