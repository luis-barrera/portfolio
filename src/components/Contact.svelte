<script lang="ts">
	import { checkSectionIsVisible } from '../stores/visibleSectionStore';

	import curriculumEsp from '$lib/assets/Luis_Antonio_Valdovinos_Barrera-ESP.pdf';
	import curriculumEng from '$lib/assets/Luis_Antonio_Valdovinos_Barrera-ENG.pdf';

	let contactElement: Element;

	function handleScroll() {
		checkSectionIsVisible(contactElement, 'contact');
	}
</script>

<svelte:window on:scroll={handleScroll} />

<section id="contact" bind:this={contactElement}>
	<br />
	<h1 class="text-center text-2xl my-4">Contact</h1>

	<!-- <div class="max-w-screen-md mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3"> -->
	<div class="max-w-screen-md mx-auto flex flex-wrap justify-center gap-4 py-3">
		<div class="basis-60">
			<h2 class="text-3xl text-center">CV</h2>
			<p class="text-center">
				<a href={curriculumEng} download="Luis_Antonio_Valdovinos_Barrera-ENG" target="_blank"
					>English</a
				>
			</p>
			<p class="text-center">
				<a href={curriculumEsp} download="Luis_Antonio_Valdovinos_Barrera-ESP" target="_blank"
					>Spanish</a
				>
			</p>
		</div>

		<div class="basis-60">
			<h2 class="text-3xl text-center">GitHub</h2>
			<p class="text-center"><a href="https://github.com/luis-barrera">luis-barrera</a></p>
		</div>

		<div class="basis-60">
			<h2 class="text-3xl text-center">LinkedIn</h2>
			<p class="text-center">
				<a href="https://www.linkedin.com/in/luis-antonio-valdovinos-barrera/"
					>Luis Antonio Valdovinos Barrera</a
				>
			</p>
		</div>

		<div class="basis-60">
			<h2 class="text-3xl text-center">Email</h2>
			<p class="text-center">
				<a href="mailto:luisvaldovinosbarrera@gmail.com">luisvaldovinosbarrera<wbr />@gmail.com</a>
			</p>
		</div>

		<div class="basis-60">
			<h2 class="text-3xl text-center">Telegram</h2>
			<p class="text-center">
				<a href="https://t.me/luisvaldovinos" target="_blank">luisvaldovinos</a>
			</p>
		</div>
	</div>
</section>
