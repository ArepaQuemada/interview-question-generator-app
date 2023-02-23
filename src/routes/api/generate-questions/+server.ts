import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
// import { response } from '../../../mockRes';
import { GenerateQuestions } from '$lib/server/generate-questions';

export const POST = (async ({ request }) => {
	const data = await request.formData();
	const prompt = data.get('prompt');
	if (!prompt) {
		throw error(400, 'Must provide prompt');
	}
	const response = await new GenerateQuestions().generate(prompt.toString());
	//return json({ generations: response.body.generations[0].text });
	return json({
		generations: response.body.generations[0].text.split(/\n/).filter((question) => !!question)
	});
}) satisfies RequestHandler;
