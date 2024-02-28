<script>
	import { onMount } from 'svelte';
	import Header from '../../../components/Header.svelte';

	export let data;
	const { project, pageTitle } = data;

	onMount(() => {
		document.title = pageTitle;
	});
</script>

<Header />
<main>
	<div class="main-container">
		<h1 class="gradient-text">{project?.name}</h1>
		<p>{project?.description}</p>
	</div>
</main>

<style>
	main {
		padding-top: 3.5rem;

		display: flex;
		justify-content: center;

		background-image: var(--background-image);
		background-repeat: repeat;
		background-size: 50vw;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
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
		font-size: 80;
	}

	p {
		color: var(--black);
		font-size: 80;
	}
</style>
