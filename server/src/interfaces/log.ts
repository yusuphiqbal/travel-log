export default interface Log {
  title: string;
  description?: string;
  comments?: string;
  rating?: number;
  longitude: number;
  latitude: number;
  startDate: Date;
  endDate: Date;
  visitDate: Date;
  image?: string;
}
