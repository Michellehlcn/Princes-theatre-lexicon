import { cleanup } from "@testing-library/react";
import api from "./api/Api";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

afterEach(() => {
  cleanup();
});
let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Component: App", () => {
  it("should display movie", async () => {
    // mock the API calls
    jest.spyOn(api, "getMoviesData").mockResolvedValue({
      Provider: "Film World",
      Movies: [
        {
          Title: "test-title",
        },
      ],
    });

    // load the component with Act, because React states are getting updated.
    await act(async () => {
      ReactDOM.createRoot(container).render(<App />);
    });

    const numOfMovies = container.querySelectorAll("img").length;
    expect(numOfMovies).toBe(2);
  });
});
