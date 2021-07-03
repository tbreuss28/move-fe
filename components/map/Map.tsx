import { useEffect, useMemo, useRef } from "react";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import { useGeolocation } from "react-use";

export { Marker };

const DEFAULT_POSITION = { lat: 47.2186011, lng: 9.60297 };

const exampleMapStyles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#232c33",
      },
      {
        lightness: 80,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
      {
        lightness: 30,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#bddd0e",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 0,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#4E77E7",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#BDDD0E",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#dedede",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#4e77e7",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#f2f2f2",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#F5F5F5",
      },
      {
        lightness: 100,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
];

const Map = withGoogleMap(({ children }) => {
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
  }, [map.current, position]);

  return (
    <GoogleMap
      ref={map}
      defaultZoom={10}
      defaultCenter={position}
      defaultOptions={{
        disableDefaultUI: true,
        styles: exampleMapStyles,
      }}
    >
      {children}
    </GoogleMap>
  );
});

export default Map;
