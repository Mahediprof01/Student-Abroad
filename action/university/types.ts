/** University type matching what the backend returns */
export interface ApiUniversity {
  _id: string;
  name: string;
  description: string;
  location: string;
  country: string;
  established?: number;
  type: "public" | "private";
  ranking?: number;
  tuitionFee?: string;
  website?: string;
  email?: string;
  phone?: string;
  image?: string;
  programs: string[];
  facilities: string[];
  status: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}
