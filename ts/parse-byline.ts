/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:54 PM -- May 17th, 2023
 * Project: traverseticker-api
 */

/**
 * An object containing a date and the name of an author.
 * 
 * @see {parseByline}
 */
export type Byline = {
	author?: string;
	date: Date;
}

/**
 * A regular expression that matches a byline string.
 * 
 * @type {RegExp}
 */
const BYLINE_REGULAR_EXPRESSION: RegExp =
	/^(?:by\s+)?\s*(?<author>[a-z]+(?:\s+[a-z]+))?.*?(?<date>(?<month>[a-z]+)\s+(?<day>\d+)[a-z]*?,?\s+(?<year>\d+))?\s*$/sui;

/**
 * Returns an object containing the author and date parsed from the given
 * byline string.
 * 
 * @param {string} byline The byline string to parse.
 * @returns {Byline} An object containing the author and date.
 */
export function parseByline(byline: string): Byline {
	
	const parsedByline: RegExpExecArray | null =
		BYLINE_REGULAR_EXPRESSION.exec(byline);
	
	if (parsedByline === null) {
		
		throw new Error(`Could not parse byline: "${byline}"`);
		
	}
	
	const author: string | undefined = parsedByline.groups?.author;
	const month: string | undefined = parsedByline.groups?.month;
	const day: string | undefined = parsedByline.groups?.day;
	const year: string | undefined = parsedByline.groups?.year;
	
	const isBylineBad: boolean = [month, day, year].some(
		(value: string | undefined): boolean => value === undefined,
	);
	
	if (isBylineBad) {
		
		throw new Error(`Missing date information from byline: "${byline}"`);
		
	}
	
	const date: Date = new Date(`${month} ${day}, ${year}`);
	
	return { author, date };
	
}
