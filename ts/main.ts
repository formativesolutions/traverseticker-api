/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:53 PM -- June 11th, 2019.
 * Project: <name>
 * 
 * <name> - <desc>
 * Copyright (C) 2022 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v<version>
 * @since v<version>
 */

import { Story } from "./story.js";

export async function main(): Promise<void> {
	
	const story: Story = await Story.fromURL(
		new URL("https://www.traverseticker.com/news/ridge45-birmley-neighborhoods-planned-to-expand/")
	);
	
	console.log("Title:", story.title);
	console.log("Author:", story.author);
	console.log("Date:", story.date.toLocaleDateString());
	console.log("URL:", story.url.href);
	console.log("Story (HTML):", story.storyContent.html);
	console.log("Story (Text):", story.storyContent.text.replace(/\n/g, "\n\n"));
	
	// console.log(JSON.stringify(story, null, 4));
	
}

main().catch(console.error);

// export { ClassName } from "./class-location";
