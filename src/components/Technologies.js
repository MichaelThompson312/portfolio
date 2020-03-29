import React from 'react';
import Slider from 'infinite-react-carousel';
import Icon from '@mdi/react';
import {
	mdiMicrosoftAzure,
	mdiReact,
	mdiDotNet,
	mdiLanguageJava,
	mdiLanguageJavascript,
	mdiGraphql,
	mdiGit,
	mdiGithub,
	mdiLanguageHtml5,
	mdiLanguageCsharp,
	mdiGatsby,
	mdiJquery,
	mdiWordpress,
	mdiNpm,
	mdiNodejs,
	mdiLanguagePython
} from '@mdi/js';

const Technologies = () => (
	<div className="tech-slider">
		<Slider
			slidesPerRow={8}
			rows={1}
			autoplaySpeed={8000}
			adaptiveHeight={true}
			arrows={false}
			shift={0}
			centerPadding={50}
		>
			<div>
				<Icon path={mdiReact} size={6} color="#5ED3F4" />
			</div>
			<div>
				<Icon path={mdiMicrosoftAzure} size={6} color="#0075CE" />
				<p>React JS</p>
			</div>
			<div>
				<Icon path={mdiDotNet} size={6} color="#651F77" />
				<p>React JS</p>
			</div>
			<div>
				<Icon path={mdiLanguageJava} size={6} />
				<p>React JS</p>
			</div>
			<div>
				<Icon path={mdiLanguageJavascript} size={6} color="#F0DB4F" />
				<p>React JS</p>
			</div>
			<div>
				<Icon path={mdiGraphql} size={6} color="#E434AB" />
				<p>React JS</p>
			</div>
			<div>
				<Icon path={mdiGit} size={6} color="#F04F33" />
			</div>
			<div>
				<Icon path={mdiGithub} size={6} />
			</div>
			<div>
				<Icon path={mdiLanguageHtml5} size={6} color="#E34F26" />
			</div>
			<div>
				<Icon path={mdiLanguageCsharp} size={6} color="#651F77" />
			</div>
			<div>
				<Icon path={mdiGatsby} size={6} color="#341F64" />
			</div>
			<div>
				<Icon path={mdiJquery} size={6} color="#0967AC" />
			</div>
			<div>
				<Icon path={mdiWordpress} size={6} color="#1F7297" />
			</div>
			<div>
				<Icon path={mdiNpm} size={6} color="#C60001" />
			</div>
			<div>
				<Icon path={mdiNodejs} size={6} color="#7CB801" />
			</div>
			<div>
				<Icon path={mdiLanguagePython} size={6} color="#0967AC" />
			</div>
		</Slider>
	</div>
);

export default Technologies;
