import { defineConfig } from 'orval';

export default defineConfig({
	api: {
		input: 'http://localhost:3333/docs/json',
		output: {
			target: './src/http/api.ts',
			client: 'fetch',
			httpClient: 'fetch',
			clean: true, // para que sempre ao gerar um novo api.ts, apague o antigo
			baseUrl: 'http://localhost:3333',

			override: {
				fetch: {
					// Para que, em casos de reqs que retornam varios tipos
					// de retorno conforme o status code, ele retorna o status code junto
					// ao data, nesse caso estamos desabilitando
					includeHttpResponseReturnType: false,
				},
			},
		},
	},
});
