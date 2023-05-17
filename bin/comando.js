#!/usr/bin/env node

import fs from "fs";
// receive the first argument from argv
const argv = process.argv.slice(2);
const text = argv[0];
console.log(text);

fs.writeFileSync(
  "/Users/marcelozapaia/src/obs-text/graph.js",
  `  
  document.getElementById("graph").innerText = "${text}";
`
);
