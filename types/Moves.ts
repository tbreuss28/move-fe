export type Move = {
  id: string;
  name: string;
  description: string;
  position: {
    lat: number;
    lng: number;
  };
};
