import * as universal from '../entries/pages/playlists/_playlistId_/_videoId_/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/playlists/_playlistId_/_videoId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/playlists/[playlistId]/[videoId]/+page.ts";
export const imports = ["_app/immutable/nodes/6.9b2a4521.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js"];
export const stylesheets = ["_app/immutable/assets/6.bc64bcb8.css"];
export const fonts = [];
