<script lang="ts">
	// Tailwind
	import '../app.css';

	import Header from '../components/Header.svelte';
</script>

<!-- Disable/enable header on scroll -->
<Header />

<div class="scroll-p-4">
	<!-- Rest of the page -->
	<slot />
</div>
