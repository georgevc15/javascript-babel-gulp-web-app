
let ui = {
	renderPosts(posts) {
		//console.log( posts );
		
		let elements = posts.map( (post)  => {
			return articleTemplate;
		});

		let target = document.querySelector(".container");
		target.innerHTML = elements.join("");
	}
}


let articleTemplate = `
<article class="post">
		<h2 class="post-title">
				Nimeni nu se multumeste cu averea pe care o are, dar fiecare e multumit de inteligenta sa. 
		</h2>
		<p class="post-meta">Tolstoi</p>
		</article>
`;

export default ui;
