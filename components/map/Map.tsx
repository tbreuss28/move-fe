import { ReactNode } from "react";
import GoogleMapReact from "google-map-react";
import type { GeoLocation } from "./types";
export { default as MoveMarker, MovePin } from "./components/MoveMarker";
import MapStyles from "./styles";
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
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
      defaultCenter={activePosition || defaultCenter}
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
      {children}
    </GoogleMapReact>
  );
};

export default MoveMap;
