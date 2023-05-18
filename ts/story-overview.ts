/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:25 PM -- May 17th, 2023
 * Project: traverseticker-api
 */

export class StoryOverview {
	
	/**
	 * The URL that points to the page containing the full story.
	 * 
	 * @type {URL}
	 */
	public readonly url: URL;
	
	/**
	 * The title of the story.
	 * 
	 * @type {string}
	 */
	public readonly title: string;
	
	/**
	 * The name of the author of the story.
	 * 
	 * @type {string}
	 */
	public readonly author: string;
	
	/**
	 * The date that the story was published.
	 * 
	 * @type {Date}
	 */
	public readonly date: Date;
	
	/**
	 * A short preview of the story.
	 * 
	 * This is the text that is displayed when the story is shown in a list of
	 * stories.
	 * 
	 * @type {string}
	 */
	public readonly preview: string;
	
}
