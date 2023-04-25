<script lang="ts">
	import { checkSectionIsVisible } from '../stores/visibleSectionStore';
	import { baseColor } from '../stores/baseColorStore';

	import type { IDoSection } from '../models/work-area.model';

	export let iDoData: IDoSection[];

	let iDoElement: Element;

	// Check that the section is visible
	function handleScroll() {
		checkSectionIsVisible(iDoElement, 'i-do');
	}
</script>

<svelte:window on:scroll={handleScroll} />

<section
	id="i-do"
	class="min-h-screen py-4"
	bind:this={iDoElement}
	style="--base-color: #{$baseColor}"
>
	<h1 class="text-center text-3xl my-4">I Do:</h1>

	<div class="max-w-screen-lg">
		<div class="grid grid-cols-1">
			{#each iDoData as iDoSection}
				<h2 class="inline-block px-2 text-6xl text-center">
					{iDoSection.name}
				</h2>

				<p class="text-2xl">
					{iDoSection.desc}
				</p>

				<hr />

				<h3 class="text-4xl">Languages</h3>

				<hr />

				<h3 class="text-4xl">Libraries / Frameworks</h3>

				<hr />

				<h3 class="text-4xl">Tools</h3>

				{#if iDoSection.tools}
					<hr />
					<h3 class="text-4xl">Others</h3>
				{/if}

				{#if iDoSection.work}
					<hr />
					<h3 class="text-4xl">Work Experience</h3>
				{/if}

				{#if iDoSection.projects}
					<hr />
					<h3 class="text-4xl">Projects</h3>
				{/if}

				<hr />
			{/each}
		</div>
	</div>

	<!-- TODO: Frontend info Component -->
	<!-- TODO: repetir el componente de frontend, pero con datos diferentes, en lugar de repetir componentes, tener diferente data para cada tipo de  -->
	<!-- <nav> -->
	<!-- Aquí poner el area seleccionada -->
	<!-- <h2>Frontend</h2> -->

	<!-- Tecnologías que conozco -->
	<!-- <h3>Technologies</h3> -->
	<!-- <p>Tecnologías Frontend</p> -->
	<!-- Experincias laborales -->
	<!-- <h3>Work</h3> -->
	<!-- Side projects -->
	<!-- <h3>Projects</h3> -->
	<!-- </nav> -->
</section>

<style lang="postcss">
	hr {
		border-color: var(--base-color);
		@apply my-1 border-2;
	}
</style>
