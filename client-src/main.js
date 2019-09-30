const ProjectLink = ({title, onClick}) => (
	<p className="demo-link" onClick={() => onClick()}>{title}</p>
)

const Description = ({title, imgSrc, demoLink, repoLink, points}) => {
	const links = demoLink || repoLink
		? (
			<div className="links">
				{demoLink ? <h3><a href={demoLink}>Demo</a></h3> : null}
				{repoLink ? <h3><a href={repoLink}>GitHub</a></h3> : null}
			</div>)
		: null;

	return (
		<div className="description">
			<h2>{title}</h2>
			{imgSrc ? <img src={imgSrc} /> : null}
			{links}
			<ul>
				{points.map((point, i) => <li key={i}>{point}</li>)}
			</ul>
		</div>
	);
}

const Section = ({title, notes, projects, setProject}) => {
	const noteEls = notes
		? <div className="notes">{notes.map((note, i) => <p key={i}>{note}</p>)}</div>
		: null;

	const projectEls = projects
		? (
			<ul className="project-list">
				{projects.map((project, i) => (
					<li key={project.title}><ProjectLink title={project.title} onClick={() => setProject(project)} /></li>))}
			</ul>)
		: null;

	return (
		<div className="section">
			<h2>{title}</h2>
			{noteEls}
			{projectEls}
		</div>
	);
};

const App = ({sections}) => {
	/*
	 `null` if no project should be displayed.
     Otherwise, an JSON representation of a project.
	*/
	const [project, setProject] = React.useState(null);

	return (
		<>
		<div className="projects">
			{sections.map((section) => (
				<Section key={section.title} {...section} setProject={(clicked) => { if(!project || clicked.title !== project.title) setProject(clicked); else setProject(null); }} />
			))}
		</div>
		{project ? <Description {...project} /> : <div className="empty-description"><p>Click on a project to learn more</p></div>}
		</>
	);
};

ReactDOM.render(<App sections={sections} />, document.querySelector(".app"));

