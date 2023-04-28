<script lang="ts">
	import { checkSectionIsVisible } from '../stores/visibleSectionStore';
	import { baseColor } from '../stores/baseColorStore';

	import javascriptLogo from '$lib/assets/javascript-logo.png';
	import angularLogo from '$lib/assets/angular-logo.png';
	import angularMaterialLogo from '$lib/assets/angular-material-logo.png';
	import typescriptLogo from '$lib/assets/typescript-logo.png';
	import webstormLogo from '$lib/assets/webstorm-logo.png';

	import type { IDoSection } from '../models/work-area.model';

	export let iDoData: IDoSection[];

	let iDoElement: Element;

	// TODO: Mover todo este objeto a un import
	// List of assets
	let assetsDict: { [index: string]: string } = {
		'javascript-logo': javascriptLogo,
		'angular-logo': angularLogo,
		'angular-material-logo': angularMaterialLogo,
		'typescript-logo': typescriptLogo,
		'webstorm-logo': webstormLogo
	};

	// Check that the section is visible
	function handleScroll() {
		checkSectionIsVisible(iDoElement, 'i-do');
	}

	function getExperienceTime(sinceDate: string | null): string | null {
		if (sinceDate) {
			let date = new Date(sinceDate);
			let now = new Date();

			const diff = now.valueOf() - date.valueOf();

			let diffInMonths = diff / 2628000000;

			let yearsExperience = Math.ceil(diffInMonths / 12);

			return yearsExperience + (yearsExperience > 1 ? ' years' : ' year') + ' of Experience';
		} else {
			return null;
		}
	}
</script>

<svelte:window on:scroll={handleScroll} />

<section
	id="i-do"
	class="min-h-screen py-4"
	bind:this={iDoElement}
	style="--base-color: #{$baseColor}"
>
	<h1 class="text-center text-2xl my-4">I Do:</h1>

	<div class="max-w-screen-md mx-auto px-4">
		<div class="grid grid-cols-1">
			{#each iDoData as iDoSection}
				<h2 class="inline-block px-2 text-5xl text-center">
					{iDoSection.name}
				</h2>

				<p class="text-lg">
					{iDoSection.desc}
				</p>

				{#if iDoSection.work}
					<hr />
					<h3 class="text-3xl text-center">Work Experience</h3>
				{/if}

				{#if iDoSection.projects}
					<hr />
					<h3 class="text-3xl text-center">Projects</h3>
				{/if}

				<hr />

				<h3 class="text-3xl text-center">Languages</h3>

				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
					{#each iDoSection.languages as language}
						<div class="card">
							<img
								class="w-full aspect-square object-cover object-center"
								src={assetsDict[language.iconURL]}
								alt={language.name}
							/>
							<div class="p-2">
								<h3 class="text-2xl py-1">
									<a href={language.pageURL}>
										{language.name}
									</a>
								</h3>
								{#if language.sinceDate}
									<p class="text-sm">{getExperienceTime(language.sinceDate)}</p>
								{/if}
								<p class="text-base">{language.desc}</p>
							</div>
						</div>
					{/each}
				</div>

				<hr />

				<h3 class="text-3xl text-center">Libraries / Frameworks</h3>

				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
					{#each iDoSection.libraries as librarie}
						<div class="card">
							<img
								class="w-full aspect-square object-contain object-center"
								src={assetsDict[librarie.iconURL]}
								alt={librarie.name}
							/>
							<div class="p-2">
								<h3 class="text-2xl py-1">
									<a href={librarie.pageURL}>
										{librarie.name}
									</a>
								</h3>
								{#if librarie.sinceDate}
									<p class="text-sm">{getExperienceTime(librarie.sinceDate)}</p>
								{/if}
								<p class="text-base">{librarie.desc}</p>
							</div>
						</div>
					{/each}
				</div>

				<hr />

				<h3 class="text-3xl text-center">Tools</h3>

				<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
					{#each iDoSection.tools as tool}
						<div class="card">
							<img
								class="w-full aspect-square object-contain object-center"
								src={assetsDict[tool.iconURL]}
								alt={tool.name}
							/>
							<div class="p-2">
								<h3 class="text-2xl py-1">
									{tool.name}
								</h3>
							</div>
						</div>
					{/each}
				</div>

				{#if iDoSection.others}
					<hr />
					<h3 class="text-3xl text-center">Others</h3>

					<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
						{#each iDoSection.others as other}
							<div class="card">
								<img
									class="w-full aspect-square object-contain object-center"
									src={assetsDict[other.iconURL]}
									alt={other.name}
								/>
								<div class="p-2">
									<h3 class="text-2xl py-1">
										{other.name}
									</h3>
								</div>
							</div>
						{/each}
					</div>
				{/if}
				<hr />
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	hr {
		border-color: var(--base-color);
		@apply my-1 border-2;
	}

	a:hover {
		color: var(--base-color);
	}

	.card {
		@apply border-2 border-dashed rounded overflow-hidden bg-neutral-200 dark:bg-neutral-800;
		border-color: var(--base-color);
	}
</style>
