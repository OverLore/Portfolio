// @ts-nocheck
import { projects } from '../..//../projects';
import { error } from '@sveltejs/kit';

export const load = ({ fetch, params }) => {
	const project = projects.find((project) => project.id === params.projectId);

	if (!project) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		project: project,
		pageTitle: `Projet - ${project?.name}`
	};
};
