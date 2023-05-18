/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:35 PM -- May 17th, 2023
 * Project: traverseticker-api
 */

import { Story } from "./story.js";

export class StoryImage {
	
	public readonly url: URL;
	
	public readonly alt: string;
	
	public readonly relatedStory: Story;
	
}
