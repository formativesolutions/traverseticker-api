/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:48 PM -- May 17th, 2023
 * Project: traverseticker-api
 */

import type { JSDOM } from "jsdom";

/**
 * Returns the text content of the first element found in the given DOM that
 * matches the given selector.
 * 
 * @param {JSDOM} dom The DOM to search.
 * @param {string} selector The selector to use to find the element.
 * @returns {string} The text content of the element.
 * @throws {Error} If no element is found with the given selector.
 */
export function getTextContentOf(dom: JSDOM, selector: string): string {
	
	const result: string | null | undefined =
		dom.window.document.querySelector(selector)?.textContent;
	
	if (result === null || result === undefined) {
		
		throw new Error(
			`Could not find element with selector "${selector}".`,
		);
		
	}
	
	return result.trim();
	
}
