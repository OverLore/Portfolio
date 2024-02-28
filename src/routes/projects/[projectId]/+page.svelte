<script>
	import { onMount } from 'svelte';
	import Header from '../../../components/Header.svelte';

	export let data;
	const { project, pageTitle } = data;

	onMount(() => {
		document.title = pageTitle;
	});
</script>

<Header />
<div
	class="background-blur"
	style="background-image: linear-gradient(rgba(0, 0, 0, {project.opacity}), rgba(0, 0, 0, {project.opacity})), url('/{project.image}');"
/>
<main>
	<div class="main-container">
		<div style="width: 100%;">
			<h1 class="gradient-text">{project?.name}</h1>
			<div class="display">
				<div class="carousel"></div>
				<div class="description"></div>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		position: relative;
		display: flex;
		justify-content: center;
		min-height: 100vh;
		z-index: 1;
	}

	.main-container {
		margin-top: 3.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 80rem;
		width: 100%;
	}

	.gradient-text {
		background: #db0f13;
		background: -webkit-linear-gradient(to right, #d85f13, #db0f13);
		background: linear-gradient(to right, #d85f13, #db0f13);
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}

	h1 {
		color: var(--primary);
		font-size: 80;
	}

	p {
		color: var(--black);
		font-size: 80;
	}

	.background-blur {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-image: url('/{project.image}');
		background-size: cover;
		background-position: center;
		filter: blur(10px);
		z-index: -1;
		background-color: black;
	}

	.display {
		height: 400px;
		width: 100%;
		background-color: aliceblue;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-column-gap: 1rem;
	}

	.carousel {
		background-color: red;
	}

	.description {
		background-color: blue;
	}
</style>
