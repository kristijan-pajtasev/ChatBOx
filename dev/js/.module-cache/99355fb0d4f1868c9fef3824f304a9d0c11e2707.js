var React = require("react");

var MessagesList = React.createClass({displayName: "MessagesList",
	render: function() {
		return (React.createElement("ul", null, 
					this.props.messasges.map(function(m) { return React.createElement("li", null, m.sender, ": ", m.mesage) })
				));
	}
});

module.exports = MessagesList;