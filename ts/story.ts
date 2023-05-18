/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:25 PM -- May 17th, 2023
 * Project: traverseticker-api
 */

import { JSDOM } from "jsdom";
import { StoryImage } from "./story-image.js";
import type { Content, Link } from "./content.js";
import { getTextContentOf } from "./get-text-content-of.js";
import { type Byline, parseByline } from "./parse-byline.js";

export class Story {
	
	protected static readonly TITLE_SELECTOR: string =
		"#newspageTextBox > h1[itemprop=headline]:first-of-type";
	
	protected static readonly BYLINE_SELECTOR: string =
		"#newspageTextBox > h6:first-of-type";
	
	protected static readonly STORY_SELECTOR: string =
		"#newspageTextBox > span[itemprop=articleBody]";
	
	/**
	 * The URL that points to the page containing this story.
	 * 
	 * @type {URL}
	 */
	public readonly url: URL;
	
	/**
	 * The title of this story.
	 * 
	 * @type {string}
	 */
	public readonly title: string;
	
	/**
	 * The name of the author of this story, or undefined if there is no author
	 * for this story.
	 * 
	 * @type {string | undefined}
	 */
	public readonly author: string | undefined;
	
	/**
	 * The date that this story was published.
	 * 
	 * @type {Date}
	 */
	public readonly date: Date;
	
	/**
	 * The image that is associated with this story.
	 * 
	 * @type {StoryImage}
	 */
	public readonly image: StoryImage;
	
	/**
	 * The story itself, represented in multiple formats.
	 * 
	 * @type {Content}
	 */
	public readonly storyContent: Content;
	
	/**
	 * The full, unmodified HTML of the page for this story.
	 * @type {string}
	 */
	public readonly fullHTML: string;
	
	protected constructor(
		url: URL,
		title: string,
		author: string | undefined,
		date: Date,
		storyContent: Content,
		fullHTML: string,
	) {
		
		this.url = url;
		this.title = title;
		this.author = author;
		this.date = date;
		this.storyContent = storyContent;
		this.fullHTML = fullHTML;
		
	}
	
	public static async fromURL(
		url: string | URL,
	): Promise<Story> {
		
		// Sanitize the given URL.
		const target: URL = (typeof url === "string") ? new URL(url) : url;
		
		// Fetch the page.
		const response: Response = await fetch(target);
		
		// Get the full HTML of the page.
		const fullHTML: string = await response.text();
		
		// Use JSDOM to construct a virtual DOM from the HTML.
		const dom: JSDOM = new JSDOM(fullHTML);
		
		const title: string = getTextContentOf(dom, this.TITLE_SELECTOR);
		
		const byline: string = getTextContentOf(dom, this.BYLINE_SELECTOR);
		
		const {
			author,
			date,
		}: Byline = parseByline(byline);
		
		const storyContainer: Element | null = dom.window.document.querySelector(
			this.STORY_SELECTOR,
		);
		
		if (storyContainer === null) {
			
			throw new Error(
				`Could not find story content in the page at ${url}.`,
			);
			
		}
		
		const storyHTML: string = storyContainer.outerHTML;
		const storyText: string = storyContainer.textContent as string;
		const storyMarkdown: string = "";
		const sections: Record<string, Content> = {};
		const links: Link[] = [...storyContainer.querySelectorAll("a")].map(
			(link: HTMLAnchorElement): Link => ({
				text: link.textContent as string,
				url: new URL(link.href),
			})
		);
		
		// const headers = dom.window.document.querySelectorAll(
		// 	`${this.STORY_SELECTOR} > p > strong:first-child`,
		// );
		
		return new Story(
			target,
			title,
			author,
			date,
			new Content(
				storyHTML,
				storyText,
				storyMarkdown,
				sections,
				links,
			),
			fullHTML,
		);
		
	}
	
}
