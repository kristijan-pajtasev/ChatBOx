var React = require("react");
var LoginActions = require("../Actions/LoginActions");

var LoginForm = React.createClass({displayName: "LoginForm",
	login: function() {
		console.log("login")
		LoginActions.login(this.refs.username.getDOMNode().value);
	},
	render: function() {
		return React.createElement("div", null, 
					React.createElement("input", {ref: "username"}), 
					React.createElement("button", {onClick: this.login}, "Login")
				)
	}
});

module.exports = LoginForm;