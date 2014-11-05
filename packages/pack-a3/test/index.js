"use strict";
process.env.DEBUG = process.env.DEBUG||"pack:*";

console.log("\n-----sort test-----");
require('./test_sort');

console.log("\n-----where test-----");
require('./test_where');
