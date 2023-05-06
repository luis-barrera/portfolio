<script lang="ts">
	import { checkSectionIsVisible } from '../stores/visibleSectionStore';
	import { baseColor } from '../stores/baseColorStore';
	import { assetsDict } from '../data/assetsDict';

	import type { IDoSection } from '../models/work-area.model';

	export let iDoData: IDoSection[];

	let iDoElement: Element;

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
	<div class="md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4">
		<h1 class="text-center text-2xl my-4">I Do:</h1>

		<div class="grid grid-cols-1">
			{#each iDoData as iDoSection}
				<!-- Tittle -->
				<h2 class="inline-block px-2 text-5xl text-center">
					{iDoSection.name}
				</h2>

				<!-- Desc -->
				<p class="text-lg">
					{iDoSection.desc}
				</p>

				<!-- Work Experience -->
				{#if iDoSection.work}
					<hr />
					<h3 class="text-3xl text-center">Work Experience</h3>

					<div class="flex flex-wrap justify-center py-3">
						{#each iDoSection.work as work}
							<div class="p-2 basis-full md:basis-1/2 lg:basis-1/3">
								<div class="card h-full">
									<a href={work.URL}>
										<img
											class="w-full aspect-square object-cover object-center"
											src={assetsDict[work.screenshotURL]}
											alt={work.name}
										/>

										<div class="p-2">
											<h3 class="text-2xl py-1">
												{work.name}
											</h3>

											{#if work.org}
												<p class="text-xl">Org: {work.org}</p>
											{/if}

											{#if work.dateBegin}
												<p class="inline-block text-sm">{work.dateBegin} -</p>
											{/if}

											{#if work.dateEnd}
												<p class="inline-block text-sm">{work.dateEnd}</p>
											{:else}
												<p class="inline-block text-sm">current</p>
											{/if}

											<p class="text-base">{work.desc}</p>
										</div>
									</a>
								</div>
							</div>
						{/each}
					</div>
				{/if}

				<!-- TODO: Projects -->
				{#if iDoSection.projects}
					<hr />
					<h3 class="text-3xl text-center">Projects</h3>

					<div class="flex flex-wrap justify-center py-3">
						{#each iDoSection.projects as project}
							<div class="p-2 basis-full md:basis-1/2 lg:basis-1/3">
								<div class="card h-full">
									<a href={project.URL}>
										<img
											class="w-full aspect-square object-cover object-center"
											src={assetsDict[project.screenshotURL]}
											alt={project.name}
										/>

										<div class="p-2">
											<h3 class="text-2xl py-1">
												{project.name}
											</h3>

											{#if project.org}
												<p class="text-xl">Org: {project.org}</p>
											{/if}

											{#if project.dateBegin}
												<p class="inline-block text-sm">{project.dateBegin} -</p>
											{/if}

											{#if project.dateEnd}
												<p class="inline-block text-sm">{project.dateEnd}</p>
											{:else}
												<p class="inline-block text-sm">current</p>
											{/if}

											<p class="text-base">{project.desc}</p>
										</div>
									</a>
								</div>
							</div>
						{/each}
					</div>
				{/if}

				<hr />

				<!-- Languages -->
				<h3 class="text-3xl text-center">Languages</h3>

				<div class="flex flex-wrap justify-center py-3">
					{#each iDoSection.languages as language}
						<div class="p-2 basis-full md:basis-1/2 lg:basis-1/4">
							<div class="card h-full">
								<a href={language.pageURL}>
									<img
										class="w-full aspect-square object-contain object-center"
										src={assetsDict[language.iconURL]}
										alt={language.name}
									/>

									<div class="p-2">
										<h3 class="text-2xl py-1">
											{language.name}
										</h3>

										{#if language.sinceDate}
											<p class="text-sm">{getExperienceTime(language.sinceDate)}</p>
										{/if}

										<p class="text-base">{language.desc}</p>
									</div>
								</a>
							</div>
						</div>
					{/each}
				</div>

				<hr />

				<!-- Libreries / Frameworks -->
				<h3 class="text-3xl text-center">Libraries / Frameworks</h3>

				<div class="flex flex-wrap justify-center py-3">
					{#each iDoSection.libraries as librarie}
						<div class="p-2 basis-1/2 md:basis-1/3 lg:basis-1/5 flex-grow-0 overflow-hidden">
							<div class="card h-full">
								<a href={librarie.pageURL}>
									<img
										class="w-full aspect-square object-contain object-center"
										src={assetsDict[librarie.iconURL]}
										alt={librarie.name}
									/>
									<div class="p-2">
										<h3 class="text-xl py-1">
											{@html librarie.name}
										</h3>
										{#if librarie.sinceDate}
											<p class="text-sm">{getExperienceTime(librarie.sinceDate)}</p>
										{/if}
										<p class="text-base">{librarie.desc}</p>
									</div>
								</a>
							</div>
						</div>
					{/each}
				</div>

				<hr />

				<!-- Tools -->
				<h3 class="text-3xl text-center">Tools</h3>

				<div class="flex flex-wrap justify-center py-3">
					{#each iDoSection.tools as tool}
						<div class="p-2 basis-1/2 md:basis-1/3 lg:basis-1/5 flex-grow-0 overflow-hidden">
							<div class="card h-full">
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
						</div>
					{/each}
				</div>

				<!-- Others -->
				{#if iDoSection.others}
					<hr />
					<h3 class="text-3xl text-center">Others</h3>

					<div class="flex flex-wrap justify-center py-3">
						{#each iDoSection.others as other}
							<div class="p-2 basis-1/2 md:basis-1/3 lg:basis-1/5 flex-grow-0 overflow-hidden">
								<div class="card h-full">
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

	a:hover h3 {
		color: var(--base-color);
	}
	a:no-ho h3 {
		color: var(--base-color);
	}

	.card {
		@apply border rounded overflow-hidden bg-neutral-200 dark:bg-neutral-800;
		border-color: var(--base-color);
	}
</style>
