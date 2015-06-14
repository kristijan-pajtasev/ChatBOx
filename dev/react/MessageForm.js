var React = require("react");

var MessageForm = React.createClass({
	render: function() {
		return <div>
					<textarea ref="message">
					</textarea>
					<button>Send</button>
				</div>
	}
});

module.exports = MessageForm;