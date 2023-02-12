/**
 * A utility to minify the provided HTML. This is also a trick to enable syntax highlighting on vscode
 * @param {string} content The HTML content
 */
export const html = (/** @type string[] */ content) => {
	// this is a budget minifier, it works for this particular app but shouldn't be used for complex html
	const minified = content
		.join("")
		// TODO(elianiva): remove this two for the time being until we have a proper monaco-editor integration
		// .replace(/^\s+/gm, " ") // remove leading indentation
		// .replace(/\n/g, "") // remove newlines
		.replace(/>(\s+)</g, "><"); // remove whitespace between tags
	return minified;
};
