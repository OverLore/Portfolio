<script>
	export let marginTop = '1rem';
	export let width = '50%';
	export let height = '2px';
	export let backgroundColor = 'var(--primary)';
	export let align = 'center';
</script>

<main>
	<div style="margin-top: {marginTop}; width: 100%; display: flex; justify-content: {align}">
		<div style="width: {width}; height: {height}; background-color: {backgroundColor}"></div>
	</div>
</main>
