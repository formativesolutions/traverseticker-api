/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 1:44 AM -- May 18th, 2023
 * Project: traverseticker-api
 */

/**
 * The name of the environment variable that can be used to override the base
 * URL for the Traverse Ticker website.
 * 
 * @type {string}
 */
const ENVIRONMENT_VARIABLE_NAME: string = "TRAVERSE_TICKER_BASE_URL";

/**
 * The default base URL for the Traverse Ticker website.
 * 
 * @type {URL}
 */
const DEFAULT_BASE_URL: URL = new URL("https://www.traverseticker.com/");

/**
 * Returns the base URL for the Traverse Ticker website.
 * 
 * If the environment variable `TRAVERSE_TICKER_BASE_URL` is set, its value will
 * be returned as the base URL.
 * 
 * @returns {URL} The base URL for the Traverse Ticker website.
 */
export function getBaseURL(): URL {
	
	if (ENVIRONMENT_VARIABLE_NAME in process.env) {
		
		return new URL(process.env[ENVIRONMENT_VARIABLE_NAME] as string);
		
	} else return DEFAULT_BASE_URL;
	
}
