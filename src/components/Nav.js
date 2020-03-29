import React from 'react';
import { Link } from 'gatsby';
import NavStyles from './styles/NavStyles';

const Nav = () => (
	<NavStyles>
		<Link to="#projects">Projects</Link>
		<Link to="#about">About</Link>
		<Link to="#contact">Contact</Link>
	</NavStyles>
);

export default Nav;
