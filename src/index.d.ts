export interface ParsedLink{url:string;params:Record<string,string>;}
export function parseLinkHeader(value:string):ParsedLink[];
export function linksByRel(value:string):Record<string,string>;

