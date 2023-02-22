import { error, type Handle } from '@sveltejs/kit';
import { COHERE_API_KEY } from '$env/static/private';

export const handle = (async ({ resolve, event }) => {
	if (!COHERE_API_KEY) {
		throw error(400, {
			message: 'Must provide an cohere api key first'
		});
	}
	return resolve(event);
}) satisfies Handle;
