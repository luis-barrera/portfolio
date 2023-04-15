<script lang="ts">
	// Tailwind
	import '../app.css';

	import Header from '../components/Header.svelte';
	import { definedColors } from '../data/definedColors';

	// Selected color, get a random every time the page is reloaded
	let keys = Object.keys(definedColors);
	let randomKey = keys[(keys.length * Math.random()) << 0];
	export const selectedBaseColor = definedColors[randomKey];
</script>

<!-- Disable/enable header on scroll -->
<Header baseColor={selectedBaseColor} />

<!-- Rest of the page -->
<slot />
