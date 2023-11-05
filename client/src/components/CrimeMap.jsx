// import {TileLayer,MapContainer,Marker,Popup} from "react-leaflet";
// import L from 'leaflet';
// // postCSS import of Leaflet's CSS
// import 'leaflet/dist/leaflet.css';
import boyrunning from "../assets/boyrunning.png";
import {Link} from 'react-router-dom'
import cover from "../assets/Screenshot from 2023-11-05 13-32-42.png"

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
      <p className="text-gray-400">Safescape.biz offers a safety-focused platform with precise crime statistics and community input, enabling individuals and businesses to make secure location choices. It's your key to informed, safe living.
</p>
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
    <div className="w-3/4 -mt-56">
      <img src={cover} alt="safescape" className="w-full h-full"/>
  </div>
  </div>
  )
}

export default CrimeMap;