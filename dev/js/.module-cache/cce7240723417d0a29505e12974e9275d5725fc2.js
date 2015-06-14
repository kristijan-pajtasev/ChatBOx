var React = require("react");

var Chat = React.createClass({displayName: "Chat",
	render: function() {
		return React.createElement("div", null, 
					React.createElement("ul", null, 
						React.createElement("li", null
						)
					), 

					React.createElement("textarea", {ref: "message"}
					), 
					React.createElement("button", null, "Send")
				)
	}
});

module.exports = Chat;