<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>
	</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra scelerisque sem eget vehicula. Fusce finibus, risus nec volutpat sodales, ipsum massa congue nisl, maximus eleifend elit mauris sed ex. Ut eget justo quis quam auctor aliquet. Cras euismod tincidunt nunc quis varius. Ut id erat eget est pharetra finibus. Proin iaculis condimentum erat varius lacinia. Vestibulum efficitur ligula sed dolor imperdiet, vel mattis dui convallis. Morbi elit diam, posuere in efficitur in, laoreet in nunc. Nullam a rutrum risus. Aliquam tellus sapien, imperdiet vitae sem sit amet, ultricies tempor risus. Aliquam mattis facilisis nisi eget euismod. In mollis arcu eget tellus pulvinar, pellentesque gravida magna aliquet. Nulla convallis lacinia ullamcorper. Nulla ut metus quis urna aliquet interdum. Fusce dignissim odio nunc, sed hendrerit neque bibendum ac. Praesent volutpat mi tincidunt lectus auctor, at tincidunt libero molestie.
	</p>

	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
