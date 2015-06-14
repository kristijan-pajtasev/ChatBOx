var React = require("react");

var MessagesList = React.createClass({displayName: "MessagesList",
	render: function() {
		return (React.createElement("ul", null, 
					React.createElement("li", null, "Message")
				));
	}
});

module.exports = MessagesList;