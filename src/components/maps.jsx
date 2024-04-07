import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  FeatureGroup,
  LayersControl,
  Circle,
  Polygon,
} from "react-leaflet";

const MapComponent = () => {
  const center = [35.6764, 139.65];
  const rectangle = [
    [139.7533363620384, 35.67221328711432],
    [139.75587818948617, 35.671086972643764],
    [139.75904392003724, 35.67502900375517],
    [139.75590129700902, 35.67639928325207],
    [139.75465349080787, 35.67472866537973],
    [139.7533363620384, 35.67221328711432],
  ];

  return (
    <MapContainer center={[35.6764, 139.65]} zoom={13}>
      <TileLayer
        attribution="&copy; https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <LayersControl position="topright">
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        {/* Tile Layer for Flood */}
        <LayersControl.Overlay name="洪水浸水想定区域（想定最大規模）">
          <TileLayer url="https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>
        {/* Tile Layer for Flood continue time*/}
        <LayersControl.Overlay name="浸水継続時間（想定最大規模）">
          <TileLayer url="https://disaportaldata.gsi.go.jp/raster/01_flood_l2_keizoku_data/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>
        {/* Tile Layer for Tsunami */}
        <LayersControl.Overlay name="津波浸水想定">
          <TileLayer url="https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_kuni_data/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>
        {/* Tile Layer for High tide */}
        <LayersControl.Overlay name="高潮浸水想定区域">
          <TileLayer url="https://disaportaldata.gsi.go.jp/raster/03_hightide_l2_shinsuishin_data/{z}/{x}/{y}.png" />
        </LayersControl.Overlay>
        {/* Tile Layer for shadedrelief */}
        <LayersControl.Overlay name="陰影起伏図">
          <TileLayer
            url="http://cyberjapandata.gsi.go.jp/xyz/hillshademap/{z}/{x}/{y}.png"
            opacity={0.5}
          />
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle
              center={center}
              pathOptions={{ fillColor: "blue" }}
              radius={200}
            />
            <Circle
              center={center}
              pathOptions={{ fillColor: "red" }}
              radius={100}
              stroke={false}
            />
            <Circle
              center={center}
              pathOptions={{ fillColor: "red" }}
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={[51.51, -0.08]}
                pathOptions={{ color: "green", fillColor: "green" }}
                radius={100}
              />
              <Circle
                center={[51.52, -0.08]}
                pathOptions={{ color: "green", fillColor: "green" }}
                radius={100}
              />
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          <FeatureGroup pathOptions={{ color: "purple" }}>
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={[35.6764, 139.65]} radius={200} />
            <Polygon pathOptions={{ color: "purple" }} positions={rectangle} />
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default MapComponent;
