<script lang="ts">
	import { checkSectionIsVisible } from '../stores/visibleSectionStore';

	let contactElement: Element;

	function handleScroll() {
		checkSectionIsVisible(contactElement, 'contact');
	}
</script>

<svelte:window on:scroll={handleScroll} />

<section id="contact" bind:this={contactElement} class="min-h-screen">
	<h2>Contact</h2>
</section>
