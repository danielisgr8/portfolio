const projects = Array.from(document.querySelector(".project-list").children);
const descriptions = Array.from(document.querySelector(".descriptions").children);
const gifSrcs = descriptions.map((desc) => desc.querySelector("img").src);

projects.forEach((el, i) => {
	el.onclick = (event) => {
		event.preventDefault();

		descriptions.forEach((desc, j) => {
			if(j !== i) {
				desc.style.display = "none";
				desc.querySelector("img").src = "#";
			}
		});
		const oldDisplay = descriptions[i].style.display;
		const opening = oldDisplay === "none" || oldDisplay === "";
		let display, gifSrc;
		if(opening) {
			display = "block";
			gifSrc = gifSrcs[i];
		} else {
			display = "none";
			gifSrc = "#";
		}
		descriptions[i].style.display = display;
		descriptions[i].querySelector("img").src = gifSrc;
	};
});

