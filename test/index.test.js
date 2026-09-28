import test from "node:test";import assert from "node:assert/strict";import{parseLinkHeader,linksByRel}from"../src/index.js";
const h='<https://api.test?page=2>; rel="next", <https://api.test?page=5>; rel="last"';
test("parse",()=>assert.equal(parseLinkHeader(h).length,2));
test("rels",()=>assert.deepEqual(linksByRel(h),{next:"https://api.test?page=2",last:"https://api.test?page=5"}));
