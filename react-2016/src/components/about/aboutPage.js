"use strict";

var React = require('react');

var About = React.createClass({
	render: function () {
		var stil={
                color: 'black',
				background: 'rgba(128, 255, 128, 0.52)',
                border: '1px solid green',
                borderRadius: '14px',
				position: 'center',
				margin: '0 auto'
        };
		return (
			<div style={stil}>
				<h1>About</h1>
				<p>
					What is Pentagram?
					<br />
					Pentagram is a fun and quirky way to share your life with friends through a series of pictures. Snap a photo with your mobile phone, then choose a filter to transform the image into a memory to keep around forever. We're building Pentagram to allow you to experience moments in your friends' lives through pictures as they happen. We imagine a world more connected through photos.
					<br /><br />
					How much is your app?
					<br />
					$0.00 - available for free in the Apple App Store and Google Play store.
				</p>
			</div>
		); 
	}
});

module.exports = About;