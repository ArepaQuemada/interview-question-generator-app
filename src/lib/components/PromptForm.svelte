<script lang="ts">
	import { generatedQuestions } from '../../store/questions.store';

	async function handleSubmit(e: Event) {
		const formData = new FormData(e.target as HTMLFormElement);
		try {
			const result = await fetch('/api/generate-questions', {
				method: 'post',
				body: formData
			}).then((res) => res.json());
			generatedQuestions.set(result.generations);
		} catch (err) {
			console.log(err);
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="flex gap-4 flex-wrap justify-center">
	<input
		placeholder="Generate a list of 5 interview questions for a senior software engineer"
		type="text"
		id="prompt"
		name="prompt"
		class=" w-full md:w-4/6 border-none rounded-lg border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 bg-primary-ligth"
	/>

	<button
		type="submit"
		class="w-full md:w-1/6 text-white bg-secondary  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5   hover:bg-secondary focus:outline-none focus:ring-blue-800"
		>Submit</button
	>
</form>
