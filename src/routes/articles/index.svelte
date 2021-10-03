<script context="module">


	export const load = async ({ fetch }) => {
		const  res = await fetch('/articles.json');

		if (res.ok) {
			const articles = await res.json();
			//console.log('dest: ' + JSON.stringify(articles));
			return {
				props: { articles }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
		
	};

</script>
<script>

	export let articles;
	
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<section>
	<h1>News</h1>
	<div>
		{#each articles as article (article._id)}
			<div class='article-{article._id}'>
				<h2><a href='/'>{article.title}</a></h2>
				<div>{article.content}</div>
				<div>
					
					<span>{article.order}</span>
					<span>{article.picture}></span>
				</div>
				
			</div>
		{/each}
	</div>
</section>

<style>
	
</style>
