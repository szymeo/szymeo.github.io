export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "szymeo.github.io/_app",
	assets: new Set([".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","image.png","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.BQgwgbdg.js",app:"_app/immutable/entry/app.B4yKWkpI.js",imports:["_app/immutable/entry/start.BQgwgbdg.js","_app/immutable/chunks/KBrtSReV.js","_app/immutable/chunks/c5M_NGkN.js","_app/immutable/chunks/Dy__X4SL.js","_app/immutable/entry/app.B4yKWkpI.js","_app/immutable/chunks/c5M_NGkN.js","_app/immutable/chunks/CRiKku2L.js","_app/immutable/chunks/CWnbpHXa.js","_app/immutable/chunks/C0hwHccl.js","_app/immutable/chunks/Dy__X4SL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/szymeo.github.io/","/szymeo.github.io/about_me","/szymeo.github.io/blog","/szymeo.github.io/movies","/szymeo.github.io/projects"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
