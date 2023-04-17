import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../../../slices/navSlice';

const CustomGooglePlacesAutocomplete = () => {
  const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
        },
      }}
      onPress={(data, details = null) => {
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
        );

        dispatch(setDestination(null));
      }}
      fetchDetails={true}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
      placeholder='Where From?'
      returnKeyType={'search'}
      minLength={2}
      enablePoweredByContainer={false}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
    />
  );
};

export default CustomGooglePlacesAutocomplete;
