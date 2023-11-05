import {TileLayer, MapContainer, Marker, Popup} from "react-leaflet";
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
import Select from 'react-select'

// const options = [
//     {
//         value: 'chocolate',
//         label: 'Chocolate'
//     }, {
//         value: 'strawberry',
//         label: 'Strawberry'
//     }, {
//         value: 'vanilla',
//         label: 'Vanilla'
//     }
// ]


const DemoMap = () => {
    const position = [28.7041, 77.1025];

    return (
        <div className="flex flex-row-reverse">
            <div className="ml-5 w-3/4">
                <MapContainer center={position}
                    zoom={13}
                    scrollWheelZoom={false}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={position}>
                        <Popup>
                            Chain Snaching has been seen in this area.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className="w-1/4 ml-5">
                <Select options={options}/>
            </div>
        </div>
    )
}

export default DemoMap
