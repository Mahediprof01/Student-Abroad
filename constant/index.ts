const rawApiBaseUrl = process.env.API_BASE_URL?.trim();
export const API_BASE_URL = rawApiBaseUrl || "http://localhost:3002";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001";

export const DEFAULT_QUERY = {
  page: 1,
  limit: 10,
  search: "",
};
