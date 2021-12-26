import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const SearchGoogleAutoComplete = ({ locator }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value) {
      locator(value);
    }
  }, [value, locator]);

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyDeIcEtg5nemq64jMpnbB-HvFNWIoS9wnc"
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
};

export default SearchGoogleAutoComplete;
