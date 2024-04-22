export interface Route {
  _id: string;
  status: string;
  name: string;
  origin: {
    name: string;
    lat: number;
    long: number;
  };
  destination: {
    name: string;
    lat: number;
    long: number;
  };
  price: number;
  capacity: number;
  departureTime: string;
  arrivalTime: string;
  id: string;
}
