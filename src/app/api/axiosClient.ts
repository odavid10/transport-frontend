import axios from "axios";

// project imports
import { API_URL } from "../utils";

export const axiosClient = axios.create({
  baseURL: API_URL,
});
