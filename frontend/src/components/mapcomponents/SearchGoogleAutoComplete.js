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
        apiKey={process.env.REACT_APP_GOOGLE_API}
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
};

export default SearchGoogleAutoComplete;
