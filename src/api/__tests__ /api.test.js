import api from "../Api";
import axios from "../Axios";

describe.only("getMoviesData", () => {
  it("should return success response for filmworld", async () => {
    //needs status or will return null
    jest.spyOn(axios, "get").mockResolvedValue({
      status: 200,
      data: {
        Movies: [{ Title: "Star Wars: Episode VII - The Force Awakens" }],
      },
    });
    // calling the function under test
    const response = await api.getMoviesData("filmworld");
    // test assertions
    expect(response.Movies[0].Title).toBe(
      "Star Wars: Episode VII - The Force Awakens"
    );
  });

  it("should return success response", async () => {
    //  mock external axios dependency for error response
    jest.spyOn(axios, "get").mockRejectedValue({
      response: { data: "error" },
    });

    try {
      // calling the function under test
      await api.getMoviesData("film");
    } catch (error) {
      // test assertions
      expect(error).toBe("error");
    }
  });
});
