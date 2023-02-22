import type { RequestEvent } from './$types';
// import { response } from '../mockRes';
import { fail } from '@sveltejs/kit';
import { COHERE_API_KEY } from '$env/static/private';
import { CohereHandler } from '$lib/server/CohereHandler';

export function load() {
	// TOODO: Init COHERE with api key on first load, not working at the time
	CohereHandler.init(COHERE_API_KEY);
}

export const actions = {
	default: async (event: RequestEvent) => {
		const data = await event.request.formData();
		const prompt = data.get('prompt');

		if (!prompt) {
			return fail(400, { prompt, missing: true });
		}

		const response = await CohereHandler.generate(prompt.toString());
		console.log('response ', response.body.generations[0].text);
		return {
			generations: response.body.generations[0].text.split(/\n/).filter((question) => !!question)
			// generations: response.body.generations
		};
	}
};
