import React from "react";

import { render } from "react-testing-library";

import App from "../src/App";
describe("App ", () => {
  it("Runs and passes", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
