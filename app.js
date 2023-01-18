// TODO: Enable strict mode
"use strict";
// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  try {
    JSON.parse(data);
  } catch (err) {
    //If err occurrs, it auto becomes parameter.

    console.error(err);
    //Use console.error to make the err msg red.

    //Log the error then return null.

    return null;
  }
  //Try/Catch allows the code to continue running.

  return data;
}

let failData = "<h1>Hello World!</h1>";

let passData = JSON.stringify({ hello: true });
console.log(passData);
console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
