import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Projects from '../components/Projects';

const About = () => {
	const data = useStaticQuery(graphql`
		query {
			plant1: file(relativePath: { eq: "plant-universe-home.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
			plant2: file(relativePath: { eq: "plant-universe-cart.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<div id="about">
			<h2 className="section-header">About</h2>
			<div className="container">
				<p>
					My Name is muchael thompson. I like to cook, hangout with my family and build software applications
				</p>
			</div>
		</div>
	);
};

export default About;
