const spotifyDemos = [
	{
		"title": "Spotify Song Range",
		"demoLink": "./spotify-song-range/",
		"gifLink": "https://danielschubert.dev/gifs/spotify-song-range.gif",
	},
	{
		"title": "Playlist Art",
		"demoLink": "./playlist-art/",
		"gifLink": "https://danielschubert.dev/gifs/playlist-art.gif"
	},
	{
		"title": "Spotify Tracker",
		"demoLink": "./spotify-tracker/",
		"gifLink": "https://danielschubert.dev/gifs/spotify-tracker.gif",
	},
];

const ProjectLink = ({title, onClick}) => (
	<p className="demo-link" onClick={() => onClick()}>{title}</p>
)

const Description = ({title, gifLink, demoLink}) => (
	<div>
		<h2>{title}</h2>
		<img src={gifLink} />
		<a href={demoLink}><h2>Demo</h2></a>
	</div>
);

const App = () => {
	/*
	 If project === -1, no description will be shown.
	 Otherwise, the description represented by spotifyDemos[project] will be shown.
	*/
	const [project, setProject] = React.useState(-1);

	const projects = spotifyDemos.map((demo, i) => (
		<li key={demo.title}><ProjectLink title={demo.title} onClick={() => setProject(project === i ? -1 : i)} /></li>
	));

	return (
		<>
		<div className="projects">
			<h2>Project Demos</h2>
			<div className="notes">
                                <p>Note: If any errors or long requests are encountered, navigating back to the given project's login page should fix the issue.</p>
                                <p>Note: All of the below demos requires a Spotify account (ideally with songs and playlists in their library).</p>
                        </div>
			<ul className="project-list">
				{projects}
                        </ul>
                </div>
                <div className="description">
			{project >= 0 ? <Description {...spotifyDemos[project]} /> : null}
		</div>
		</>
	);
};

ReactDOM.render(<App />, document.querySelector(".app"));

