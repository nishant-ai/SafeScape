import {TileLayer,MapContainer,Marker,Popup} from "react-leaflet";
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
import boyrunning from "../assets/boyrunning.png";

const CrimeMap = () => {
    const position=[28.7041,77.1025];
    const markIcon = new L.Icon({
      iconUrl: boyrunning,
      iconSize:[35,45],
    })
    
  return (
    <div >
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
     <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={markIcon}>
      <Popup>
        Chain Snaching has been seen in this area.
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  )
}

export default CrimeMap;