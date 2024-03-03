<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { darkMode } from '../../../ThemeStore';
	import Header from '../../../components/Header.svelte';
	import { fade } from 'svelte/transition';

	export let data;
	let selected = 0;
	let carouselScroll = null;
	const { project, pageTitle } = data;

	function updateCarouselHeight() {
		const carousel = document.querySelector('.carousel-main-image-container');
		const carouselScroll = document.querySelector('.div-scroll');
		const description = document.querySelector('.description');
		if (carousel && carouselScroll && description) {
			const carouselHeight = `${carousel.offsetHeight + carouselScroll.offsetHeight}px`;
			console.log(carouselHeight);
			description.style.height = carouselHeight;
		}
	}

	function scrollCarousel(e) {
		if (scrollable) {
			scrollable.addEventListener(
				'wheel',
				(e) => {
					e.preventDefault();

					scrollable.scrollLeft += e.deltaY;
				},
				{ passive: false }
			);
		}
	}

	onMount(() => {
		document.title = pageTitle;

		carouselScroll = document.querySelector('.div-scroll');
		const handleWheel = (e) => {
			e.preventDefault();
			carouselScroll.scrollLeft += e.deltaY;
		};

		if (carouselScroll) {
			carouselScroll.addEventListener('wheel', handleWheel, { passive: false });
		}

		updateCarouselHeight();
		window.addEventListener('resize', updateCarouselHeight);

		return () => {
			window.removeEventListener('resize', updateCarouselHeight);

			if (carouselScroll) {
				carouselScroll.removeEventListener('wheel', handleWheel);
			}
		};
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
					<div class="carousel-main-image-container">
						{#if selected == 0}
							<iframe
								title="oui"
								width="420"
								height="315"
								class="carousel-main-image"
								src="https://www.youtube.com/embed/k-Gnb1XvS5k"
							>
							</iframe>
						{:else}
							{#key selected}
								<img
									src="/{project.screenshots[selected]}"
									class="carousel-main-image"
									alt="Logo du jeu"
									transition:fade={{ duration: 300 }}
								/>
							{/key}
						{/if}
					</div>
					<div class="div-scroll">
						{#each project.screenshots as screenshot, index (index)}
							<button
								class="carousel-image"
								on:click={() => {
									selectImage(index);
								}}
							>
								{#if index == 0}
									<img
										src="https://img.youtube.com/vi/k-Gnb1XvS5k/0.jpg"
										alt="{project.id} logo"
										style="width: 100%; height: 100%; aspect-ratio: 16 / 9; object-fit: cover;"
									/>

									{#if index == 0}
										<div class="icon-overlay" style="margin: 0;">
											<i class="ri-play-fill"></i>
										</div>
									{/if}
								{:else}
									<img
										src="/{screenshot}"
										alt="{project.id} logo"
										style="width: 100%; height: 100%; aspect-ratio: 16 / 9; object-fit: cover;"
									/>
								{/if}

								{#if index == selected}
									<div class="overlay" style="margin: 0;" />
								{/if}
							</button>
						{/each}
					</div>
				</div>
				<div class="description">
					<img
						src="/{project.image}"
						style="width: 100%; aspect-ratio: 16/9"
						alt="{project.name} title"
					/>
					<div class="description-description">
						<p>{project.description}</p>
						<p>{project.description}</p>
						<p>{project.description}</p>
						<p>{project.description}</p>
					</div>
					<a class="download-button" href="/CV.pdf">
						<i class="ri-download-2-line"></i>
						<span>Télécharger</span>
					</a>
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
		filter: drop-shadow(2px 2px 3px var(--light));
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
		margin-top: 0.25rem;
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
		align-items: stretch;
	}

	.carousel {
		max-width: 100%;
		overflow: auto;
	}

	.description {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between; /* Aligner les enfants le long de l'axe principal */
		width: 100%; /* Assurez-vous que la largeur correspond à vos besoins */
	}

	.description p {
		color: var(--black);
		font-size: 0.75rem;
		font-size: clamp(0.75rem, 3vw, 1.25rem);
	}

	.carousel-main-image-container {
		width: 100%;
		aspect-ratio: 16/9;
		position: relative;
	}

	.carousel-main-image {
		position: absolute;
		width: 100%;
		height: 100%;
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

	.download-button {
		color: #fff;
		background: var(--primary);
		padding: 10px 20px;
		border: none;
		box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
		border-radius: 8px;
		transition: background 0.15s ease-in-out;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 600;
		height: 2rem;
		justify-content: center;
		text-decoration: none;
		margin-top: 1rem;
		margin-right: 1rem;
		margin-bottom: 0.75rem;
	}

	.download-button i {
		margin-left: 0.25rem;
	}

	.download-button:hover {
		background: var(--primary-light);
	}

	.description-description {
		margin-top: 0.75rem;
		flex: 1;
		overflow: auto;
	}

	iframe {
		border: 0;
	}

	.icon-overlay {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100%;
		transition: 0.5s ease;
		color: white;
		font-size: 20px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-overlay i {
		color: white;
		font-size: 3rem;
		filter: drop-shadow(2px 2px 3px #000);
	}
</style>
