<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	import Logo from './svg/Logo.svelte';
	import SocialIcon from './svg/SocialIcon.svelte';

	import { baseColor } from '../stores/baseColorStore';
	import { visibleSection } from '../stores/visibleSectionStore';

	let blurHeader = false;
	let actualScrollY = 0;
	let showHeader = false;

	let sections: { id: string; name: string }[] = [
		{ id: 'about', name: 'About Me' },
		{ id: 'i-do', name: 'I Do' },
		{ id: 'contact', name: 'Contact' }
	];

	function handleScroll(event: Event) {
		actualScrollY = (event.currentTarget as Window).scrollY;

		if (actualScrollY == 0) {
			blurHeader = false;
		} else {
			blurHeader = true;
		}
	}

	// Wait 400 ms to show header
	onMount(() => {
		setTimeout(() => {
			showHeader = true;
		}, 1000);

		// Sometimes user reload page and the scroll keeps, but the blurs doesn't
		actualScrollY = window.scrollY;
		if (actualScrollY == 0) {
			blurHeader = false;
		} else {
			blurHeader = true;
		}
	});
</script>

<!-- Detect scrolling -->
<svelte:window on:scroll={handleScroll} />

<header style="--base-color: #{$baseColor}" class="fixed top-0 right-0 left-0 z-50">
	{#if showHeader}
		<nav
			transition:fade|local={{ easing: sineInOut }}
			class="transition-colors duration-1000 px-4 lg:px-6 py-1"
			class:blur-header={blurHeader}
		>
			<div
				class="flex flex-wrap justify-between
              items-center mx-auto max-w-screen-lg"
			>
				<a href="/" class="flex items-center">
					<Logo height={'2rem'} />
				</a>

				<div class="hidden justify-between items-center md:flex md:w-auto">
					<ul class="flex flex-row font-medium space-x-8 mt-0">
						{#each sections as section}
							<li>
								<a
									href="#{section.id}"
									class:selected={$visibleSection === section.id}
									class="anchors block py-2 p-0 border-0"
								>
									{section.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<div class="flex items-center">
					<div class="flex flex-row gap-2">
						<a href="https://github.com/luis-barrera">
							<SocialIcon icon={'GitHub'} height="2rem" />
						</a>
						<a href="https://www.linkedin.com/in/luis-antonio-valdovinos-barrera/">
							<SocialIcon icon={'LinkedIn'} height="2rem" />
						</a>
					</div>
				</div>
			</div>
		</nav>
	{/if}
</header>

<style lang="postcss">
	.blur-header {
		@apply bg-neutral-100/50 dark:bg-neutral-700/50 backdrop-blur-sm;
	}

	.selected {
		color: var(--base-color);
	}

	.anchors:hover {
		color: var(--base-color);
	}
</style>
