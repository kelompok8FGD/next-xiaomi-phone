"use client";

import axios from "axios";

const apiUrl = process.env.API_URL;

export const getApiPoco = async () => {
  const response = await axios.get({ apiUrl });
  console.log({ pocoList: response });
};
