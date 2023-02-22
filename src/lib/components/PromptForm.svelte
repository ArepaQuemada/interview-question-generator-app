<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../routes/$types';

	export let form: ActionData & {
		generations: string[];
	};
</script>

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
