import { redirect, type Load } from '@sveltejs/kit';

export const load: Load = ({ url }) => {
	if (url.pathname === '/') {
		redirect(302, '/projects');
	}
};
