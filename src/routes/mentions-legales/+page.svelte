<script>
	// @ts-nocheck
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';

	let links = [{ title: 'Accueil', id: '', href: '/', type: 'redirect', aria: 'Accueil' }];
</script>

<svelte:head>
	<title>Mentions légales</title>
</svelte:head>

<Header {links} mainButtonType="redirect" />
<main class="container">
	<h1 class="gradient-text">MENTIONS LÉGALES</h1>
	<p>
		Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en
		l'économie numérique, il est précisé aux utilisateurs du site Luc Arnould l'identité des
		différents intervenants dans le cadre de sa réalisation et de son suivi.
	</p>
	<h2>Edition du site</h2>
	<p>Le présent site, accessible à l’URL www.lucarnould.fr (le « Site »), est édité par :</p>
	<p>
		Luc Arnould, résidant 510 rue de l'Hostellerie 30900 NÎMES, de nationalité Française (France),
		né(e) le 27/09/2001
	</p>
	<h2>Hébergement</h2>
	<p>
		Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP 80157 - 59053 Roubaix
		Cedex 1, (contact téléphonique ou email : 1007).
	</p>
	<h2>Directeur de publication</h2>
	<p>Le Directeur de la publication du Site est Luc Arnould.</p>
	<h2>Nous contacter</h2>
	<p>Par téléphone : +33661884721</p>
	<p>Par email : luc.arnould08@gmail.com</p>
	<p>Par courrier : 510 rue de l'Hostellerie 30900 NÎMES</p>
	<p class="source">
		Génération des mentions légales par <a href="https://www.legalstart.fr/">Legalstart</a>.
	</p>
	<a class="back" href="/">Retour à l'accueil</a>
</main>
<Footer />

<style>
	.container {
		margin-top: 6rem;
		margin-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
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

	h1,
	h2,
	p,
	a {
		text-align: center;
	}

	h1 {
		color: var(--primary);
		font-size: clamp(1rem, 4vw, 3rem);
		display: inline-block;
		margin-bottom: 1rem;
		filter: drop-shadow(2px 2px 3px var(--light));
	}

	h2 {
		margin-top: 2rem;
		color: var(--black);
	}

	p {
		margin-top: 0.25rem;
		color: var(--black);
	}

	a {
		color: var(--primary);
	}

	.source {
		margin-top: 4rem;
	}

	.back {
		margin-top: 1rem;
	}
</style>
