import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";

const Map = withGoogleMap(() => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  );
});

export default Map;
