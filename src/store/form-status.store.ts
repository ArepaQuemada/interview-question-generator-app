import { writable } from 'svelte/store';

type FormStatus = {
	hasError: boolean;
	isLoading: boolean;
	prompt: string;
};

export const formSatus = writable<FormStatus>({
	hasError: false,
	isLoading: false,
	prompt: ''
});
