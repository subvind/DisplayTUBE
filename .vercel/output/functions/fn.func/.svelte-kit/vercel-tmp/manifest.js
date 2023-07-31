export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/lg-thumbnail.css","css/lg-zoom.css","css/lightgallery-bundle.min.css","css/lightgallery.css","data/channel.json","data/playlists/PL8jttWWzHosdua7pqiz8udkUOeBVBcipc.json","data/playlists/PL8jttWWzHosfGqAmJjE-Sh50dQGe-ELQX.json","data/playlists/PL8jttWWzHosfpewgVCOFayIvf4QPGv1X5.json","data/playlists/PLtoxeJ0aVT6439FE_bi147_Unbm9lnvs5.json","data/playlists/PLtoxeJ0aVT64Iisp8yIKsuUQi6ZJVV0OT.json","data/playlists/PLtoxeJ0aVT64nNSz7QnXp8G21nppHVLTB.json","data/playlists/PLtoxeJ0aVT65O6h4J_qDsWbOIY43ofvg1.json","data/playlists/PLtoxeJ0aVT65WglaX_7xgHPMW-XvgTz1E.json","data/playlists/PLtoxeJ0aVT65ttbULyskL3U-O9ugmNKiO.json","data/playlists/PLtoxeJ0aVT66PItrb9U33t6BM1z4KxL2-.json","data/playlists/PLtoxeJ0aVT66PjdmRzdCKZJV7OsnUFbNi.json","data/playlists/PLtoxeJ0aVT66lQb1SDTYGwRvT8y9vIDLP.json","data/playlists/PLtoxeJ0aVT6705WjpXjV1y-WO_l3sUnR5.json","data/playlists/PLtoxeJ0aVT670BoNcI9x70HeKixrgoQ2Y.json","data/playlists/PLtoxeJ0aVT67p3i-nUKoyL-n9m9KOFtWo.json","data/playlists/PLtoxeJ0aVT67pzPlrvNVfPedtJv4vPBOj.json","data/playlists.json","data/profile.json","favicon.png","fonts/lg.svg","fonts/lg.ttf","fonts/lg.woff","fonts/lg.woff2"]),
	mimeTypes: {".css":"text/css",".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.7fb1dc83.js","app":"_app/immutable/entry/app.1119a4ce.js","imports":["_app/immutable/entry/start.7fb1dc83.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/singletons.73079016.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.1119a4ce.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js"],"stylesheets":[],"fonts":[]},
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
