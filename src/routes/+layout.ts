import type { LayoutLoad } from './$types';

export const load = (async () => {
    return {test: 'hi'};
}) satisfies LayoutLoad;