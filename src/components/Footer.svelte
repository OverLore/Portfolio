<script>
	// @ts-nocheck
	import Separator from './Separator.svelte';
	import { scrollToSection } from '../scrollUtils';

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

	let links = [
		{ title: 'Accueil', id: '/', href: '/', aria: 'Accueil' },
		{
			title: 'Presentation',
			id: '/presentation',
			href: '#presentation',
			aria: 'Presentation'
		},
		{
			title: 'Web',
			id: '/web-skills',
			href: '#web-skills',
			aria: 'Compétences Web'
		},
		{
			title: 'Software',
			id: '/software-skills',
			href: '#software-skills',
			aria: 'Compétences Software'
		},
		{
			title: 'Jeux',
			id: '/game-skills',
			href: '#game-skills',
			aria: 'Compétences Jeux'
		},
		{ title: 'Projets', id: '/projects', href: '#projects', aria: 'Projets' },
		{ title: 'Parcours', id: '/experience', href: '#experience', aria: 'Parcours' }
	];

	let usefulLinks = [
		{ title: 'Accueil', href: '/', aria: 'Accueil' },
		{ title: 'Mention légales', href: '/mention-legales', aria: 'Mention légales' },
		{ title: 'GitHub', href: 'https://github.com/OverLore/', aria: 'GitHub' },
		{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/luc-arnould/', aria: 'LinkedIn' }
	];

	let contact = [
		{ content: "510 rue de l'Hostellerie, 30900 Nîmes", icon: 'ri-home-line' },
		{ content: 'luc.arnould08@gmail.com', icon: 'ri-mail-line' },
		{ content: '(+33)6 61 88 47 21', icon: 'ri-phone-line' },
		{ content: 'www.lucarnould.fr', icon: 'ri-global-line' }
	];

	function handleLinkClick(event, sectionId) {
		event.preventDefault();
		scrollToSection(sectionId);
	}
</script>

<main>
	<footer class="footer">
		<div class="social-container">
			<p>Suivez moi sur mes réseaux :</p>
			<ul class="social-icons">
				{#each socialLinks as { href, iconClass, aria }}
					<li class="social-icon">
						<a aria-label={aria} {href} target="_blank">
							<i class={iconClass}></i>
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="main-container">
			<div class="footer-category">
				<p class="category-header">LUC ARNOULD</p>
				<Separator align="normal" marginTop="0" width="4rem" />
				<p class="category-1-content">
					Jeune développeur de 22 ans, je me passione pour l'informatique et notamment dans le
					développement de jeux vidéos, de logiciels et de sites web. Vous êtes ici sur mon
					portfolio.<br />
					Je travailles actuellement en tant que Software Engineer chez Virtuos la journée et en tant
					que développeur Fullstack en freelance la nuit. N'hésitez-pas à me contacter pour toute demande
					de projet. À très bientôt j'espère !
				</p>
			</div>
			<div class="footer-category">
				<p class="category-header">SECTIONS</p>
				<Separator align="normal" marginTop="0" width="4rem" />
				<ul class="category-2-content">
					{#each links as { title, id, href, type, aria }}
						<li>
							<a
								aria-label={aria}
								{href}
								on:click|preventDefault={(event) => handleLinkClick(event, id.slice(1))}
							>
								{title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="footer-category">
				<p class="category-header">LIENS UTILES</p>
				<Separator align="normal" marginTop="0" width="4rem" />
				<ul class="category-3-content">
					{#each usefulLinks as { title, href, aria }}
						<li>
							<a aria-label={aria} {href}>{title}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="footer-category">
				<p class="category-header">CONTACT</p>
				<Separator align="normal" marginTop="0" width="4rem" />
				<ul class="category-4-content">
					{#each contact as { content, icon }}
						<li>
							<i class={icon} />
							<span>{content}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="copyright-container">
			<p>&copy; 2024 Copyright: Luc Arnould</p>
		</div>
	</footer>
</main>

<style>
	.footer {
		width: 100vw;
		max-width: 100%;
	}

	.footer-category {
		padding-right: 15%;
	}

	.social-container {
		background-color: var(--primary);
		display: flex;
		justify-content: space-between;
		padding: 1rem;
	}

	.social-container p {
		color: white;
	}

	.social-icons {
		display: flex;
		gap: 1rem;
	}

	.social-icons a {
		transition: color 0.15s ease-in-out;
		text-decoration: none;
		color: var(--black);
	}

	.social-icons li {
		list-style-type: none;
	}

	.social-icons a:hover {
		color: rgb(204, 204, 204);
	}

	.main-container {
		padding: 2rem;
		background-color: var(--light);
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
	}

	.copyright-container {
		display: flex;
		justify-content: center;
		background-color: var(--primary-dark);
		padding: 0.5rem;
	}

	.copyright-container p {
		color: white;
		font-size: 0.75rem;
	}

	.category-header {
		color: white;
		font-size: 1.25rem;
		font-weight: bold;
	}

	.category-1-content {
		color: white;
		margin-top: 2rem;
	}

	.category-2-content {
		color: white;
		margin-top: 2rem;
	}

	.category-2-content li {
		margin-top: 0.25rem;
		list-style: none;
	}

	.category-2-content a {
		color: white;
		text-decoration: none;
	}

	.category-3-content {
		color: white;
		margin-top: 2rem;
	}

	.category-3-content li {
		margin-top: 0.25rem;
		list-style: none;
	}

	.category-3-content a {
		color: white;
		text-decoration: none;
	}

	.category-4-content {
		color: white;
		margin-top: 2rem;
	}

	.category-4-content li {
		margin-top: 0.25rem;
		list-style: none;
	}

	@media screen and (max-width: 950px) {
		p,
		a,
		i,
		span {
			font-size: 0.75rem;
		}

		.copyright-container p {
			font-size: 0.75rem;
		}

		.category-header {
			font-size: 1rem;
		}

		.main-container {
			grid-template-columns: repeat(2, 1fr);
			grid-row-gap: 1.5rem;
		}
	}
</style>
