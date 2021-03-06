"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Register = React.createClass({
	getInitialState: function () {
        return {
            username: null,
            password: null,
            email: null
        };
    },
    userChangeHandler: function (event) {
        this.setState({username: event.target.value});
    },
    emailChangeHandler: function (event) {
        this.setState({email: event.target.value});
    },
    passwordChangeHandler: function (event) {
        this.setState({password: event.target.value});
    },
    formSubmitHandler: function (event) {
        event.preventDefault();
        console.log(this.state);
        var a = this.state;
            $.ajax({
                url : 'http://127.0.0.1:8000/api/v1/users/',
                type: 'POST',
                data: this.state,
                error: function(xhr, textStatus, errorThrown) {
					var json = JSON.parse(xhr.responseText);
					for (var prop in json) {
        			alert(prop+"  "+json[prop]);
   				 }
				}
            }).then(function (data) {
                $.ajax({
						url: 'http://127.0.0.1:8000/api/v1/login/',
						type: 'POST',
						data: {
							'username': a.username,
							'password': a.password,
						},
						success: function (data) {
							sessionStorage.setItem('authToken', data.token);
							window.location = '/#/main';
						}
					});
            });

    },

	render: function() {
		var moto={
                color: 'black',
				background: 'rgba(128, 255, 128, 0.35)',
                border: '1px solid green',
                borderRadius: '14px',
				position: 'center',
				width: '35%',
				margin: '0 auto',
				textAlign: 'center'
        };

		return (
			<div className="RegisterForm" style={moto}>
				<form>
                    <h1>Create a new account</h1>
                    <input placeholder="Username"
                           type="text"
                           name = "username"
                           onChange={this.userChangeHandler} /> <br /><br />
					<input placeholder="Email address"
                           type="text"
                           name = "emailAdress"
                           onChange={this.emailChangeHandler}/><br /> <br />
					<input placeholder="Password"
                           type="password"
                           name = "password"
                           onChange={this.passwordChangeHandler} /> <br /><br />
					<input type="Submit"
						   value="Sign Up"
						   onClick={this.formSubmitHandler}/><br />
                    By clicking Sign Up, you agree to our <Link to="terms">terms</Link> and that <br />
                    you have read our Data Policy, including our Cookie Use.<br />
				</form>
			</div>
		);
	}
});

module.exports = Register;
