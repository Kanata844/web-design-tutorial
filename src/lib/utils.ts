import hljs from "highlight.js"

import type { Attachment } from "svelte/attachments";

export const highlightAttachment: Attachment = (element) => {
    hljs.highlightElement(element as HTMLElement);
}