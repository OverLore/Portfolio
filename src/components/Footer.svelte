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

	export let links = [
		{ title: 'Accueil', id: '/', href: '/', aria: 'Accueil', type: 'link' },
		{
			title: 'Presentation',
			id: '/presentation',
			href: '#presentation',
			aria: 'Presentation',
			type: 'link'
		},
		{
			title: 'Web',
			id: '/web-skills',
			href: '#web-skills',
			aria: 'Compétences Web',
			type: 'link'
		},
		{
			title: 'Software',
			id: '/software-skills',
			href: '#software-skills',
			aria: 'Compétences Software',
			type: 'link'
		},
		{
			title: 'Jeux',
			id: '/game-skills',
			href: '#game-skills',
			aria: 'Compétences Jeux',
			type: 'link'
		},
		{ title: 'Projets', id: '/projects', href: '#projects', aria: 'Projets', type: 'link' },
		{ title: 'Parcours', id: '/experience', href: '#experience', aria: 'Parcours', type: 'link' }
	];

	let usefulLinks = [
		{ title: 'Accueil', href: '/', aria: 'Accueil' },
		{ title: 'Mentions légales', href: '/mentions-legales', aria: 'Mentions légales' },
		{ title: 'GitHub', href: 'https://github.com/OverLore/', aria: 'GitHub' },
		{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/luc-arnould/', aria: 'LinkedIn' },
		{ title: 'Code source', href: 'https://github.com/OverLore/Portfolio', aria: 'Code source' }
	];

	let contact = [
		{ content: '2335 route de Courbessac, 30000 Nîmes', icon: 'ri-home-line' },
		{ content: 'luc.arnould08@gmail.com', icon: 'ri-mail-line' },
		{ content: '(+33)6 61 88 47 21', icon: 'ri-phone-line' },
		{ content: 'www.lucarnould.fr', icon: 'ri-global-line' }
	];

	function handleLinkClick(event, sectionId) {
		event.preventDefault();
		scrollToSection(sectionId);
	}

	const birthDate = new Date('2001-09-27');
	const today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
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
					Jeune développeur de {age} ans, passionné par l’informatique, je me consacre aujourd’hui au
					développement web, d’applications et de logiciels. Vous êtes ici sur mon portfolio.<br />
					Après des expériences en studio sur des projets de jeux vidéo AAA, je travaille désormais à
					mon compte en tant que développeur fullstack freelance, pour accompagner mes clients dans la
					réalisation de leurs sites et applications.<br />
					N’hésitez pas à me contacter pour toute demande de projet. À très bientôt j’espère !
				</p>
			</div>
			<div class="footer-category">
				<p class="category-header">SECTIONS</p>
				<Separator align="normal" marginTop="0" width="4rem" />
				<ul class="category-2-content">
					{#each links as { title, id, href, type, aria }}
						<li>
							{#if type === 'scroll'}
								<a
									aria-label={aria}
									{href}
									on:click|preventDefault={(event) => handleLinkClick(event, id.slice(1))}
								>
									{title}
								</a>
							{:else}
								<a aria-label={aria} href={`/${href}`}>
									{title}
								</a>
							{/if}
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
			<p>Copyright &copy; 2024 Luc Arnould. Tous droits réservés</p>
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
		color: white;
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
		background-color: var(--light-darken);
		padding: 0.5rem;
	}

	.copyright-container p {
		color: var(--black);
		font-size: 0.75rem;
	}

	.category-header {
		color: var(--black);
		font-size: 1.25rem;
		font-weight: bold;
	}

	.category-1-content {
		color: var(--black);
		margin-top: 2rem;
	}

	.category-2-content {
		color: var(--black);
		margin-top: 2rem;
	}

	.category-2-content li {
		margin-top: 0.25rem;
		list-style: none;
	}

	.category-2-content a {
		color: var(--black);
		text-decoration: none;
	}

	.category-3-content {
		color: var(--black);
		margin-top: 2rem;
	}

	.category-3-content li {
		margin-top: 0.25rem;
		list-style: none;
	}

	.category-3-content a {
		color: var(--black);
		text-decoration: none;
	}

	.category-4-content {
		color: var(--black);
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
