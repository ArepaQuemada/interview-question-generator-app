import { AIServiceCaller } from './ai-caller';
import { CohereHandler } from './cohere-handler';

export class GenerateQuestions extends AIServiceCaller {
	private model = 'command-xlarge-nightly';
	private max_tokens = 300;
	private stop_sequences = [];

	generate(prompt: string) {
		return CohereHandler.generate(prompt, this.model, this.max_tokens, this.stop_sequences);
	}
}
