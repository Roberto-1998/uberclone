import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../../../slices/navSlice';
import { data } from '../../../constants/uberDrivers';

//If we have SURGE pricing, this goes up
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-1 pb-10`}>
      <View style={tw`flex-row items-center justify-center`}>
        <TouchableOpacity style={tw`rounded-full pl-3`} onPress={() => navigation.navigate('NavigateCard')}>
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl flex-1`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-200'} `}
            onPress={() => setSelected(item)}
          >
            <Image source={{ uri: image }} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'EUR',
              }).format((travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100)}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-200'} `} disabled={!selected}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
