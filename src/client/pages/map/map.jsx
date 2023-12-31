import React, { useState } from "react";
import osmProvider from "./osm-provider";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {Icon} from "leaflet";

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 1.248357 });
  const Zoom_LEVEL = 2;
  const mapRef = useRef();
  const navigate = useNavigate();

  const customIcon = new Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/128/6717/6717652.png",
    iconSize: [35, 35]
  })

  const markers = [
    {
      geocode: [19.432608, -99.133209],
      popUp: "mexican",
    },
    {
      geocode: [35.8617, 104.1954],
      popUp: "chinese",
    },
    {
      geocode: [20.5937, 78.9629],
      popUp: "indian",
    },
    {
      geocode: [41.8719, 12.5674],
      popUp: "italian",
    },
    {
      geocode: [39.0742, 21.8243],
      popUp: "mediterranean",
    },
    {
      geocode: [35.9078, 127.7669],
      popUp: "Korean",
    },
    {
      geocode: [15.87, 100.9925],
      popUp: "thai",
    },
    {
      geocode: [18.1096, -77.2975],
      popUp: "jamaican",
    },
    {
      geocode: [4.5709, -74.2973],
      popUp: "colombian",
    },
    {
      geocode: [-14.2350, -51.9253],
      popUp: "brazilian",
    },
    {
      geocode: [37.0902, -95.7129],
      popUp: "american",
    },
    {
      geocode: [62.1282, 15.6435],
      popUp: "swedish",
    },
    {
      geocode: [-30.5595, 22.9375],
      popUp: "south african",
    },
  ];
  const handleMarkerClick = (index) => {
    navigate(`/categories/${index}`);
  };
  return (
    <>
      <div className="row min-h-screen">
        <div className="col text-center">
          <h1>The Tasty Table Map</h1>
          <p>The Flavors are out of this world!</p>
          <div className="col">
            <MapContainer center={center} zoom={Zoom_LEVEL}>
              <TileLayer
              noWrap={true}
                url={osmProvider.maptiler.url}
                attribution={osmProvider.maptiler.attribution}
              />
              {markers.map((marker, index) => (
                <Marker
                  key={marker.popUp}
                  position={marker.geocode}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => handleMarkerClick(marker.popUp),
                  }}
                >
                  <Popup>Marker {index}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicMap;
