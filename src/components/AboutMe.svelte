<script>
	import { onMount } from 'svelte';
	import Logo from '../components/svg/Logo.svelte';
	import { slide } from 'svelte/transition';

	let showLogo = false;

	onMount(() => {
		showLogo = true;
	});
</script>

<article class="min-h-screen">
	<div class="top-0 right-0 left-0">
		<div class="grid place-items-center h-screen">
			<div class="flex flex-col items-center mx-4 gap-4">
				<h1 class="text-3xl text-black dark:text-white">Luis Antonio Valdovinos Barrera</h1>
				{#if showLogo}
					<div transition:slide|local={{ axis: 'y' }}>
						<Logo height={'8rem'} />
					</div>
				{/if}
			</div>
		</div>
	</div>
</article>
