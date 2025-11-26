export interface Store {
  id?: string;
  name: string;
  address: string;
  city?: string;
  coords: { lat: number; lng: number };
  type: "charity" | "nonprofit" | "independent" | "for-profit";
  cause?: string[];
  description?: string;
  website?: string;
  hours?: Record<string, string>;
  acceptsDonations?: boolean;
  impactScore?: number;
}
