import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['dayjs']
	}
};

export default config;
