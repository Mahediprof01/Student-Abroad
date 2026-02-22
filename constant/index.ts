
export const API_BASE_URL =
  process.env.API_BASE_URL ?? "http://localhost:8000";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const DEFAULT_QUERY = {
  page: 1,
  limit: 10,
  search: "",
};