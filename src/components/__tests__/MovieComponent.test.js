import { cleanup, render } from "@testing-library/react";
import MovieComponent from "../MovieComponent";

afterEach(() => {
  cleanup();
});

describe("Component: MovieComponent", () => {
  it("should display movie", () => {
    const movie = {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
      Price: 25,
      Title: "Star Wars: Episode VII - The Force Awakens",
      cinemaWorldPrice: 24.7,
    };

    // load the component with props
    const { container } = render(
      <MovieComponent movie={movie}></MovieComponent>
    );

    // assert if the output contains the title and price
    expect(
      container.textContent.includes(
        "Star Wars: Episode VII - The Force Awakens"
      )
    ).toBeTruthy();
    expect(container.textContent.includes(25)).toBeTruthy();
    expect(container.textContent.includes(24.7)).toBeTruthy();

    // assert if the output contains required image
    expect(container.querySelector("img").src).toBe(
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    );
  });
});
