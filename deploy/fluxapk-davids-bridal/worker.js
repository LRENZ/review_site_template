const ORIGIN = "https://www.branddragon.net";

export default {
  async fetch(request) {
    if (!["GET", "HEAD"].includes(request.method)) {
      return new Response("Method not allowed", { status: 405 });
    }
    const url = new URL(request.url);
    const isOffer = ["/", "/offer/davids-bridal", "/offer/davids-bridal/", "/branddragon/offer/davids-bridal"].includes(url.pathname);
    const isAsset = url.pathname.startsWith("/branddragon/_next/") ||
      /^\/branddragon\/davids-bridal-[a-z-]+\.jpg$/.test(url.pathname);
    if (!isOffer && !isAsset) return Response.redirect(ORIGIN + url.pathname + url.search, 302);
    const upstreamPath = isOffer ? "/branddragon/offer/davids-bridal" : url.pathname;
    const upstream = await fetch(ORIGIN + upstreamPath + url.search, {
      method: request.method,
      redirect: "follow",
    });
    const headers = new Headers(upstream.headers);
    headers.set("X-Robots-Tag", "noindex, follow");
    return new Response(upstream.body, { status: upstream.status, headers });
  },
};
