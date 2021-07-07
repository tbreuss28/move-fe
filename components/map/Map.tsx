import { useState, useEffect, ReactNode } from "react";
import GoogleMapReact from "google-map-react";
import type { GeoLocation } from "./types";
import { useGeolocation } from "react-use";
export { default as MoveMarker, MovePin } from "./components/MoveMarker";
import MapStyles from "./styles";
import { Box } from "@chakra-ui/layout";
interface MoveMapProps {
  defaultCenter?: GeoLocation;
  defaultZoom?: number;
  onClick?: (position: GeoLocation) => void;
  children?: ReactNode;
  activePosition?: GeoLocation;
}

const DEFAULT_POSITION = { lat: 47.2186011, lng: 9.60297 };
const GOOGLE_MAPS_API_KEY = "AIzaSyBt76jCSsN2z52-QKicoWFCuRG7UDVSe8U";

const MoveMap = ({
  defaultCenter = DEFAULT_POSITION,
  defaultZoom = 13,
  activePosition,
  onClick,
  children,
}: MoveMapProps) => {
  const [userPosition, setUserPosition] =
    useState<GeoLocation>(DEFAULT_POSITION);

  const { latitude: geoLocationLat, longitude: geoLocationLng } =
    useGeolocation();

  const geoLocationEnabled = (geoLocationLat && geoLocationLng) || false;

  useEffect(() => {
    if (geoLocationLat && geoLocationLng)
      setUserPosition({ lat: geoLocationLat, lng: geoLocationLng });
  }, [geoLocationLat, geoLocationLng]);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultCenter}
      center={activePosition || userPosition}
      defaultZoom={defaultZoom}
      onClick={(mapData) =>
        onClick && onClick({ lat: mapData.lat, lng: mapData.lng })
      }
      options={{
        disableDefaultUI: true,
        styles: MapStyles,
        streetViewControl: true,
        mapTypeId: "terrain",
      }}
    >
      {geoLocationEnabled && (
        <Box
          lat={userPosition.lat}
          lng={userPosition.lng}
          width="4"
          height="4"
          borderRadius="full"
          background="primary.300"
          opacity={0.8}
          transform={"translate(-50%, -50%)"}
        />
      )}
      {children}
    </GoogleMapReact>
  );
};

export default MoveMap;
