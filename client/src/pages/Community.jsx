import { useState } from "react";

const Community = () => {
  const [location, setLocation] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });

    console.log("Latitude is :", latitude, " & Longitude is :", longitude);
  }

  function error() {
    window.alert("Please Allow Location Access for Contributing");
  }

  return (
    <div className="text-black">
      Community
      {/* DROPDOWNS */}
      <input placeholder="Crime Type"></input>
      {!location ? (
        <button onClick={handleLocationClick}>Add Crime Location</button>
      ) : null}
    </div>
  );
};

export default Community;
