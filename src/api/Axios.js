import axios from "axios";
import axiosRetry from 'axios-retry';


const client = axios.create({
  baseURL: "https://challenge.lexicondigital.com.au/api/v2",
  timeout: 1000, //request timeout
});

axiosRetry(client, {
  retryDelay: (retryCount, error) => {
    console.log("retryDelay()");
    if (error.response) {
      console.log("error.response: ", error.response);
      const retry_after = error.response.headers["retry-after"];
      if (retry_after) {
        console.log("retry-after: ", retry_after);
        console.log("timeout: ", client.config.timeout);
        if (retry_after <= 5) {
          return retry_after;
        } else {
          return -1;
        }
      }
    }
    return 0;
  }
});
// axiosRetry(axios, { 
//   retries: 5 ,
//   shouldResetTimeout: true,
//   retryCondition: (_error) => true,
// });

export default client;