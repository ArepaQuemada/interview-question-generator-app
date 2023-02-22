import type { cohereResponse, generateResponse } from 'cohere-ai/dist/models';

export abstract class AIServiceCaller {
	abstract generate(prompt: string): Promise<cohereResponse<generateResponse>>;
}
