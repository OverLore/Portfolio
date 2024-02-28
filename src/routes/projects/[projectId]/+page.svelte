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
<main
	style="background-image: linear-gradient(rgba(0, 0, 0, {project.opacity}), rgba(0, 0, 0, {project.opacity})), url('/{project.image}');"
>
	<div class="main-container">
		<h1 class="gradient-text">{project?.name}</h1>
		<p>{project?.description}</p>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0);
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
		background-size: cover;
		min-height: 100vh;
	}

	.main-container {
		margin-top: 3.5rem;
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
