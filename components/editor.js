import { html } from "~/utils/html.js";

export class Editor extends HTMLElement {
	/** @type ShadowRoot */
	#shadowRoot;

	constructor() {
		super();
		this.#shadowRoot = this.attachShadow({ mode: "open" });
	}

	static define() {
		window.customElements.define("zp-editor", this);
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
					width: 100%;
					height: 100%;
					background-color: #1f1f1f;
					box-sizing: border-box;
				}
				pre {
					box-sizing: border-box;
					background-color: transparent;
					width: 100%;
					height: 100%;
					padding: 2rem;
					margin: 0;
					color: #efefef;
					font-size: 1.25rem;
					border: none;
					outline: none;
					resize: none;
					font-size: 2rem;
				}
			</style>
			<code>
				<pre contenteditable>
const userSchema = z.object({
	firstName: z.string(),
	lastName: z.string().optional(),
	age: z.coerce.number().min(18),
	occupation: z.enum(["developer", "designer", "student"])
})
				</pre>
			</code>
		`;
		this.#shadowRoot.appendChild(wrapper.content.cloneNode(true));
	}

	connectedCallback() {
		this.#render();
	}
}
