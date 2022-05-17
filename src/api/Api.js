import client from "./Axios";

const apiKey = process.env.REACT_APP_MY_API_KEY;

//inserts theatre into url
const getMoviesData = async (theater) => {
  try {
    const { status, data } = await client.get(`/${theater}world/movies`, {
      headers: {
        "x-api-key": apiKey,
      },
    });
    //check if response is ok and return data
    if (status === 200 || status === 201) {
      console.log('YES It get through');
      console.log(data);
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
