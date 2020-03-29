import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class Projects extends Component {
	render() {
		return (
			<div id="projects">
				<h2 className="section-header">Projects</h2>
				<div className="project-items">
					<ProjectItem
						title="Plant Universe"
						sourceCode="https://github.com/MichaelThompson312/plant-universe"
						images={[
							'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-home_fwpglt.png' //,
							//'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-add-itm_zvz0nq.png',
							//'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-cart_etrs8c.png'
						]}
						description="Plant Universe"
						tech={[ 'React.JS', 'Apollo Client', 'GraphQL', 'Prisma', 'Next.js' ]}
					/>

					<ProjectItem
						title="Sandwhich Managment"
						sourceCode="https://github.com/MichaelThompson312/SandwhichShopManagment"
						images={[
							'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-home_fwpglt.png'
							//'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-add-itm_zvz0nq.png',
							//'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-cart_etrs8c.png'
						]}
						description="Sandwhich Managment"
						tech={[ '.NET', 'Microsoft SQL Server', 'ASP.NET MVC' ]}
					/>

					<ProjectItem
						title="Chat App"
						sourceCode="https://github.com/MichaelThompson312/ChatApp"
						images={[
							'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-home_fwpglt.png' //,
							//'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-add-itm_zvz0nq.png',
							//'https://res.cloudinary.com/dedumrltv/image/upload/v1585152039/Portfolio/plant-universe-cart_etrs8c.png'
						]}
						description="Chat Application"
						tech={[ 'React.JS', 'Firebase' ]}
					/>

					<ProjectItem
						title="Note Application"
						sourceCode="https://github.com/MichaelThompson312/EvernoteClone"
						images={[
							'https://res.cloudinary.com/dedumrltv/image/upload/v1585152038/Portfolio/note-app_tan4o5.png'
						]}
						description="Plant Universe"
						tech={[ 'React.JS', 'Firebase', 'Firestore' ]}
					/>
					<ProjectItem
						title="Weather Application"
						sourceCode="https://github.com/MichaelThompson312/Weather"
						images={[
							//'https://res.cloudinary.com/dedumrltv/image/upload/v1585439630/Portfolio/weather-app-rain_l2eykt.png' //,
							'https://res.cloudinary.com/dedumrltv/image/upload/v1585439630/Portfolio/weather-app-sun_bej5ch.png'
						]}
						description="Plant Universe"
						tech={[ 'React.JS', 'Open Weather API' ]}
					/>
					<ProjectItem
						title="Recipe Database Application"
						sourceCode="https://github.com/MichaelThompson312/EvernoteClone"
						images={[
							'https://res.cloudinary.com/dedumrltv/image/upload/v1585432816/Portfolio/recipe-app_fesifr.png'
						]}
						description="Plant Universe"
						tech={[ 'React.JS', '' ]}
					/>
				</div>
			</div>
		);
	}
}
