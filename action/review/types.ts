/** Review type matching what the backend returns */
export interface ApiReview {
  _id: string;
  name: string;
  university: string;
  quote: string;
  rating: number;
  status: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}
