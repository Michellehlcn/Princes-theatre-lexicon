import axios from "./Axios";

const apiKey = "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7";

//inserts theatre into url
const getMoviesData = async (theater) => {
  try {
    const { status, data } = await axios.get(`/${theater}world/movies`, {
      headers: {
        "x-api-key": apiKey,
      },
    });
    //check if response is ok and return data
    if (status === 200 || status === 201) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(`error`, error.response.data);
    return null;
  }
};

export default { getMoviesData };
