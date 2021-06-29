import { router } from "https://crux.land/router@0.0.3";
import React, { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function App() {
    return (
        <html>
            <head>
                <title>
                    Hi!!
                </title>
            </head>
            <body>
                Hello there, General Kenobi!
            </body>
        </html>
    )
}


addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(
        router({
            "GET@/": (_req: Request) => new Response(renderToString(<App />), {
                headers: { "content-type": "text/html; charset=utf-8" },
            }),
        })(event.request),
    );
});