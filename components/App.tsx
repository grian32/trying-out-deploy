import React, { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import Head from "./Head.tsx";
import CurrentTime from "./CurrentTime.tsx"

export default function App() {
    return (
        <html>
            <Head/>
            <body>
                <p> Hi! </p>

                <p>You loaded this page at: </p>
                <CurrentTime />
            </body>
        </html>
    )
}