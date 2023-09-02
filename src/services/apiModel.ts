import axios from "axios";

export const apiModel = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros/marcas"
})