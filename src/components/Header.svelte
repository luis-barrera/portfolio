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

	onMount(() => {
		setTimeout(() => {
			showHeader = true;
		}, 400);
	});
</script>

<!-- Detect scrolling -->
<svelte:window on:scroll={handleScroll} />

<header style="--base-color: #{$baseColor}" class="fixed top-0 right-0 left-0">
	{#if showHeader}
		<nav
			transition:fade|local={{ easing: sineInOut }}
			class="transition-colors duration-1000 px-4 lg:px-6 py-1"
			class:blur-header={blurHeader}
		>
			<div
				class="flex flex-wrap justify-between
              items-center mx-auto max-w-screen-xl"
			>
				<a href="/" class="flex items-center">
					<Logo height={'2rem'} />
				</a>

				<div class="flex items-center lg:order-2">
					<div class="flex flex-row gap-2">
						<a href="https://github.com/luis-barrera">
							<SocialIcon icon={'GitHub'} />
						</a>
						<a href="https://www.linkedin.com/in/luis-antonio-valdovinos-barrera/">
							<SocialIcon icon={'LinkedIn'} />
						</a>
					</div>
				</div>
				<div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
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
