import axios from "axios";

const viaCepapi = axios.create({
  baseURL: "https://viacep.com.br/ws",
});

export default viaCepapi;
