<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { darkMode } from '../../../ThemeStore';
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
	style="background-image: linear-gradient(rgba({$darkMode ? 0 : 255}, {$darkMode
		? 0
		: 255}, {$darkMode ? 0 : 255}, {project.opacity}), rgba({$darkMode ? 0 : 255}, {$darkMode
		? 0
		: 255}, {$darkMode ? 0 : 255}, {project.opacity})), url('/{project.image}');"
/>
<main>
	<div class="main-container">
		<div style="width: 100%;">
			<h1 class="gradient-text">{project?.name}</h1>
			<div
				class="display"
				style="background: linear-gradient(rgba({$darkMode ? 0 : 255}, {$darkMode
					? 0
					: 255}, {$darkMode ? 0 : 255}, 0), rgba({$darkMode ? 0 : 255}, {$darkMode
					? 0
					: 255}, {$darkMode ? 0 : 255}, 255));"
			>
				<div class="carousel">
					<img src="/{project.image}" style="width: 100%; aspect-ratio: 16/9" />
					<div class="div-scroll">
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
						<img src="/{project.image}" style="height: 100%; aspect-ratio: 16/9" />
					</div>
				</div>
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
		background-color: var(--light);
	}

	.div-scroll {
		display: flex;
		flex-direction: row;
		gap: 5px;
		height: 100px;
		overflow-x: scroll;
		width: 100%;
		white-space: nowrap;
	}

	.div-scroll::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, transparent 0%, red 100%);
	}

	.display {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-column-gap: 1rem;
	}

	.carousel {
		max-width: 100%;
		overflow: auto;
	}

	.description {
	}

	*::-webkit-scrollbar {
		height: 10px;
		width: 10px;
	}

	*::-webkit-scrollbar-track {
		background-color: var(--light);
		transition: all 0.3s ease-in-out;
	}

	*::-webkit-scrollbar-track:hover {
		background-color: var(--light);
	}

	*::-webkit-scrollbar-track:active {
		background-color: var(--light);
	}

	*::-webkit-scrollbar-thumb {
		background-color: var(--primary);
		transition: all 0.3s ease-in-out;
	}

	*::-webkit-scrollbar-thumb:hover {
		background-color: var(--primary-light);
	}

	*::-webkit-scrollbar-thumb:active {
		background-color: var(--primary-darken);
	}
</style>
