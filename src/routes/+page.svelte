<script lang="ts">
	import AboutMe from '../components/AboutMe.svelte';
	import Contact from '../components/Contact.svelte';
	import IDo from '../components/IDo.svelte';

	import { baseColor } from '../stores/baseColorStore';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- TODO: ponerle i18n en español e inglés -->

<div style="--base-color: #{$baseColor}" class="relative h-full">
	<div class="body-content absolute top-0 right-0 left-0 min-h-full -z-10" />

	<AboutMe />

	<IDo iDoData={data.iDoData} />

	<Contact />

	<footer class="w-full text-center py-6">© 2023 luis-barrera</footer>
</div>

<style>
	.body-content {
		opacity: 0.8;
		background-image: radial-gradient(var(--base-color) 0.06rem, transparent 0.06rem);
		background-size: 2rem 2rem;
	}
</style>
