<script lang="ts">
	import AboutMe from '../components/AboutMe.svelte';
	import Contact from '../components/Contact.svelte';
	import IDo from '../components/IDo.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- TODO: ponerle i18n en español e inglés -->
<!-- TODO: Arreglar el color al recargar la página -->

<AboutMe />

<IDo iDoData={data.iDoData} />

<Contact />
