var React = require("react");
var LoginActions = require("../Actions/LoginActions");

var LoginForm = React.createClass({
	login: function() {
		LoginActions.login(this.refs.username.getDOMNode().value);
	},
	render: function() {
		return <div>
					<input ref="username" />
					<button onClick={this.login}>Login</button>
				</div>
	}
});

module.exports = LoginForm;