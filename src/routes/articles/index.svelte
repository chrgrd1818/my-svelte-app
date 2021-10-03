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
	<ul>
		{#each articles as article (article._id)}
			<li class='article-{article._id}'>
				<span>{article.title}</span>
			</li>
	{/each}
	</ul>
</section>

<style>
	
</style>
