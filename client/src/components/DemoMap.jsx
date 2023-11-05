import { useState, useEffect } from "react";
import Select from "react-select";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locationApi from "../api/location";
import axios from "axios";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#f0f0f0" : "white",
    color: state.isSelected ? "black" : "gray",
    cursor: "pointer",
  }),
};

const DemoMap = () => {
  const position = [28.7041, 77.1025];
  const [options, setOptions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [crimeData, setCrimeData] = useState([]);

  const handleLocationChange = async (selectedOption) => {
    const [District, State] = selectedOption.label.split(", ");
    setSelectedLocation({ District, State });
    console.log(selectedLocation);

    try {
      console.log(District, State);
      axios
        .get(
          `http://localhost:8000/crime/getlocation/District=${District}&State=${State}`
        )
        .then((res) => {
          console.log(res.data);
          setCrimeData(res.data);
        });
    } catch (error) {
      console.error("Error fetching crime data:", error);
    }
  };

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
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Chain Snatching has been seen in this area.</Popup>
          </Marker>
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
