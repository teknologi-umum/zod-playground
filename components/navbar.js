import { html } from "~/utils/html.js";

export class Navbar extends HTMLElement {
	/** @type ShadowRoot */
	#shadowRoot;

	constructor() {
		super();
		this.#shadowRoot = this.attachShadow({ mode: "open" });
	}

	static define() {
		window.customElements.define("zp-navbar", this);
	}

	#cleanup() {
		// reset previous content and remove unused event listener here
		this.#shadowRoot.innerHTML = "";
	}

	#render() {
		this.#cleanup();

		const wrapper = document.createElement("template");
		wrapper.innerHTML = html`
			<style>
				:host {
					grid-column: 1/3;
					box-sizing: border-box;
					background-color: #1f1f1f;
					height: 100%;
					padding: 2rem;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				h1 {
					margin: 0;
					font-size: 1.75rem;
					color: #d4d4d4;
					font-family: sans-serif;
				}
			</style>
			<h1>~ Zod Playground ~</h1>
		`;
		this.#shadowRoot.appendChild(wrapper.content.cloneNode(true));
	}

	connectedCallback() {
		this.#render();
	}
}
