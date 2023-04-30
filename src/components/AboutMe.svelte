<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import { checkSectionIsVisible } from '../stores/visibleSectionStore';
	import Logo from '../components/svg/Logo.svelte';

	let showLogo = false;

	let aboutElement: Element;

	function handleScroll() {
		checkSectionIsVisible(aboutElement, 'about');
	}

	onMount(() => {
		showLogo = true;
	});
</script>

<!-- Detect scrolling -->
<svelte:window on:scroll={handleScroll} />

<article id="about" bind:this={aboutElement} class="min-h-screen">
	<div class="top-0 right-0 left-0">
		<div class="grid place-items-center h-screen">
			<div class="flex flex-col items-center mx-4 gap-4">
				<h1 class="text-3xl text-center text-black dark:text-white">
					Luis Antonio Valdovinos Barrera
				</h1>

				{#if showLogo}
					<div transition:slide|local={{ axis: 'y', delay: 800, duration: 600 }}>
						<Logo height={'8rem'} />
					</div>
				{/if}
			</div>
		</div>
	</div>
</article>
