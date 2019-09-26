const spotifyDemos = [
	{
		"title": "Spotify Song Range",
		"gifLink": "https://danielschubert.dev/gifs/spotify-song-range.gif",
		"demoLink": "./spotify-song-range/",
		"githubLink": "https://github.com/danielisgr8/spotify-song-range",
		"points": [
			"Set start and end times for your 20 most recent liked songs. The server will skip to the start time and skip past the end time.",
			"Front-end: JavaScript with React",
			"Back-end: Node.js with Express",
			"Designed a REST API for authenticating, getting liked songs, and setting and clearing song ranges",
			"Emphasized architecture in the back-end by separating the REST API, HTTP requests to Spotify, utility functions, and commind-line argument parsing into separate modules.",
			"Utilized toasts (Toastify) to notify the user of successful changes"
		]
	},
	{
		"title": "Playlist Art",
		"gifLink": "https://danielschubert.dev/gifs/playlist-art.gif",
		"demoLink": "./playlist-art/",
		"githubLink": "https://github.com/danielisgr8/Playlist-Art",
		"points": [
			"Create art based on the album art of songs in a playlist",
			"Front-end: TypeScript",
			"Back-end: Node.js in TypeScript",
			"Developed my own recursive algorithm for placing squares of random size in a larger square",
			"Utilized local storage to track user authentication between sessions",
			"Converted code from JavaScript to TypeScript to allow for stronger typing and abstraction",
			"Utilized the WebSocket protocol for communication between server and client"
		]
	},
	{
		"title": "Spotify Tracker",
		"gifLink": "./gifs/spotify-tracker.gif",
		"demoLink": "./spotify-tracker/",
		"githubLink": "https://github.com/danielisgr8/Spotify-Tracker",
		"points": [
			"View your top song and artists over different time periods and analyze how frequently you 'Like' songs",
			"Front-end: JavaScript",
			"Back-end: Node.js",
			"First project interfacing with Spotify",
			"Leveraged Chart.js to allow analysis of a user's Liked Songs",
			"Utilized WebSockets to facilitate back-and-forth communicating of server and client"
		]
	},
];

const sections = [
	{
		"title": "Spotify Demos",
		"notes": [
			"Note: If any errors or long requests are encountered, navigating back to the given project's login page should fix the issue.",
			"Note: All of the below demos requires a Spotify account (ideally with songs and playlists in their library)."
		],
		"projects": spotifyDemos
	},
	{
		"title": "Other Projects",
		"projects": [
			{
				"title": "Spotify Console",
				"gifLink": "./gifs/spotify-console.gif",
				"githubLink": "https://github.com/danielisgr8/Spotify-Console",
				"points": [
					"View current song, pause/play, and view progress all within a Linux terminal",
					"Language: C (with Curl to send requests to Spotify, a JSON parser to parse responses, and ncurses to render the player)",
					"Programmed an HTTP server from scratch for authorizing with Spotify",
					"Separated source files to optimize use of make",
					"Wrote all logic for making the border wrap the terminal, calculating and displaying progress, centering the title and artist, and updating the state of paused/playing"
				]
			},
			{
				"title": "Portfolio",
				"gifLink": "./gifs/reverse-proxy.png",
				"githubLink": "https://github.com/danielisgr8/portfolio",
				"points": [
					"What you're looking at right now!",
					"Implemented a reverse proxy system for running demos (each demo is locally running on a separate port)",
					"Emphasized semantic versioning and detailed changelogs (refer to GitHub repo)"
				]
			},
			{
				"title": "Adventurous Art",
				"gifLink": "./gifs/adventurous-art.png",
				"points": [
					"A drawing social media app",
					"Done as in a group project class with 3 other students",
					"Placed in top 3 best projects out of 52",
					"Personally voted 1 of 13 best coders out of 199 students",
					"Implemented real-time collaborative drawing using WebSockets",
					"Incorporated the Met API to allow users to trace over artwork (picture 4)",
					"Designed a large portion of general UI look and logic",
					"Worked in an Agile environment"
				]
			}
		]
	},
];

const ProjectLink = ({title, onClick}) => (
	<p className="demo-link" onClick={() => onClick()}>{title}</p>
)

const Description = ({title, gifLink, demoLink, githubLink, points}) => {
	const links = demoLink || githubLink
		? (
			<div className="links">
				{demoLink ? <h3><a href={demoLink}>Demo</a></h3> : null}
				{githubLink ? <h3><a href={githubLink}>GitHub</a></h3> : null}
			</div>)
		: null;

	return (
		<div className="description">
			<h2>{title}</h2>
			{gifLink ? <img src={gifLink} /> : null}
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

const App = () => {
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
		{project ? <Description {...project} /> : null}
		</>
	);
};

ReactDOM.render(<App />, document.querySelector(".app"));

