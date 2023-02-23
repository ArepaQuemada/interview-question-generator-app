<script lang="ts">
	import { generatedQuestions } from '../../store/questions.store';

	let questions: null | string[] = null;

	generatedQuestions.subscribe((value) => {
		if (!questions) {
			questions = value;
		} else {
			questions = questions?.concat(value);
		}
	});
</script>

<main class="bg-primary-ligth flex w-full h-[75vh] justify-center text-white overflow-y-scroll">
	<div class="max-w-md p-1">
		{#if questions}
			<ol>
				{#each questions as question}
					<li>{question}</li>
				{/each}
			</ol>
		{/if}
		<slot />
	</div>
</main>
