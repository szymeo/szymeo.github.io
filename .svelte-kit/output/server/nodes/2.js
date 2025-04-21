

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C7VvPr-E.js","_app/immutable/chunks/CWnbpHXa.js","_app/immutable/chunks/c5M_NGkN.js","_app/immutable/chunks/B7HchEDC.js"];
export const stylesheets = [];
export const fonts = [];
