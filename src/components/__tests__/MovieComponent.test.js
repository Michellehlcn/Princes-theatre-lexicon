import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import MovieComponent from "../MovieComponent";
import { Poster, Price, Title, cinemaWorldPrice } from "../MovieComponent";

afterEach(() => {
  cleanup();
});

test("should render filmWorld or cinemaWorld", () => {
  const movie = { Poster, Price, Title, cinemaWorldPrice };
  render(<MovieComponent movie={movie} />);
  const movieComponentElement = screen.getByTestId("movieComponent-1");
  expect(movieComponentElement).toBeInTheDocument();
  expect(movieComponentElement).toHaveTextContent("FilmWorld:CinemaWorld:");
  expect(movieComponentElement).toContainHTML("<span>");
});

test("matches snapshot", () => {
  const movie = { Poster, Price, Title, cinemaWorldPrice };
  const tree = renderer.create(<MovieComponent movie={movie} />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
