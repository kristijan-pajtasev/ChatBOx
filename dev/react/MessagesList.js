var React = require("react");

var MessagesList = React.createClass({
	render: function() {
		return (<ul>
					{this.props.messages.map(function(m) { return <li>{m.sender}: {m.message}</li> })}
				</ul>);
	}
});

module.exports = MessagesList;