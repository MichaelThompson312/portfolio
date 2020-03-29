import React from 'react';
import '../styles/styles.scss';

import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const IndexPage = () => (
	<div>
		<Header />
		<Banner />
		<About />
		<Projects />
		<Contact />
	</div>
);

export default IndexPage;
