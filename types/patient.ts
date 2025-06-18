interface Patient {
  name: string;
  image: string;
}

// Define the Review type
export interface IReview {
  id: string;
  patient: Patient;
  rating: number;
  comment: string;
  createdAt?: string;
  updatedAt?: string;
}
