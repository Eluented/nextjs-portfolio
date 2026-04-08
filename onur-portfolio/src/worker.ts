export default {
	async fetch(request: Request, env: { ASSETS: Fetcher }): Promise<Response> {
		const response = await env.ASSETS.fetch(request);

		if (response.status !== 404) {
			return response;
		}

		const url = new URL(request.url);
		if (url.pathname !== "/" && !url.pathname.includes(".")) {
			return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
		}

		return response;
	},
};