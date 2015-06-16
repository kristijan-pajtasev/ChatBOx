var React = require("react");

var LoginForm = React.createClass({displayName: "LoginForm",
	render: function() {
		return React.createElement("div", null, 
					React.createElement("input", {ref: "username"}), 
					React.createElement("button", null, "Login")
				)
	}
});

module.exports = LoginForm;