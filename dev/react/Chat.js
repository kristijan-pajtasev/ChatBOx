var React = require("react");
var MessageForm = require("./MessageForm");
var MessagesList = require("./MessagesList");

var Chat = React.createClass({
	render: function() {
		return <div>
					<MessagesList />

					<MessageForm />
				</div>
	}
});

module.exports = Chat;