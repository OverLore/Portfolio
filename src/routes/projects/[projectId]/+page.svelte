<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { darkMode } from '../../../ThemeStore';
	import Header from '../../../components/Header.svelte';

	export let data;
	let selected = 0;
	const { project, pageTitle } = data;

	onMount(() => {
		document.title = pageTitle;
	});

	const selectImage = (index) => {
		selected = index;
	};
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
					<img src="/{project.screenshots[selected]}" style="width: 100%; aspect-ratio: 16/9" />
					<div class="div-scroll">
						{#each project.screenshots as screenshot, index (index)}
							<button
								class="carousel-image"
								on:click={() => {
									selectImage(index);
								}}
							>
								<img
									src="/{screenshot}"
									alt="{project.id} logo"
									style="width: 100%; height: 100%; aspect-ratio: 16 / 9;"
								/>
								{#if index == selected}
									<div class="overlay" style="margin: 0;" />
								{/if}
							</button>
						{/each}
					</div>
				</div>
				<div class="description">
					<img src="/{project.image}" style="width: 100%; aspect-ratio: 16/9" />
					<p>{project.description}</p>
				</div>
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

	.overlay {
		position: absolute;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(130, 0, 0, 0.8) 100%);
		color: #f1f1f1;
		width: 100%;
		height: 100%;
		transition: 0.5s ease;
		color: white;
		font-size: 20px;
		text-align: center;
	}

	.carousel-image {
		height: 100%;
		aspect-ratio: 16/9;
		cursor: pointer;
		position: relative;
		border: 0px;
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
		font-size: clamp(1rem, 4vw, 3rem);
		display: inline-block;
		margin-bottom: 1rem;
	}

	p {
		margin-top: 0.75rem;
		color: var(--black);
		font-size: 0.75rem;
		font-size: clamp(0.75rem, 3vw, 1.25rem);
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
		overflow-y: hidden;
		width: 100%;
		white-space: nowrap;
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
