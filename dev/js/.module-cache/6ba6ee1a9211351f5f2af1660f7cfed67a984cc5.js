var React = require("react");
var MessageForm = require("react");

var Chat = React.createClass({displayName: "Chat",
	render: function() {
		return React.createElement("div", null, 
					React.createElement("ul", null, 
						React.createElement("li", null
						)
					), 
					React.createElement(MessageForm, null)
					
				)
	}
});

module.exports = Chat;