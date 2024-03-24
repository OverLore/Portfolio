<script>
	// @ts-nocheck
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { scrollToSection } from '../scrollUtils';
	import { darkMode } from '../ThemeStore';

	let activeSection = '/';

	let isMenuOpen = false;

	let remSize = 16;
	let offset = 3.5 * remSize;

	export let mainButtonType;
	export let links = [];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;

		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	const socialLinks = [
		{
			href: 'https://www.linkedin.com/in/luc-arnould/',
			iconClass: 'ri-linkedin-box-line',
			aria: 'Linkedin'
		},
		{ href: 'https://github.com/OverLore/', iconClass: 'ri-github-line', aria: 'GitHub' },
		{ href: 'https://www.tiktok.com/@_scottii/', iconClass: 'ri-tiktok-line', aria: 'Tiktok' },
		{
			href: 'https://www.youtube.com/channel/UCYaQhULOHO684SKERsnf9nw/',
			iconClass: 'ri-youtube-line',
			aria: 'YouTube'
		},
		{
			href: 'https://www.instagram.com/lucarnould/',
			iconClass: 'ri-instagram-line',
			aria: 'Instagram'
		}
	];

	function handleSwitchDarkMode() {
		$darkMode = !$darkMode;

		localStorage.setItem('theme', $darkMode ? 'dark' : 'light');

		$darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	function handleLinkClick(event, sectionId) {
		event.preventDefault();
		scrollToSection(sectionId);
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			$darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			$darkMode = false;
		}
	}

	onMount(() => {
		function checkIfSectionReached() {
			remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
			offset = 3.5 * remSize;

			const sections = links
				.slice(1)
				.map((link) => ({ id: link.id.substring(1), route: link.id }))
				.reverse();

			activeSection = '/';

			for (let section of sections) {
				const sectionElement = document.getElementById(section.id);
				if (sectionElement) {
					const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY - offset;
					if (window.scrollY >= sectionTop - 1) {
						activeSection = section.route;
						break;
					}
				}
			}
		}

		if ($page.url.pathname === '/') {
			window.addEventListener('scroll', checkIfSectionReached);
			checkIfSectionReached();
		}

		return () => {
			if ($page.url.pathname === '/') {
				window.removeEventListener('scroll', checkIfSectionReached);
			}
		};
	});
</script>

<header class:menu-open={isMenuOpen}>
	<div class="container">
		<div class="logo-wrapper">
			{#if mainButtonType == 'scroll'}
				<a
					class="logo-container"
					href="/"
					aria-label="Accueil"
					on:click|preventDefault={(event) => handleLinkClick(event)}
				>
					<svg
						version="1.2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 994 911"
						width="36"
						height="36"
						class="icon"
						style={'color: var(--black)'}
					>
						<title>arnould_poll_logo-svg</title>
						<path
							id="Layer"
							fill-rule="evenodd"
							class="title-svg"
							style={'fill: var(--black)'}
							d="m853.9 717.2c-43.4-63-169-87-274-84-395.8 52.4-356 269-491 275-37.4 3-86.5-21.6-88-104-3-109.5 89.8-329.5 661-316 150 14.9 186 145 192 229z"
						/>
						<path
							id="Layer"
							fill-rule="evenodd"
							class="title-svg"
							style={'fill: var(--black)'}
							d="m394.9 0.2c51 0 50-1 104 2 132 10.5 175 151 175 151 0 0 83 242 146 398-61.4-82.5-150-83.5-171-85-21-1.5-93 1-93 1l-105-260c0 0-108.5 258-119 285-184 40-246 96-295 153 6.4-19.7 187-493 187-493 0 0 34.6-149 171-152z"
						/>
						<path
							id="Layer"
							fill-rule="evenodd"
							class="title-svg"
							style={'fill: var(--primary)'}
							d="m632.9 656.2c163 7 212.5 63.5 250 153-2.5-76.5-6.5-99.5-11-130 61.5 170 122 230 122 230 0 0-81.5 1-189 1-99-11-112-80-112-80 0 0-52.5-149.5-60-174z"
						/>
					</svg>
					<span class="logo-text">Luc Arnould</span>
				</a>
			{:else}
				<a class="logo-container" href="/" aria-label="Accueil">
					<svg
						version="1.2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 994 911"
						width="36"
						height="36"
						class="icon"
						style={'color: var(--black)'}
					>
						<title>arnould_poll_logo-svg</title>
						<path
							id="Layer"
							fill-rule="evenodd"
							class="title-svg"
							style={'fill: var(--black)'}
							d="m853.9 717.2c-43.4-63-169-87-274-84-395.8 52.4-356 269-491 275-37.4 3-86.5-21.6-88-104-3-109.5 89.8-329.5 661-316 150 14.9 186 145 192 229z"
						/>
						<path
							id="Layer"
							fill-rule="evenodd"
							class="title-svg"
							style={'fill: var(--black)'}
							d="m394.9 0.2c51 0 50-1 104 2 132 10.5 175 151 175 151 0 0 83 242 146 398-61.4-82.5-150-83.5-171-85-21-1.5-93 1-93 1l-105-260c0 0-108.5 258-119 285-184 40-246 96-295 153 6.4-19.7 187-493 187-493 0 0 34.6-149 171-152z"
						/>
						<path
							id="Layer"
							fill-rule="evenodd"
							class="title-svg"
							style={'fill: var(--primary)'}
							d="m632.9 656.2c163 7 212.5 63.5 250 153-2.5-76.5-6.5-99.5-11-130 61.5 170 122 230 122 230 0 0-81.5 1-189 1-99-11-112-80-112-80 0 0-52.5-149.5-60-174z"
						/>
					</svg>
					<span class="logo-text">Luc Arnould</span>
				</a>
			{/if}
			<input
				type="checkbox"
				id="hamburger-checkbox"
				class="hamburger-checkbox"
				on:click={toggleMenu}
			/>
			<label for="hamburger-checkbox" class="hamburger" aria-label="Menu">
				<div class="bar"></div>
				<div class="bar"></div>
				<div class="bar"></div>
			</label>
		</div>
		<div class="navigation-main" class:menu-open={isMenuOpen}>
			<nav class="main-nav">
				<ul class="main-link-list roboto-medium">
					{#each links as { title, id, href, type, aria }}
						<li>
							{#if type === 'scroll'}
								<a
									aria-label={aria}
									{href}
									class:active={activeSection === id}
									on:click|preventDefault={(event) => handleLinkClick(event, id.slice(1))}
								>
									{title}
								</a>
							{:else}
								<a aria-label={aria} {href} class:active={activeSection === id}>
									{title}
								</a>
							{/if}
						</li>
					{/each}
				</ul>
			</nav>
			<div class="social-container">
				<ul class="main-social-list">
					{#each socialLinks as { href, iconClass, aria }}
						<li class="social-icon">
							<a aria-label={aria} {href} target="_blank">
								<i class={iconClass}></i>
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="more-btns">
				<div class="theme-switcher">
					<button
						class="theme-button"
						aria-label={$darkMode ? 'Mode Clair' : 'Mode Sombre'}
						on:click={() => handleSwitchDarkMode()}
					>
						<i class={$darkMode ? 'ri-moon-line' : 'ri-sun-line'}></i>
					</button>
				</div>
				<div class="separation">
					<i class="ri-separator separator"></i>
				</div>
				<div class="call-to-action">
					<a
						class="contact-button"
						href="/CV.pdf"
						download="CV ARNOULD Luc.pdf"
						aria-label="Télécharger le CV"
					>
						<i class="ri-download-2-line"></i>
						<span class="cv-title">CV</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	header {
		height: 3.5rem;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		font-family: 'Roboto';
		box-shadow: rgba(255, 255, 255, 0.16) 0px 1px 4px;
		backdrop-filter: var(--nav-filter);
		transition:
			background-color 0.15s ease-in-out,
			border-bottom 0.15s ease-in-out,
			height 0.3s ease-in-out;
		z-index: 1000;
		border-bottom: var(--light) solid 1px;
		background-color: var(--header-background-color);
	}

	.more-btns {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.container {
		display: flex;
		width: 100%;
		align-items: center;
		max-width: 80rem;
		margin-top: 0.55rem;
		padding-left: 1rem;
		padding-right: 1rem;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.logo-wrapper {
		align-items: center;
		display: flex;
		flex: 0 1;
		height: 100%;
		justify-content: space-between;
	}

	.navigation-main {
		align-items: center;
		display: flex;
		flex: 1 1;
		flex-direction: row;
		gap: 0.5rem;
		left: inherit;
		padding: 0;
		position: static;
		top: inherit;
		z-index: inherit;
		width: 100%;
		justify-content: space-between;
	}

	.logo-text {
		margin-left: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
		white-space: nowrap;
	}

	.main-nav {
		flex-grow: 1;
		margin-left: 2rem;
	}

	.main-link-list {
		gap: 1rem;
		align-items: center;
		display: flex;
	}

	ul,
	li {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	ul {
		display: flex;
		flex-direction: row;
	}

	header.menu-open {
		height: calc(100vh - env(safe-area-inset-bottom));
	}

	a {
		text-decoration: none;
		color: var(--black);
	}

	.social-container li {
		font-size: 1.5rem;
	}

	.main-social-list {
		gap: 0.5rem;
		align-items: center;
	}

	.main-social-list a,
	.main-link-list a {
		transition: color 0.15s ease-in-out;
	}

	.main-link-list a.active {
		color: var(--primary);
	}

	.main-social-list a:hover,
	.main-link-list a:hover {
		color: var(--primary-light);
	}

	.social-container,
	.links-container {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.logo-container {
		display: flex;
		align-items: center;
	}

	.contact-button {
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
		font-size: 0.8rem;
		font-weight: 600;
	}

	.contact-button i {
		margin-left: 0.25rem;
		font-size: 1rem;
	}

	.contact-button:hover {
		background: var(--primary-light);
	}

	.theme-button {
		border: 0;
		padding: 0;
		margin: 0;
		background: transparent;
		font-size: 1.5rem;
		cursor: pointer;
		transition: color 0.15s ease-in-out;
		color: var(--black);
		margin-left: 1rem;
	}

	.theme-button:hover {
		color: var(--primary-light);
	}

	.separator {
		color: var(--black);
		opacity: 0.25;
		margin-inline: 0.25rem;
	}

	.hamburger-checkbox {
		display: none;
	}

	.hamburger {
		display: none;
		right: 1rem;
		border: none;
		background-color: transparent;
		cursor: pointer;
		flex-direction: column;
		justify-content: space-around;
		width: 1rem;
		height: 0.8rem;
	}

	.hamburger .bar {
		height: 2px;
		width: 100%;
		background-color: white;
		transition: all 0.3s ease;
	}

	.hamburger-checkbox:checked + .hamburger .bar:nth-child(1) {
		transform: translateY(4px) rotate(45deg);
	}

	.hamburger-checkbox:checked + .hamburger .bar:nth-child(2) {
		opacity: 0;
	}

	.hamburger-checkbox:checked + .hamburger .bar:nth-child(3) {
		transform: translateY(-4px) rotate(-45deg);
	}

	.cv-title {
		font-size: 1rem;
	}

	.more-btns {
		gap: 0.5rem;
	}

	.separation i {
		font-size: 1.5rem;
	}

	@media screen and (max-width: 1085px) {
		.logo-text {
			margin-left: 0.5rem;
			font-size: 1.5rem;
		}

		.main-link-list a {
			font-size: 0.85rem;
		}

		.contact-button {
			padding: 10px 20px;
			border-radius: 8px;
			font-size: 0.8rem;
		}

		.contact-button i {
			margin-left: 0.2rem;
			font-size: 1rem;
		}

		.theme-button {
			font-size: 1.5rem;
		}

		.social-container li {
			font-size: 1.2rem;
		}

		.main-social-list {
			gap: 0.3rem;
			align-items: center;
		}

		.main-link-list {
			gap: 0.75rem;
		}
	}

	@media screen and (max-width: 950px) {
		.hamburger {
			display: flex;
		}

		header {
			overflow: hidden;
		}

		.navigation-main {
			position: fixed;
			top: 0%;
			left: 50%;
			transform: translate(-50%, -100%);
			width: auto;
			height: calc(100vh - env(safe-area-inset-bottom));
			flex-direction: column;
			display: none;
			display: flex;
			align-items: center;
			transition: transform 0.2s ease-in-out;
		}

		.navigation-main.menu-open {
			transform: translate(-50%, 0%);
		}

		.main-nav {
			margin-left: 0;
			order: 1;
			flex-grow: 0;
		}

		.main-link-list {
			flex-direction: column;
		}

		.main-link-list a {
			font-size: 1.5rem;
		}

		.social-container a {
			font-size: 1.5rem;
		}

		.separation i {
			font-size: 1rem;
		}

		.contact-button i {
			font-size: 1rem;
		}

		.theme-button {
			margin-left: 0;
		}

		.theme-button i {
			font-size: 1.5rem;
		}

		.social-container {
			order: 2;
			margin-bottom: 50px;
		}

		.more-btns {
			margin-top: 4rem;
			order: 0;
			gap: 0.5rem;
		}

		.cv-title {
			font-size: 1rem;
			margin-right: 0.5rem;
		}

		.logo-wrapper {
			flex: 1 1;
		}
	}
</style>
