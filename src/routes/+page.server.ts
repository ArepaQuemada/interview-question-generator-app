import { COHERE_API_KEY } from '$env/static/private';
import { CohereHandler } from '$lib/server/cohere-handler';

export function load() {
	CohereHandler.init(COHERE_API_KEY);
}
