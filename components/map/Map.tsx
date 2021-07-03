import { useEffect, useMemo, useRef } from "react";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import { useGeolocation } from "react-use";

export { Marker };

const DEFAULT_POSITION = { lat: 47.2186011, lng: 9.60297 };

const Map = withGoogleMap(({ children }) => {
  const map = useRef<GoogleMap>(null);

  const { latitude, longitude } = useGeolocation();

  const position = useMemo(() => {
    if (latitude == null || longitude == null) {
      return DEFAULT_POSITION;
    }
    return {
      lat: latitude,
      lng: longitude
    };
  }, [latitude, longitude]);

  useEffect(() => {
    if (!map.current || !position) {
      return;
    }
    map.current.panTo(position);
  }, [map.current, position]);

  return (
    <GoogleMap ref={map} defaultZoom={8} defaultCenter={position}>
      {children}
    </GoogleMap>
  );
});

export default Map;
