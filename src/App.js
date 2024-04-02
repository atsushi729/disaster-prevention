import "./App.css";
// import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  return (
    <div className="App">
      <MapContainer center={[35.6764, 139.65]} zoom={13}>
        <TileLayer
          attribution="&copy; https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[35.6764, 139.65]}>
          <Popup>基本、東京やから</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
