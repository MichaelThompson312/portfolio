import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	font-size: 1.5em;
	text-align: center;
	color: black;
`;

const CustomLink = styled.a`
	text-decoration: none;
	color: red;
	font-weight: 500;
`;

const Item = styled.div`
	width: 600px;
	background-color: rgba(165, 186, 164, 0.3);
	padding: 50px;
	margin: 0 auto;
	border-radius: 5px;
	transition: 0.3s;
	&:hover {
		transition: 0.5s ease-out;
		background-color: rgba(165, 186, 164);
		border-radius: 15px;
		width: 620px;
		box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.75);
	}
	@media (max-width: 1200px) {
		width: 95%;
		margin: 0 auto;
		padding: 15px;
	}
	img {
		max-width: 90%;
		margin: 0 auto;
	}
`;

export default class ProjectItem extends Component {
	render() {
		return (
			<Item className="project-item">
				<Title>{this.props.title}</Title>
				<div className="project-images">
					{this.props.images.map((_image) => <img src={_image} key={_image} alt={this.props.title} />)}
				</div>
				<img src={this.props.image} />
				<p>{this.props.description}</p>
				<a target="blank" href={this.props.sourceCode}>
					Source Code
				</a>
				<p>Technologies Used:</p>
				<ul>{this.props.tech.map((_item) => <li key={_item}>{_item}</li>)}</ul>
			</Item>
		);
	}
}
