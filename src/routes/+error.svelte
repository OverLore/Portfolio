<script>
	import { onMount } from 'svelte';
	import ErrorHeader from '../components/ErrorHeader.svelte';

	onMount(() => {
		document.title = 'Page introuvable';
	});
</script>

<ErrorHeader />
<main>
	<div class="main-container">
		<div class="content">
			<h1 class="gradient-text">404</h1>
			<h2>Page introuvable</h2>
			<p>Vous avez probablement saisi une mauvaise URL.</p>
			<a href="/">Retour à l'accueil</a>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;

		background-image: var(--background-image);
		background-repeat: repeat;
		background-size: 50vw;

		height: 100vh;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		color: var(--primary);
		font-size: 8rem;
		margin: 0;
	}

	h2 {
		color: var(--black);
		font-size: 2rem;
	}

	p {
		color: var(--black);
		font-size: 1rem;
		margin-top: 5rem;
	}

	a {
		color: var(--primary-light);
		font-size: 0.9rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--light);
		width: 100vw;
		padding: 10px;
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
</style>
