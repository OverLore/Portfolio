<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { scrollToSection } from '../scrollUtils';

	let darkMode = true;
	let activeSection = '/';

	let remSize = 16;
	let offset = 3.5 * remSize;

	let links = [
		{ title: 'Accueil', id: '/', href: '/' },
		{ title: 'Presentation', id: '/presentation', href: '#presentation' },
		{ title: 'Web', id: '/web-skills', href: '#web-skills' },
		{ title: 'Software', id: '/software-skills', href: '#software-skills' },
		{ title: 'Jeux', id: '/game-skills', href: '#game-skills' },
		{ title: 'Projects', id: '/projects', href: '#projects' },
		{ title: 'Parcours', id: '/experience', href: '#experience' }
	];

	const socialLinks = [
		{ href: 'https://www.linkedin.com/in/luc-arnould/', iconClass: 'ri-linkedin-box-line' },
		{ href: 'https://github.com/OverLore/', iconClass: 'ri-github-line' },
		{ href: 'https://www.tiktok.com/@_scottii/', iconClass: 'ri-tiktok-line' },
		{
			href: 'https://www.youtube.com/channel/UCYaQhULOHO684SKERsnf9nw/',
			iconClass: 'ri-youtube-line'
		},
		{ href: 'https://www.instagram.com/lucarnould/', iconClass: 'ri-instagram-line' }
	];

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	/**
	 * @param {{ preventDefault: () => void; }} event
	 * @param {string|null=} sectionId
	 */
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
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
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

<header>
	<nav>
		<div class="links-container">
			<a
				class="logo-container"
				href="/"
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
			<ul class="main-link-list roboto-medium">
				{#each links as { title, id, href }}
					<li>
						<a
							{href}
							class:active={activeSection === id}
							on:click|preventDefault={(event) => handleLinkClick(event, id.slice(1))}
						>
							{title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="social-container">
			<ul class="main-social-list">
				{#each socialLinks as { href, iconClass }}
					<li>
						<a {href} target="_blank">
							<i class={iconClass}></i>
						</a>
					</li>
				{/each}
				<li>
					<button
						class="theme-button"
						style="margin-left: 1rem;"
						on:click={() => handleSwitchDarkMode()}
					>
						<i class={darkMode ? 'ri-moon-line' : 'ri-sun-line'}></i>
					</button>
				</li>
				<li>
					<i class="ri-separator separator"></i>
				</li>
				<li>
					<a class="contact-button" href="/CV.pdf" download="CV ARNOULD Luc.pdf">
						<i class="ri-download-2-line"></i>
						<span style="font-size: 1rem;">CV</span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	header {
		height: 3.5rem;
		display: flex;
		align-items: center;
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
			border-bottom 0.15s ease-in-out;
		z-index: 1000;
		border-bottom: var(--light) solid 1px;
		background-color: var(--header-background-color);
	}

	a {
		text-decoration: none;
		color: var(--black);
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: space-between;
		max-width: 80rem;
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

	.social-container li {
		font-size: 1.5rem;
	}

	.main-social-list {
		gap: 0.5rem;
		align-items: center;
	}

	.main-link-list {
		margin-left: 2rem;
		gap: 1rem;
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

	.logo-text {
		margin-left: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
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
	}

	.theme-button:hover {
		color: var(--primary-light);
	}

	.separator {
		color: var(--black);
		opacity: 0.25;
		margin-inline: 0.25rem;
	}
</style>
