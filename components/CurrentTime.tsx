import React, { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { format } from "https://deno.land/std@0.101.0/datetime/mod.ts";
import { useState, useEffect } from "https://x.lcas.dev/preact@10.5.12/hooks.js";

export default function CurrentTime() {
    let date = new Date()

    return (
        <p id="parsedDate"> { format(date, "h:mm:ss a") } UTC </p>
    )
}