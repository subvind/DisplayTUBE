import * as universal from '../entries/pages/playlists/_playlistId_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/_playlistId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/playlists/[playlistId]/+page.ts";
export const imports = ["_app/immutable/nodes/5.295b7aa7.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/lg-zoom.es5.d5e898e1.js"];
export const stylesheets = ["_app/immutable/assets/5.55640b27.css"];
export const fonts = [];
