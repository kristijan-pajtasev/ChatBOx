var React = require("react");

var MessageForm = React.createClass({displayName: "MessageForm",
	render: function() {
		return React.createElement("div", null, 
					React.createElement("textarea", {ref: "message"}
					), 
					React.createElement("button", null, "Send")
				)
	}
});

module.exports = MessageForm;