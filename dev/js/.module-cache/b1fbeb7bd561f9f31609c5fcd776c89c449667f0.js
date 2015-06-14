var React = require("react");

var MessagesList = React.createClass({displayName: "MessagesList",
	render: function() {
		return React.createElement("div", null, 
					React.createElement("textarea", {ref: "message"}
					), 
					React.createElement("button", null, "Send")
				)
	}
});

module.exports = MessagesList;