import { View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { NavOptions, CustomGooglePlacesAutocomplete, NavFavourites } from './components';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />

        <CustomGooglePlacesAutocomplete />
      </View>
      <NavOptions />
      <NavFavourites />
    </SafeAreaView>
  );
};

export default HomeScreen;
