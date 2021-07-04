import { ReactNode, useEffect, useMemo, useRef } from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  WithGoogleMapProps,
} from "react-google-maps";
import { useGeolocation } from "react-use";
import MapStyles from "./styles";

export { Marker };

const DEFAULT_POSITION = { lat: 47.2186011, lng: 9.60297 };

interface MapProps {
  children: ReactNode;
  onClick?: (currentPosition: { latitude: number; longitude: number }) => void;
}

const Map = withGoogleMap(
  ({ children, onClick }: MapProps & WithGoogleMapProps) => {
    const map = useRef<GoogleMap>(null);

    const { latitude, longitude } = useGeolocation();

    const position = useMemo(() => {
      if (latitude == null || longitude == null) {
        return DEFAULT_POSITION;
      }
      return {
        lat: latitude,
        lng: longitude,
      };
    }, [latitude, longitude]);

    useEffect(() => {
      if (!map.current || !position) {
        return;
      }
      map.current.panTo(position);
    }, [map, position]);

    return (
      <GoogleMap
        ref={map}
        defaultZoom={10}
        defaultCenter={position}
        defaultOptions={{
          disableDefaultUI: true,
          styles: MapStyles,
          streetViewControl: true,
          mapTypeId: "terrain",
        }}
        onClick={(pos) => {
          const { latLng } = pos;

          onClick &&
            onClick({
              latitude: latLng.lat(),
              longitude: latLng.lng(),
            });
        }}
      >
        {children}
      </GoogleMap>
    );
  }
);

export default Map;
