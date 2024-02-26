<script>
	export let img = './skills-icons/react.png';
	export let alt = '';
	export let title = '';
	export let invertColor = false;
	export let size = '100px';
</script>

<main class="container">
	<div style="width: {size}; height: {size};">
		<div class="skill-logo-container">
			<img src={img} {alt} />
		</div>
	</div>
	{#if title.length > 0}
		<h5 class="title" class:inverted={invertColor}>{title}</h5>
	{/if}
</main>

<style>
	.skill-logo-container {
		background: radial-gradient(circle, rgba(50, 50, 50, 1) 0%, rgba(27, 27, 27, 1) 100%);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
		box-sizing: border-box;
	}

	.skill-logo-container img {
		height: 60%;
		width: 60%;
		object-fit: contain;
		filter: drop-shadow(0 0 0.35rem rgb(255, 255, 255, 0.3));
	}

	.title {
		color: var(--black);
		font-size: 1rem;
	}

	.inverted {
		color: var(--light);
		font-size: 1rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
</style>
