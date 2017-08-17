import xss from "xss-filters";

let ui = {
	renderPosts(posts) {
		//console.log( posts );
		
		let elements = posts.map( (post)  => {
			let { title, author } = post;
			return articleTemplate(title, author);
		});

		let target = document.querySelector(".container");
		target.innerHTML = elements.join("");
	}
}


function  articleTemplate(title, author) {
	let saveTitle = xss.inHTMLData(title);
	let safeAuthor = xss.inHTMLData(author);

	let template = `<article class="post">
			<h2 class="post-title">
					${saveTitle}
			</h2>
			<p class="post-meta">
				${safeAuthor}
				</p>
			</article>`;

			return template;
};

export default ui;
