import { initCohere } from '../lib/server/init-coherce';
import cohere from 'cohere-ai';
import type { RequestEvent } from './$types';
// import { response } from '../mockRes';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load() {
	// TOODO: Init COHERE with api key on first load, not working at the time
	// TODO: Fix env variables not working properly with svelte giving undefined
	initCohere();
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event: RequestEvent) => {
		const data = await event.request.formData();
		const prompt = data.get('prompt');
		const COHERE_API_KEY = process.env.COHERE_API_KEY ?? '';

		console.log('COHERE_API_KEY ', COHERE_API_KEY);

		if (!COHERE_API_KEY) {
			return fail(400);
		}

		if (!prompt) {
			return fail(400, { prompt, missing: true });
		}

		cohere.init(COHERE_API_KEY);

		const response = await cohere.generate({
			model: 'command-xlarge-20221108',
			prompt: prompt.toString(),
			max_tokens: 500,
			temperature: 1.2,
			k: 0,
			p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
			stop_sequences: [],
			return_likelihoods: 'NONE'
		});

		return {
			generations: response.body.generations[0].text.split('\n').splice(1)
			// generations: response.body.generations
		};
	}
};
