<script lang="ts">
	import PromptForm from '$lib/components/PromptForm.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData & {
		generations: string[];
	};
	form?.generations;
	$: console.log('form ', form?.generations);
</script>

<h1>Interview Question Generator</h1>
<p>
	Easily generate accurate job interview questions: Just type below and wait for magic to happen
</p>
<p>
	Disclaimer: This project is used to paly around using cohere API, it's not intended to profit from
	it
</p>
<PromptForm {form} />
