import { useState, useEffect } from "react";
import Select from "react-select";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationApi from "../api/location";
import axios from "axios";
import assault from "../assets/assault.png"
import attemptedmurder from "../assets/attemptedmurder.png"
import burglary from "../assets/burglary.png"
import robbery from "../assets/robbery.png"
import cartheft from "../assets/cartheft.png"
import kidnapping from "../assets/kidnapping.png"
import dacoity from "../assets/dacoity.png"
import hurt from "../assets/hurt.png"
import murder from "../assets/murder.png"
import ordinarytheft from "../assets/ordinarytheft.png"
import rape from "../assets/rape.png"
import cattletheft from "../assets/cattletheft.png"
import riot from "../assets/riot.png"

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#f0f0f0" : "white",
    color: state.isSelected ? "black" : "gray",
    cursor: "pointer",
  }),
};

const DemoMap = () => {
  const [options, setOptions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [crimeData, setCrimeData] = useState([]);
  const [loc,setLoc]=useState([28.7041, 77.1025])

  

  const handleLocationChange = async (selectedOption) => {
    const [District, State] = selectedOption.label.split(", ");
    setSelectedLocation({ District, State });
    console.log(selectedLocation);

    try {
      console.log(District, State);
      axios
        .get(
          `https://api.safescape.biz/crime/getlocation/District=${District}&State=${State}`
        )
        .then((res) => {
          console.log(res.data);
          setCrimeData(res.data);
        });
        } catch (err) {
            console.error(err.message);
            }
        const geoResponse = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${District}&state=${State}`, {
            headers: {
              'X-Api-Key': 'lgr5Wp/zp4PO/xvxPrjqBg==OiFoPupmCBv7ne3g', // Replace with your API key
            }
          });
          const geoData = await geoResponse.json();
          console.log(geoData);
          // Extract latitude and longitude from the response data
          const { latitude, longitude } = geoData.results[0].geometry;
          // Now you have latitude and longitude, you can use it to set markers on the map
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        } 


  useEffect(() => {
    (async () => {
      try {
        const res = await locationApi.getLocations();
        if (!res) throw new Error("Failed to fetch locations");
        setOptions(
          res.map((location) => ({
            label: location.location,
            value: location.location,
          }))
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);


  return (
    <div className="flex flex-row-reverse">
      <div className="ml-5 w-3/4">
        <MapContainer center={loc} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {crimeData.map((crime, index) => {
            const crimeIcon = crime.CrimeType;
            return (
              <Marker
                key={index}
                position={[crime[index].latitude, crime[index].longitude]}
                icon={L.icon({
                  iconUrl: crimeIcon,
                  iconSize: [32, 32], // Adjust icon size as needed
                })}
              >
                <Popup>{crime.CrimeType}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <div className="w-1/4 ml-5">
        <Select
          options={options}
          styles={customStyles}
          onChange={handleLocationChange}
          value={selectedLocation}
        />
        {/* Display crime data */}
        <div className="mt-3">
          {crimeData.map((crime, index) => (
            <div key={index}>{crime.description}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoMap;
