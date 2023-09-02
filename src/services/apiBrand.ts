import axios from "axios";

export const apiBrand = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros"
})