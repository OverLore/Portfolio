<script>
	import SkillContainer from './SkillContainer.svelte';

	/**
	 * @type {{ id:string; type: string; name: string; description: string; image:string; stack: string[]; screenshots: string[] }}
	 */
	export let project;
</script>

<main>
	<div class="custom-card">
		<div class="custom-bg-image">
			<img src={project.image} alt={project.name} class="img-fluid" />
			{#if project.type === 'game'}
				<div class="icon-top-right" style="background-color: var(--light); border-radius: 50%;">
					<i class="ri-gamepad-fill" style="margin: 5px;"></i>
				</div>
			{:else if project.type === 'site'}
				<div class="icon-top-right" style="background-color: var(--light); border-radius: 50%;">
					<i class="ri-pages-fill" style="margin: 5px;"></i>
				</div>
			{:else}
				<div class="icon-top-right" style="background-color: var(--light); border-radius: 50%;">
					<i class="ri-apps-fill" style="margin: 5px;"></i>
				</div>
			{/if}
		</div>

		<div class="custom-card-body">
			<h5 class="custom-card-title">
				{project.name}
			</h5>
			<p class="custom-card-text">
				{project.description}
			</p>
			<div class="techlist">
				{#each project.stack as skill}
					<SkillContainer size="50px" img="./skills-icons/{skill}.png" alt="{skill} logo" />
				{/each}
			</div>
			<a href="projects/{project.id}" data-sveltekit-preload-data class="custom-btn"
				>Voir le projet</a
			>
		</div>
	</div>
</main>

<style>
	.techlist {
		display: flex;
		gap: 10px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-bottom: 0.75rem;
	}
	.custom-card {
		border: var(--primary) solid 3px;
		border-radius: 1rem;
		-webkit-box-shadow: 0 13px 4px rgba(0, 0, 0, 0.5);
		box-shadow: 5px 5px 13px 4px rgba(0, 0, 0, 0.5);
		overflow: hidden;
		transition:
			border 0.2s ease-in-out,
			transform 0.2s ease-in-out,
			--test 0.2s ease-in-out;
		width: 100%;

		background-color: var(--background-color-contrast);
		background-image: var(--background-image-contrast);
		background-repeat: repeat;
		background-size: 50vw;

		--test: var(--primary);

		margin-bottom: 1rem;
	}

	.custom-card:hover {
		border: var(--primary-darken) solid 3px;
		-webkit-transform: scale(1.02, 1.02);
		transform: scale(1.02, 1.02);
		--test: var(--primary-darken);
	}

	.custom-bg-image {
		position: relative;
		overflow: hidden;
	}

	.custom-bg-image img {
		width: 100%;
		height: auto;
		aspect-ratio: 16/9;
	}

	.custom-card-body {
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.custom-card-title {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: bold;
		margin-bottom: 0.75rem;
		text-align: center;
		color: var(--light);
	}

	.custom-card-text {
		margin-bottom: 1rem;
		text-align: center;
		color: var(--light);
		font-size: clamp(0.75rem, 3vw, 1.25rem);
	}

	.custom-btn {
		display: inline-block;
		padding: 0.75rem 1rem;
		font-size: 1rem;
		font-weight: bold;
		border: none;
		background-color: var(--test);
		color: #fff;
		border-radius: 0.5rem;
		cursor: pointer;
		width: 80%;
		text-align: center;
		text-decoration: none;
		transition: background-color 0.3s;
	}

	.custom-btn:hover {
		background-color: var(--primary-light);
	}

	.icon-top-right {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		color: var(--primary);
		font-size: 2rem;
	}
</style>
