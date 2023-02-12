import { html } from "~/utils/html.js";

export class Result extends HTMLElement {
	/** @type ShadowRoot */
	#shadowRoot;

	constructor() {
		super();
		this.#shadowRoot = this.attachShadow({ mode: "open" });
	}

	static define() {
		window.customElements.define("zp-result", this);
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
					box-sizing: border-box;
					background-color: #1f1f1f;
					padding: 2rem;
					color: #efefef;
				}
				h1 {
					font-family: sans-serif;
					margin: 0;
				}
			</style>
			<h1>Result goes here</h1>
		`;
		this.#shadowRoot.appendChild(wrapper.content.cloneNode(true));
	}

	connectedCallback() {
		this.#render();
	}
}
