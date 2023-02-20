<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;

	$: console.log('form ', form?.generations);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<form method="POST" use:enhance>
	{#if form?.missing}<p class="error">The email field is required</p>{/if}
	<textarea name="prompt" />
	<button type="submit">Submit</button>
	{#if form?.generations}
		<ul>
			{#each form.generations as generations}
				<li>{generations}</li>
			{/each}
		</ul>
	{/if}
</form>
