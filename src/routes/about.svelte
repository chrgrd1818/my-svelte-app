<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="content">
	<h1>About </h1>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra scelerisque sem eget vehicula. Fusce finibus, risus nec volutpat sodales, ipsum massa congue nisl, maximus eleifend elit mauris sed ex. Ut eget justo quis quam auctor aliquet. Cras euismod tincidunt nunc quis varius. Ut id erat eget est pharetra finibus. Proin iaculis condimentum erat varius lacinia. Vestibulum efficitur ligula sed dolor imperdiet, vel mattis dui convallis. Morbi elit diam, posuere in efficitur in, laoreet in nunc. Nullam a rutrum risus. Aliquam tellus sapien, imperdiet vitae sem sit amet, ultricies tempor risus. Aliquam mattis facilisis nisi eget euismod. In mollis arcu eget tellus pulvinar, pellentesque gravida magna aliquet. Nulla convallis lacinia ullamcorper. Nulla ut metus quis urna aliquet interdum. Fusce dignissim odio nunc, sed hendrerit neque bibendum ac. Praesent volutpat mi tincidunt lectus auctor, at tincidunt libero molestie.
	</p>
	<p>
		Ut viverra eleifend metus facilisis euismod. Fusce nec molestie arcu, a aliquet tortor. Pellentesque non massa massa. Nunc ultrices urna viverra dolor scelerisque placerat sed pretium erat. Nam vehicula nisl risus, eu tristique turpis eleifend eget. Sed vitae tristique arcu, at dapibus leo. Sed et ultrices purus.
	</p>
	<p>
		Vivamus sem neque, interdum finibus sem non, faucibus euismod sapien. Sed interdum est vitae nulla eleifend porta. Aenean eu purus eget est sagittis ultricies. Nulla pretium velit eu sollicitudin venenatis. Suspendisse pretium nec dui et semper. Etiam id mi in purus feugiat lobortis. Vestibulum blandit aliquet purus quis pellentesque. Donec quis tortor ex.
	</p>
</section>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
