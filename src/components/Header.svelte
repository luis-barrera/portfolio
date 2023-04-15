<script lang="ts">
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	import Github from './svg/Github.svelte';
	import Linkedin from './svg/Linkedin.svelte';
	import Logo from './svg/Logo.svelte';
	import { onMount } from 'svelte';

	let showHeader = false;

	let lastScrollY = 0;
	let actualScrollY = 0;

	function handleScroll(event: Event) {
		actualScrollY = (event.currentTarget as Window).scrollY;
		if (actualScrollY > lastScrollY) {
			showHeader = false;
		} else {
			showHeader = true;
		}

		lastScrollY = actualScrollY;
	}

	onMount(() => {
		showHeader = true;
	});
</script>

<!-- Detects scrolling -->
<svelte:window on:scroll={handleScroll} />

{#if showHeader}
	<header transition:fade={{ easing: sineInOut }} class="fixed top-0 right-0 left-0">
		<nav
			class="bg-neutral-100 dark:bg-neutral-700
              shadow-lg shadow-neutral-100 dark:shadow-neutral-700
              px-4 lg:px-6 py-1"
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
							<Github />
						</a>
						<a href="https://www.linkedin.com/in/luis-antonio-valdovinos-barrera/">
							<Linkedin />
						</a>
					</div>

					<button
						data-collapse-toggle="mobile-menu-2"
						type="button"
						class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="mobile-menu-2"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
						<svg
							class="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div
					class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
					id="mobile-menu-2"
				>
					<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
						<li>
							<a
								href="/"
								class="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white"
								aria-current="page"
							>
								About Me
							</a>
						</li>
						<li>
							<a
								href="/"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="/"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Work Experience
							</a>
						</li>
						<li>
							<a
								href="/"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Technologies
							</a>
						</li>

						<li>
							<a
								href="/"
								class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
{/if}
