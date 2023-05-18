/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:47 PM -- May 17th, 2023
 * Project: traverseticker-api
 */

import { Story } from "../story";

// test that the fromURL function is working as expected
test("TraverseTickerStory.fromURL() works as expected", async () => {
	
	// create a new TraverseTickerStory object
	const story: Story = await Story.fromURL(
			new URL("https://www.traverseticker.com/news/glendale-opening-new-restaurant-riverwalk-grill-under-new-ownership-more-restaurantretail-news/"),
		);
	
	// test that the story object has the correct properties
	expect(story.url).toEqual(new URL("https://www.traverseticker.com/news/glendale-opening-new-restaurant-riverwalk-grill-under-new-ownership-more-restaurantretail-news/"));
	expect(story.title).toEqual("Glendale Opening New Restaurant, Riverwalk Grill Under New Ownership, More Restaurant/Retail News");
	expect(story.author).toEqual("Beth Milligan");
	expect(story.date).toEqual(new Date("May 17, 2023"));
	// expect(story.storyHTML).toEqual();
	// expect(story.fullHTML).toEqual();
	
});
