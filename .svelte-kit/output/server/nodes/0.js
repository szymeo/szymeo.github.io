import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D7Jr875O.js","_app/immutable/chunks/CWnbpHXa.js","_app/immutable/chunks/c5M_NGkN.js","_app/immutable/chunks/CRiKku2L.js","_app/immutable/chunks/DHhd4Gca.js","_app/immutable/chunks/CueMMR2E.js","_app/immutable/chunks/wFP5K15O.js","_app/immutable/chunks/KBrtSReV.js","_app/immutable/chunks/Dy__X4SL.js","_app/immutable/chunks/C0hwHccl.js"];
export const stylesheets = ["_app/immutable/assets/0.BK7NulLX.css"];
export const fonts = [];
