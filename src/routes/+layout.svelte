<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<!-- Disable/enable header on scroll -->
<Header />

<!-- Rest of the page -->
<slot />
