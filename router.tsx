import { router } from "https://crux.land/router@0.0.3";
import React, { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";
import App from "./components/App.tsx"


addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(
        router({
            "GET@/": (_req: Request) => new Response(renderToString(<App />), {
                headers: { "content-type": "text/html; charset=utf-8" },
            }),
        })(event.request),
    );
});