import axios from "axios";

export const baseURL: string = "https://pokeapi.co/api/v2";
export const api = axios.create({
  baseURL,
});
