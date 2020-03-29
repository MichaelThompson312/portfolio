import { Link } from 'gatsby';
import React from 'react';

import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.h1`
	font-size: 4rem;
	margin-left: 2rem;
	position: relative;
	z-index: 2;
	transform: skewX(-5deg);
	a {
		padding: 0.5rem 1rem;
		color: white;
		text-decoration: none;
	}
	@media (max-width: 1300px) {
		margin: 0;
		font-size: 2.5rem;
		text-align: center;
	}
`;

const StyledHeader = styled.header`
	.bar {
		background-color: darkgreen;
		border-bottom: 10px solid darkseagreen;
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link to="/">Michael Thompson</Link>
			</Logo>
			<Nav />
		</div>
	</StyledHeader>
);

export default Header;
