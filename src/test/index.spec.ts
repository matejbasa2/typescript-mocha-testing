import { expect } from "chai";
import { convertInput, isAlphanumeric, outputToFile } from "../index";
import { describe } from "mocha";

const fs = require("fs");
const input = "32r3Rt2š4t3švvđBDTB3cf44cFG980xnU";
const output = "uNX089gfC44FC3btdbĐVVŠ3T4Š2Tr3R23";

describe("Mocha Tests", () => {
  describe("check input (isAlphanumeric)", () => {
    it("should recognize non-alphanumeric", () => {
      const result = isAlphanumeric(input + " ");
      expect(result).to.be.null;
    });
    it("should recognize alphanumeric", () => {
      const result = isAlphanumeric(input);
      expect(result?.length).to.be.greaterThan(0);
    });
  });
  describe("check if proper conversion (convertInput)", () => {
    it("should convert valid input", function () {
      const result = convertInput(input);
      expect(result).to.eql(output);
    });
    it("shouldn't convert invalid input", function () {
      const result = convertInput("m a t e j");
      expect(result).to.be.null;
    });
  });
  describe("check output file (outputToFile)", () => {
    it("created output file (exists)", function () {
      const result = outputToFile(input, output, "0.001");
      expect(fs.existsSync("processed.json")).to.be.true;
    });
    it("output file has correct content", function () {
      var expected = { input: input, output: output, duration: "0.001 ms" };
      let rawdata = fs.readFileSync("processed.json");
      let processed = JSON.parse(rawdata);
      expect(processed).to.include(expected);
    });
  });
});
