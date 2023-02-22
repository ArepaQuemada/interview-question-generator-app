import cohere from 'cohere-ai';

export class CohereHandler {
	static init(api_key: string) {
		cohere.init(api_key);
	}

	static async generate(
		prompt: string,
		model: string,
		max_tokens: number,
		stop_sequences: string[] = []
	) {
		return await cohere.generate({
			model,
			prompt,
			max_tokens,
			temperature: 1.2,
			k: 0,
			p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
			stop_sequences,
			return_likelihoods: 'NONE'
		});
	}
}
