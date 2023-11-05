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
    <div className="flex justify-center items-center">
    <div className="w-1/2 px-10">
      <h1 className="text-black text-6xl font-medium font-sans leading-relaxed">
        Find The Places Where Crimes Are At Most!
      </h1>
      <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi tenetur facilis molestiae, pariatur qui error incidunt dolorem suscipit doloribus eaque nisi officia nihil iusto ea libero eius nobis dolores est!</p>
    </div>
    <div className="w-1/2">
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
  </div>
  )
}

export default CrimeMap;