import { html } from "~/utils/html.js";

// components
import { Container } from "~/components/container.js";
import { Editor } from "~/components/editor.js";
import { Result } from "~/components/result.js";
import { Navbar } from "~/components/navbar.js";

// add custom components here before using it
const components = [Container, Editor, Result, Navbar];
for (const Component of components) {
	Component.define();
}

// render to the main container
const outlet = document.querySelector("zp-outlet");
const outletShadowRoot = outlet.attachShadow({ mode: "open" });
outletShadowRoot.innerHTML = html`<zp-container></zp-container>`;
