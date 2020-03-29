import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export default class Contact extends Component {
	render() {
		return (
			<div id="contact">
				<h2 className="section-header">Contact Me</h2>
				<h3>Contact Links</h3>
				<ul>
					<li>
						<Icon name="github square" />
						<a target="blank" href="https://github.com/MichaelThompson312">
							Github
						</a>
					</li>
					<li>
						<Icon name="linkedin square" />
						<a target="blank" href="https://www.linkedin.com/in/michael-thompson-665621152/">
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
