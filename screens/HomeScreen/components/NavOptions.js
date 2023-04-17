import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { data } from '../../../constants/navOptions';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../../../slices/navSlice';

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60`}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image style={{ width: 120, height: 120, resizeMode: 'contain' }} source={{ uri: item.image }} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              type='antdesign'
              name='arrowright'
              color={'white'}
              size={20}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
