<script>
	import { browser } from '$app/environment';
	import { darkMode } from '../ThemeStore';

	let activeSection = '/';

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
</script>

<header>
	<nav>
		<div class="links-container">
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
		</div>
		<div class="social-container">
			<ul class="main-social-list">
				<li>
					<a aria-label="Accueil" href="/"> Accueil </a>
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

	.main-social-list {
		gap: 0.5rem;
		align-items: center;
	}

	a {
		transition: color 0.15s ease-in-out;
	}

	a:hover {
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
</style>
