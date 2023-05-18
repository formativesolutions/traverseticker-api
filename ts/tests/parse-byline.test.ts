/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:12 AM -- May 18th, 2023
 * Project: traverseticker-api
 */

import { type Byline, parseByline } from "../parse-byline";

test("basic byline", (): void => {
	
	const byline: Byline = parseByline("by Trevor Sears May 17, 2023");
	
	expect(byline.author).toBe("Trevor Sears");
	expect(byline.date).toEqual(new Date("May 17, 2023"));
	
});

test("byline with date and extra spaces", (): void => {
	
	const byline: Byline = parseByline("by Trevor Sears    May 17, 2023");
	
	expect(byline.author).toBe("Trevor Sears");
	expect(byline.date).toEqual(new Date("May 17, 2023"));
	
});

// test missing author
test("byline with date and missing author", (): void => {
	
	const byline: Byline = parseByline("May 17, 2023");
	
	expect(byline.author).toBeUndefined();
	expect(byline.date).toEqual(new Date("May 17, 2023"));
	
});

test("byline with missing date should throw error", (): void => {
	
	expect((): any => parseByline("by Trevor Sears")).toThrow();
	
});
