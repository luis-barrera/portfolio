<script lang="ts">
	// TODO: poner esto en una load function
	import { WorkAreaData } from '../data/i-do-data';
	import type { WorkArea } from '../data/i-do-data';

	import { checkSectionIsVisible } from '../stores/visibleSectionStore';

	let workAreas: string[] = [
		'Frontend',
		'Backend',
		'Data Science/Analyst',
		'Game Development',
		'SysAdmin',
		'Other Stuff'
	];

	let selectedArea: WorkArea | null = null;

	let iDoElement: Element;

	function handleScroll() {
		checkSectionIsVisible(iDoElement, 'i-do');
	}
</script>

<svelte:window on:scroll={handleScroll} />

<section id="i-do" class="min-h-screen py-4" bind:this={iDoElement}>
	<h1 class="text-center">I Do:</h1>

	<nav>
		<div class="max-w-screen-xl">
			<ul
				class="flex flex-col md:flex-row flex-wrap justify-evenly justify-items-stretch
                items-center mx-auto"
			>
				{#each WorkAreaData as area}
					<li class="inline-block px-2">
						{area.name}
					</li>
				{/each}
			</ul>
		</div>
	</nav>

	<!-- TODO: Frontend info Component -->
	<!-- TODO: repetir el componente de frontend, pero con datos diferentes, en lugar de repetir componentes, tener diferente data para cada tipo de  -->
	<nav>
		<!-- Aquí poner el area seleccionada -->
		<h2>Frontend</h2>

		<!-- Tecnologías que conozco -->
		<h3>Technologies</h3>
		<p>Tecnologías Frontend</p>
		<!-- Experincias laborales -->
		<h3>Work</h3>
		-
		<!-- Side projects -->
		<h3>Projects</h3>
	</nav>
</section>
