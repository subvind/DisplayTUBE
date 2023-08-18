

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.92eade86.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/chunks/singletons.094db50d.js"];
export const stylesheets = [];
export const fonts = [];
