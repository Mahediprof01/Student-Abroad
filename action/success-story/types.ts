export interface ApiSuccessStory {
  _id: string;
  id?: string;
  type: "image" | "video";
  title?: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  status: "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}
