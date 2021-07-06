import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  withGoogleMap,
  WithGoogleMapProps,
} from "react-google-maps";
import { useGeolocation } from "react-use";
import MapStyles from "./styles";

export { Marker };

type GeoLocation = {
  lat: number;
  lng: number;
};

type PositionRadius = {
  radius: number;
  color: string;
};

interface MapProps {
  children: ReactNode;
  onClick?: (currentPosition: GeoLocation) => void;
  activePosition?: GeoLocation;
}

const DEFAULT_POSITION = { lat: 47.2186011, lng: 9.60297 };

const CIRCLES: PositionRadius[] = [
  { radius: 1000, color: "rgba(255, 255, 255, 0.3)" },
  { radius: 3000, color: "rgba(255, 255, 255,  0.3)" },
  { radius: 5000, color: "rgba(255, 255, 255, 0.3)" },
  { radius: 10000, color: "rgba(75, 85, 5, 0.3)" },
];

const Map = withGoogleMap(
  ({ children, onClick, activePosition }: MapProps & WithGoogleMapProps) => {
    const map = useRef<GoogleMap>(null);
    const [userPosition, setUserPosition] =
      useState<GeoLocation>(DEFAULT_POSITION);
    const [activeMarkerPosition, setActiveMarkerPosition] = useState<
      GeoLocation | undefined
    >();

    const { latitude: geoLocationLat, longitude: geoLocationLng } =
      useGeolocation();

    const geoLocationEnabled = geoLocationLat && geoLocationLng;

    useEffect(() => {
      if (geoLocationLat && geoLocationLng)
        setUserPosition({ lat: geoLocationLat, lng: geoLocationLng });
    }, [geoLocationLat, geoLocationLng]);

    useEffect(() => {
      if (!map.current || !userPosition || !activeMarkerPosition) {
        return;
      }
      map.current.panTo(activeMarkerPosition || userPosition);
    }, [map, userPosition, activeMarkerPosition]);

    return (
      <GoogleMap
        ref={map}
        defaultZoom={activePosition ? 15 : 11}
        defaultCenter={activePosition || userPosition}
        defaultOptions={{
          disableDefaultUI: true,
          styles: MapStyles,
          streetViewControl: true,
          mapTypeId: "terrain",
        }}
        onClick={(pos) => {
          const { latLng } = pos;
          const geoPosition = { lat: latLng.lat(), lng: latLng.lng() };
          setActiveMarkerPosition(geoPosition);

          onClick && onClick(geoPosition);
        }}
      >
        {geoLocationEnabled &&
          CIRCLES &&
          CIRCLES.map((circle, i) => {
            const level = i + 1;

            return (
              <Circle
                key={i}
                center={userPosition}
                defaultVisible={true}
                defaultRadius={circle.radius}
                options={{
                  fillColor: circle.color,
                  strokeWidth: 0,
                  strokeColor: "transparent",
                  zIndex: level,
                  clickable: false,
                }}
              />
            );
          })}

        {children}
      </GoogleMap>
    );
  }
);

export default Map;
