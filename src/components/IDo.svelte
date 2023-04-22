<script lang="ts">
	import { checkSectionIsVisible } from '../stores/visibleSectionStore';

	import type { IDoSection } from '../models/work-area.model';

	// import type { PageLoad } from './$types';
	//
	export let iDoData: IDoSection[];

	let iDoElement: Element;

	function handleScroll() {
		checkSectionIsVisible(iDoElement, 'i-do');
	}
</script>

<svelte:window on:scroll={handleScroll} />

<section id="i-do" class="min-h-screen py-4" bind:this={iDoElement}>
	<h1 class="text-center text-5xl">I Do:</h1>

	<nav>
		<div class="max-w-screen-xl">
			<ul
				class="flex flex-col md:flex-row flex-wrap justify-evenly justify-items-stretch
                items-center mx-auto"
			>
				{#each iDoData as iDoSection}
					<li class="inline-block px-2">
						{iDoSection.name}
					</li>
				{/each}
			</ul>
		</div>
	</nav>

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
