/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:22 AM -- May 18th, 2023
 * Project: traverseticker-api
 */

export type ContentTypes = {
	html: string;
	text: string;
	markdown: string;
}

export type Link = {
	text: string;
	url: URL;
}

export class Content implements ContentTypes {
	
	public readonly html: string;
	
	public readonly text: string;
	
	public readonly markdown: string;
	
	public readonly sections: Record<string, ContentTypes>;
	
	public readonly links: Link[];
	
	public constructor(
		html: string,
		text: string,
		markdown: string,
		sections: Record<string, ContentTypes>,
		links: Link[],
	) {
		
		this.html = html;
		this.text = text;
		this.markdown = markdown;
		this.sections = sections;
		this.links = links;
		
	}
	
}
