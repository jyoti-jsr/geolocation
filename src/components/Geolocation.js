import { useEffect, useState } from "react";

const Geolocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLogitude] = useState(0);
  function geoFindMe() {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
      setLatitude(position.coords.latitude);
      setLogitude(position.coords.longitude);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating…");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  useEffect(() => {
    geoFindMe();
  }, []);
  return (
    <>
      <h2>{latitude}</h2>
      <h2>{longitude}</h2>
    </>
  );
};

export default Geolocation;
