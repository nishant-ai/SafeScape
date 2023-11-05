// import {TileLayer,MapContainer,Marker,Popup} from "react-leaflet";
// import L from 'leaflet';
// // postCSS import of Leaflet's CSS
// import 'leaflet/dist/leaflet.css';
import boyrunning from "../assets/boyrunning.png";
import {Link} from 'react-router-dom'

const CrimeMap = () => {
    const position=[28.7041,77.1025];
    const markIcon = new L.Icon({
      iconUrl: boyrunning,
      iconSize:[35,45],
    })
    
  return (
    <div className="flex justify-center items-center">
    <div className="w-1/2 px-20 justify-around flex flex-col h-[100vh] py-32">
      <h1 className="text-black text-6xl font-medium font-sans leading-relaxed">
        Find The Places Where Crimes Are At Most!
      </h1>
      <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis odio commodi veniam impedit quas veritatis voluptates earum quod assumenda alias pariatur, vero officia ipsa deleniti repudiandae totam et. Neque, fugiat.</p>
      <div className="flex justify-start flex-col space-y-4 items-start">
        <p className="text-black">Try Out the Demo!</p>
        <div className="gap-4 flex justify-start items-center">
          <Link to='/demo'>
        <button  className="text-white border-[#FE9900] hover:border-black hover:bg-transparent hover:text-black transition-all duration-200 rounded-3xl bg-[#FE9900] border-2 px-7 py-3">Get Demo</button>
        </Link>
        <button className="border-2 bg-transparent text-black border-black hover:border-[#FE9900] hover:text-white rounded-3xl hover:bg-[#FE9900] px-7 py-3 transition-all duration-200">Get API Key</button>
        </div>
      </div>
      <div>

      </div>
    </div>
    {/* <div className="w-1/2 -mt-56 pr-20 h-screen">
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
  </div> */}
  </div>
  )
}

export default CrimeMap;