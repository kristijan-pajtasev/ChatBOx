var React = require("react");
var MessageActions = require("./Actions/MessageActions");

var MessageForm = React.createClass({
	sendMessage: function() {
		var message = this.refs.message.getDOMNode().value;
		this.refs.message.getDOMNode().value = "";
		MessageActions.send(this.props.username, message);
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