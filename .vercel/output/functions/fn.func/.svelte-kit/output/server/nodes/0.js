import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.342332c4.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js"];
export const stylesheets = ["_app/immutable/assets/0.e3f78a6d.css"];
export const fonts = [];
