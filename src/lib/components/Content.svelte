<script lang="ts">
	import { onDestroy } from 'svelte';
	import { formSatus } from '../../store/form-status.store';
	import { generatedQuestions } from '../../store/questions.store';
	import SkeletonLoading from './SkeletonLoading.svelte';

	type QuestionsToSHow =
		| {
				prompt: string;
				questions: string[];
		  }[]
		| null;

	let questionsToShow: QuestionsToSHow = null;
	let isLoading = true;
	let hasError = false;
	let prompt = '';

	const unsuscribeGeneratedQuestions = generatedQuestions.subscribe((value) => {
		if (!questionsToShow) {
			questionsToShow = [{ questions: value, prompt }];
		} else {
			questionsToShow = questionsToShow.concat([{ questions: value, prompt }]);
		}
	});

	const unsuscribeFormStatus = formSatus.subscribe((value) => {
		isLoading = value.isLoading;
		hasError = value.hasError;
		prompt = value.prompt;
	});

	onDestroy(() => {
		unsuscribeGeneratedQuestions();
		unsuscribeFormStatus();
	});
</script>

<main
	class="bg-primary-ligth flex w-full h-[calc(100vh-14rem)] md:h-[calc(100vh-11.8rem)] justify-center text-white overflow-y-scroll"
>
	<div class="w-full max-w-lg p-1">
		{#if questionsToShow}
			{#each questionsToShow as questionBlock, index}
				<div class="mb-4">{questionBlock.prompt}</div>
				<ol class="my-5">
					{#each questionBlock.questions as question}
						<li>{question}</li>
					{/each}
				</ol>
				{#if isLoading && index === questionsToShow.length - 1}
					<SkeletonLoading />
				{/if}
			{/each}
		{/if}
	</div>
	<slot />
</main>
