export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/lg-thumbnail.css","css/lg-zoom.css","css/lightgallery-bundle.min.css","css/lightgallery.css","data/channel.json","data/playlists/PL8jttWWzHosdua7pqiz8udkUOeBVBcipc.json","data/playlists/PL8jttWWzHosfGqAmJjE-Sh50dQGe-ELQX.json","data/playlists/PL8jttWWzHosfpewgVCOFayIvf4QPGv1X5.json","data/playlists.json","data/profile.json","favicon.png","fonts/lg.svg","fonts/lg.ttf","fonts/lg.woff","fonts/lg.woff2"]),
	mimeTypes: {".css":"text/css",".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.52c94814.js","app":"_app/immutable/entry/app.e402f41f.js","imports":["_app/immutable/entry/start.52c94814.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/singletons.eb9d64f9.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.e402f41f.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		routes: [
			{
				id: "/live-now/[playlistId]",
				pattern: /^\/live-now\/([^/]+?)\/?$/,
				params: [{"name":"playlistId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/playlists/[playlistId]",
				pattern: /^\/playlists\/([^/]+?)\/?$/,
				params: [{"name":"playlistId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/playlists/[playlistId]/[videoId]",
				pattern: /^\/playlists\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"playlistId","optional":false,"rest":false,"chained":false},{"name":"videoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
