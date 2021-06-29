import { router } from "https://crux.land/router@0.0.3";

addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(
        router({
            "GET@/": (_req: Request) => new Response("Hello get!", { status: 200 }),
            "POST@/": (_req: Request) => new Response("Hello post!", { status: 200 }),
        })(event.request),
    );
});