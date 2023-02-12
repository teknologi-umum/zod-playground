import { html } from "~/utils/html.js";

export class Container extends HTMLElement {
	/** @type ShadowRoot */
	#shadowRoot;

	constructor() {
		super();
		this.#shadowRoot = this.attachShadow({ mode: "open" });
	}

	static define() {
		window.customElements.define("zp-container", this);
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
					display: grid;
					grid-template-rows: auto 1fr;
					grid-template-columns: 1fr 1fr;
					gap: 2rem;
					background-color: #181818;
					height: 100%;
					padding: 2rem;
				}
			</style>
			<zp-navbar></zp-navbar>
			<zp-editor></zp-editor>
			<zp-result></zp-result>
		`;
		this.#shadowRoot.appendChild(wrapper.content.cloneNode(true));
	}

	connectedCallback() {
		this.#render();
	}
}
