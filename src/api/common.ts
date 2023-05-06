import axios from "axios";

const graphQlApi = axios.create({
  method: "POST",
  url: "http://localhost:3000/graphql",
});

export { graphQlApi };
