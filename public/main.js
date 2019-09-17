const projects = Array.from(document.querySelector(".project-list").children);
const descriptions = Array.from(document.querySelector(".descriptions").children);

projects.forEach((el, i) => {
	el.onmouseover = (event) => {
		descriptions[i].style.display = "initial";
	};
	el.onmouseout = (event) => {
		descriptions[i].style.display = "none";
	};
});

