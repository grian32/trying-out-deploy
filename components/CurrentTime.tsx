import React, { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { format } from "https://deno.land/std@0.101.0/datetime/mod.ts";
import { useState } from "https://x.lcas.dev/preact@10.5.12/hooks.js";

export default function CurrentTime() {
    let [date, setDate] = useState(new Date());

    setInterval(() => {
        let newDate = new Date();
        if (date <= newDate) {
            setDate(newDate);
        }
    }, 1000)

    return (
        <p id="parsedDate"> { format(date, "h:mm:ss")}</p>
    )
}