const fs = require("fs");
const performance = require("perf_hooks");

var startTime, endTime;

export function outputToFile(
  input: string,
  output: string,
  elapsedTime: string
) {
  const object = {
    input: input,
    output: output,
    duration: elapsedTime + " ms",
  };
  const jsonString = JSON.stringify(object, null, 2);
  fs.writeFile("./processed.json", jsonString, (err: string) => {
    if (err) {
      console.log("Error writing to file", err);
    }
  });
}

export function convertInput(str: string) {
  if (!isAlphanumeric(str)) {
    return null;
  } else {
    var converted = str.split("").reverse();
    for (var i = 0; i < converted.length; i++) {
      var char: string = converted[i];
      converted[i] =
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }
    return converted.join("");
  }
}

export function isAlphanumeric(str: string) {
  return str.match(/^[a-zšćčžđ0-9]+$/i); // check upper & lower & number & čžšćđ
}

export function start(input: string) {
  startTime = process.uptime();
  input = input.toString().trim();
  var output = convertInput(input);
  if (output != null) {
    endTime = process.uptime();
    var duration = (endTime - startTime) * 1000;
    console.log("Succesfull conversion, check output file!");
    return outputToFile(input, output, duration.toFixed(5));
  } else {
    return console.log(
      "Invalid: input not alphanumeric!\nEnter another alphanumeric value: "
    );
  }
}

var stdin = process.stdin;
console.log("Enter an alphanumeric value: ");
stdin.addListener("data", function (input: string) {
  start(input);
});
