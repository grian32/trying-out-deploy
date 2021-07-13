import React, { h } from "https://x.lcas.dev/preact@10.5.4/mod.js";
import Head from "./Head.tsx";
import CurrentTime from "./CurrentTime.tsx"

export default function App() {
    return (
        <html>
            <Head/>
            <body>
                <p> Hi! </p>

                <p>The current time is: </p>
                <CurrentTime />
            </body>
        </html>
    )
}