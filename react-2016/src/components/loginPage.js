"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Login = React.createClass({
	getInitialState: function() {
          return {
            username:null,
            password:null
          }
        },

	userChangeHandler: function(event) {
            this.setState({username: event.target.value});
        },
	passwordChangeHandler: function(event) {
            this.setState({password: event.target.value});
        },
	formSubmitHandler: function(event) {
            event.preventDefault();
            console.log(this.state);
            $.ajax({
                url:'http://127.0.0.1:8000/api/v1/login/',
                type: 'POST',
                data: this.state,
                error: function(xhr, textStatus, errorThrown) {
                    var json = JSON.parse(xhr.responseText);
                    for (var prop in json) {
                        alert(prop + "  " + json[prop]);
                    }
                }
            }).then(function(data) {
              sessionStorage.setItem('authToken', data.token);
              window.location = '/#/main';
            })
        },

	render: function() {
        var moto={
                color: 'black',
				background: 'rgba(128, 255, 128, 0.35)',
                border: '1px solid green',
                borderRadius: '14px',
				position: 'center',
				width: '25%',
				margin: '0 auto',
				textAlign: 'center'
        };

		return (
			<div className="LoginForm" style={moto} >
				<form >
                    <h1>Sign in</h1>
					<input placeholder="Username"
						   type="text"
						   name="userName"
						   onChange={this.userChangeHandler}/> <br /><br />
					<input placeholder="Password"
						   type="password"
						   name="password"
						   onChange={this.passwordChangeHandler}/> <br /><br />
					<input type="Submit"
                           value="Login"
                           onClick={this.formSubmitHandler}/><br />Pentagram @ 2016<br />
				</form>
			</div>
		);
	}
});

module.exports = Login;