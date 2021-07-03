import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";

export { Marker }

const Map = withGoogleMap(({ children }) => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {children}
    </GoogleMap>
  );
});

export default Map;
