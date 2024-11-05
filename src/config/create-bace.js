import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createBace = () => {
  return fetchBaseQuery({
    baseUrl: "http://localhost:3600",
    headers: { Autorization: "Beare tokkkkkkken" },
  });
};
