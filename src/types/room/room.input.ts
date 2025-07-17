export interface RoomInput {
  name: string;
  location: string;
  capacity: number;
  isAC?: boolean;
  amenities?: string[];
}
