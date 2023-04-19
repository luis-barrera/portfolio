<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	import Logo from './svg/Logo.svelte';
	import SocialIcon from './svg/SocialIcon.svelte';

	import { baseColor } from '../stores/baseColorStore';
	import { visibleSection } from '../stores/visibleSectionStore';
	import type { SectionName } from '../stores/visibleSectionStore';

	let showHeader = false;
	let actualScrollY = 0;

	let sections: { id: string; name: string }[] = [
		{ id: 'about', name: 'About Me' },
		{ id: 'i-do', name: 'I Do' },
		{ id: 'contact', name: 'Contact' }
	];

	function handleScroll(event: Event) {
		actualScrollY = (event.currentTarget as Window).scrollY;

		if (actualScrollY == 0) {
			showHeader = false;
		} else {
			showHeader = true;
		}
	}
</script>

<!-- Detect scrolling -->
<svelte:window on:scroll={handleScroll} />

<!-- transition:fade={{ easing: sineInOut }} -->
<header style="--base-color: #{$baseColor}" class="fixed top-0 right-0 left-0">
	<nav
		transition:fade|local={{ easing: sineInOut }}
		class:bg-transparent={!showHeader}
		class:dark:bg-transparent={!showHeader}
		class="bg-neutral-100/50 dark:bg-neutral-700/50 backdrop-blur-sm transition-colors duration-1000 px-4 lg:px-6 py-1"
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
						<SocialIcon icon={'Linkedin'} />
					</a>
				</div>
			</div>
			<div
				class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
				id="mobile-menu-2"
			>
				<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
					{#each sections as section}
						<li>
							<a
								href="#{section.id}"
								class:selected={$visibleSection === section.id}
								class="block py-2 pr-4 pl-3 text-gray-700
                        border-b border-gray-100 lg:border-0
                        lg:p-0 dark:text-gray-400 dark:border-gray-700"
							>
								{section.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	.selected {
		color: var(--base-color);
	}
</style>
