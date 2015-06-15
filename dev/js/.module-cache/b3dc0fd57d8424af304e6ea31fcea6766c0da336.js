var React = require("react");

var MessagesList = React.createClass({displayName: "MessagesList",
	render: function() {
		return (React.createElement("ul", null, 
					this.props.messages.map(function(m) { return React.createElement("li", {key: new Date().getTime() * Math.random()}, m.sender, ": ", m.message) })
				));
	}
});

module.exports = MessagesList;