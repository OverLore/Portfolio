<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { darkMode } from '../../../ThemeStore';
	import Header from '../../../components/Header.svelte';
	import { fade } from 'svelte/transition';
	import Separator from '../../../components/Separator.svelte';
	import SkillContainer from '../../../components/SkillContainer.svelte';

	export let data;
	let selected = 0;
	let carouselScroll = null;
	const { project, pageTitle } = data;

	let links = [{ title: 'Accueil', id: '', href: '/', type: 'redirect', aria: 'Accueil' }];

	function updateCarouselHeight() {
		const carousel = document.querySelector('.carousel-main-image-container');
		const carouselScroll = document.querySelector('.div-scroll');
		const description = document.querySelector('.description');
		if (carousel && carouselScroll && description) {
			if (window.innerWidth <= 950) {
				description.style.height = null;
				return;
			}

			const carouselHeight = `${carousel.offsetHeight + carouselScroll.offsetHeight}px`;

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

<Header {links} mainButtonType="redirect" />
<div
	class="background-blur"
	style="background-image: linear-gradient(rgba({$darkMode ? 0 : 255}, {$darkMode
		? 0
		: 255}, {$darkMode ? 0 : 255}, {project.opacity}), rgba({$darkMode ? 0 : 255}, {$darkMode
		? 0
		: 255}, {$darkMode ? 0 : 255}, {project.opacity})), url('/{project.image}');"
/>
<main>
	<div class="mobile-image">
		<img
			src="/{project.image}"
			style="width: 100%; aspect-ratio: 16/9"
			alt="{project.name} title"
		/>
	</div>
	<div class="main-container">
		<div class="main-div">
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
						{#if project.screenshots[selected].type === 'video'}
							<iframe
								title="oui"
								class="carousel-main-image"
								src="https://www.youtube.com/embed/{project.screenshots[selected].link}"
							>
							</iframe>
						{:else}
							{#key selected}
								<img
									src={project.screenshots[selected].link}
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
								{#if screenshot.type === 'video'}
									<img
										src="https://img.youtube.com/vi/{screenshot.link}/0.jpg"
										alt="{project.id} logo"
										style="width: 100%; height: 100%; aspect-ratio: 16 / 9; object-fit: cover;"
									/>

									<div class="icon-overlay" style="margin: 0;">
										<i class="ri-play-fill"></i>
									</div>
								{:else}
									<img
										src={screenshot.link}
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
					<img class="description-image" src="/{project.image}" alt="{project.name} title" />
					<div class="description-description">
						<h2 class="description-description-title">{project.name}</h2>
						<div class="description-description-separator-1">
							<Separator marginTop="0.5rem" width="70%" />
						</div>
						<p class="description-description-description">{project.description}</p>
						<div class="description-description-separator-2">
							<Separator marginTop="0.5rem" width="2%" />
						</div>
						{#if project.infos != null}
							<div class="description-infos">
								<h3 style="text-align: center;">Informations</h3>
								{#each project.infos as info, index (index)}
									<div class="projet-info" style={index == 0 ? 'margin-top: 0.25rem;' : ''}>
										<h3>{info.title}</h3>
										<p>{info.value}</p>
									</div>
								{/each}
								<Separator marginTop="0.5rem" width="2%" />
							</div>
						{/if}
						{#if project.credits != null}
							<div class="description-credits">
								<h3>Crédits</h3>
								<ul style="margin-top: 0.25rem">
									{#each project.credits as credit}
										<li class={credit.linkedin === '' ? 'credit' : ''}>
											{#if credit.linkedin === ''}
												<span class="credit-name">{credit.name}</span> - {credit.role}
											{:else}
												<a href={credit.linkedin} target="_blank" title="Voir sur LinkedIn"
													><i class="ri-linkedin-box-fill"></i> {credit.name}</a
												>
												- {credit.role}
											{/if}
										</li>
									{/each}
								</ul>
								<Separator marginTop="2rem" width="2%" />
							</div>
						{/if}
						<h3 style="text-align: center; margin-top: 0.5rem;">Compétences travaillées</h3>
						<div class="techlist">
							{#each project.stack as skill}
								<SkillContainer
									size="40px"
									img="../../../skills-icons/{skill}.webp"
									alt="{skill} logo"
								/>
							{/each}
						</div>
					</div>
					<a
						class="download-button {project.link === '' ? 'disabled' : ''}"
						href={project.link}
						title={project.buttonTitle}
					>
						<i class={project.buttonTitleIcon}></i>
						<span>{project.buttonText}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="mobile-download-div">
		<a
			class="mobile-download-button {project.link === '' ? 'disabled' : ''}"
			href={project.link}
			title={project.buttonTitle}
		>
			<i class={project.buttonTitleIcon}></i>
			<span>{project.buttonText}</span>
		</a>
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

	.description-credits {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0.5rem;
		flex-direction: column;
	}

	.main-div {
		width: 100%;
	}

	.techlist {
		margin-top: 0.25rem;
		display: flex;
		gap: 10px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.75rem;
	}

	.projet-info {
		display: flex;
		justify-content: space-between;
	}

	.description-image {
		width: 100%;
		aspect-ratio: 16/9;
	}

	.description p {
		color: var(--black);
		font-size: 0.5rem;
		font-size: clamp(0.5rem, 2.5vw, 1rem);
	}

	.description h2 {
		color: var(--black);
		font-size: 1rem;
		font-size: clamp(1rem, 4vw, 1.5rem);
	}

	.description h3 {
		color: var(--black);
		font-size: 0.5rem;
		font-size: clamp(0.5rem, 2.5vw, 1rem);
	}

	ul {
		display: flex;
		flex-direction: column;
	}

	li {
		text-align: center;
		display: inline-block;
		color: var(--black);
		font-size: 0.3rem;
		font-size: clamp(0.3rem, 2vw, 0.85rem);
		margin-top: 0.15rem;
	}

	.credit {
		margin-top: 0.25rem;
	}

	.credit-name,
	li a {
		color: var(--primary);
		font-weight: bold;
	}

	li a i {
		font-size: 0.5rem;
		font-size: clamp(0.5rem, 2.5vw, 1rem);
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
		padding-inline: 4rem;
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

	.mobile-download-div {
		display: none;
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

	.download-button.disabled {
		background: #a9a9a9;
		color: #ffffff;
		cursor: not-allowed;
	}

	.description-description {
		margin-top: 0.75rem;
		flex: 1;
		overflow: auto;
		padding-right: 1rem;
	}

	.description-description-description {
		margin-top: 0.5rem;
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

	.mobile-image {
		display: none;
	}

	.description-infos {
		margin-top: 0.5rem;
	}

	@media screen and (max-width: 950px) {
		.main-container {
			margin-top: 1rem;
			display: flex;
			flex-direction: column;
			align-items: normal;
			justify-content: flex-start;
			padding-inline: 1rem;
			width: auto;
		}

		h1 {
			font-size: 1.5rem;
			margin-bottom: 0;
		}

		.description h3 {
			font-size: 1rem;
		}

		.mobile-image {
			display: block;
			margin-top: 3.5rem;
			width: auto;
		}

		main {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}

		.display {
			display: flex;
			flex-direction: column;
		}

		.carousel {
			order: 2;
			margin-top: 1rem;
		}

		.description {
			order: 1;
		}

		.description p {
			font-size: 1rem;
		}

		.description-image {
			display: none;
		}

		.description-description {
			overflow: visible;
			margin-top: 0;
		}

		.description-description-title,
		.description-description-separator-1,
		.description-credits {
			display: none;
		}

		.div-scroll {
			height: 75px;
		}

		.download-button {
			display: none;
		}

		.mobile-download-button {
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
			align-items: center;
			text-decoration: none;
			margin-top: 1rem;
			margin-right: 1rem;
			margin-bottom: 0.75rem;
			display: block;
		}

		.mobile-download-button i {
			margin-left: 0.25rem;
		}

		.mobile-download-button:hover {
			background: var(--primary-light);
		}

		.mobile-download-button.disabled {
			background: #a9a9a9;
			color: #ffffff;
			cursor: not-allowed;
		}

		.mobile-download-div {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 1rem;
		}
	}
</style>
