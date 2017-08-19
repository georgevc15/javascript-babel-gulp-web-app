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
	},

	renderUsers(users) {
		let elements = users.map( (user)  => {
			let { name, avatar } = user;
			return userTemplate(name, avatar);
		});

		let target = document.querySelector(".side-bar-content");
		target.innerHTML = elements.join("");
	}
}

let template = `<div class='active-avatar'>
					<img width="54" src="assests/avatar.jpg" />
					<h5 class="post-author">Sam</h5>
				</div>`;

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
