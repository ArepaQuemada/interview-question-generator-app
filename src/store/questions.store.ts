import { writable } from 'svelte/store';

export const generatedQuestions = writable<string[]>([]);
