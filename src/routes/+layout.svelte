<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import PromptForm from '$lib/components/PromptForm.svelte';
	import '../app.css';
</script>

<Header />
<slot />
<Footer>
	<PromptForm />
</Footer>

<style>
	@import url('../css//css-reset.css');
</style>
