

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.VQCk89ba.js","_app/immutable/chunks/CWnbpHXa.js","_app/immutable/chunks/c5M_NGkN.js","_app/immutable/chunks/B7HchEDC.js"];
export const stylesheets = [];
export const fonts = [];
