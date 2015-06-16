var React = require("react");

var LoginForm = React.createClass({displayName: "LoginForm",
	render: function() {
		return React.createElement("div", null, 
					React.createElement("input", {ref: "username"}), 
					React.createElement("button", {onClick: this.login}, "Login")
				)
	}
});

module.exports = LoginForm;