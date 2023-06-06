<script lang="ts">
	import { checkSectionIsVisible } from '../stores/visibleSectionStore';
	import { baseColor } from '../stores/baseColorStore';

	import curriculumEsp from '$lib/assets/Luis_Antonio_Valdovinos_Barrera-ESP.pdf';
	import curriculumEng from '$lib/assets/Luis_Antonio_Valdovinos_Barrera-ENG.pdf';

	import SocialIcon from './svg/SocialIcon.svelte';
	import Icon from './svg/Icon.svelte';

	let contactElement: Element;

	function handleScroll() {
		checkSectionIsVisible(contactElement, 'contact');
	}
</script>

<svelte:window on:scroll={handleScroll} />

<section id="contact" bind:this={contactElement} style="--base-color: #{$baseColor}">
	<br />
	<h1 class="text-center text-2xl my-4">Contact</h1>

	<div class="max-w-screen-md mx-auto flex flex-wrap justify-center py-3">
		<div class="basis-60">
			<SocialIcon icon="CV" height="5rem" hoverable={false} />
			<h2 class="text-3xl text-center">CV</h2>
			<p class="text-center">
				<a href={curriculumEng} download="Luis_Antonio_Valdovinos_Barrera-ENG"
            class="border-b-2"
            target="_blank">
          English
          <Icon icon="pdf" height={"1rem"} hoverable={false}/>
        </a>
			</p>
			<p class="text-center">
				<a href={curriculumEsp} download="Luis_Antonio_Valdovinos_Barrera-ESP"
            class="border-b-2"
            target="_blank">
					Spanish
          <Icon icon="pdf" height={"1rem"} hoverable={false}/>
        </a
				>
			</p>
		</div>

		<div class="basis-60">
			<SocialIcon icon="GitHub" height="5rem" hoverable={false} />
			<h2 class="text-3xl text-center">GitHub</h2>
			<p class="text-center">
        <a href="https://github.com/luis-barrera" 
            class="border-b-2">
          luis-barrera
        </a>
      </p>
		</div>

		<div class="basis-60">
			<SocialIcon icon="LinkedIn" height="5rem" hoverable={false} />
			<h2 class="text-3xl text-center">LinkedIn</h2>
			<p class="text-center">
				<a href="https://www.linkedin.com/in/luis-antonio-valdovinos-barrera/"
            class="border-b-2">
          Luis Antonio Valdovinos Barrera
        </a>
			</p>
		</div>

		<div class="basis-60">
			<SocialIcon icon="Email" height="5rem" hoverable={false} />
			<h2 class="text-3xl text-center">Email</h2>
			<p class="text-center">
				<a href="mailto:luisvaldovinosbarrera@gmail.com"
            class="border-b-2">
          luisvaldovinosbarrera<wbr />@gmail.com
        </a>
			</p>
		</div>

		<div class="basis-60">
			<SocialIcon icon="Telegram" height="5rem" hoverable={false} />
			<h2 class="text-3xl text-center">Telegram</h2>
			<p class="text-center">
				<a href="https://t.me/luisvaldovinos"
            target="_blank" 
            class="border-b-2">
          luisvaldovinos
        </a>
			</p>
		</div>
	</div>
</section>

<style lang="postcss">
	a:hover {
    @apply border-black dark:border-white;
	}

	a {
		border-color: var(--base-color);
	}
</style>
