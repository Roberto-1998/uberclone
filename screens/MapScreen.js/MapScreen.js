import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { NavigateCard, RideOptionsCard, Map } from './components';

const Stack = createNativeStackNavigator();

const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={tw`absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Icon name='menu' />
      </TouchableOpacity>

      <View style={tw`h-1/3`}>
        <Map />
      </View>
      <View style={tw`h-2/3`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
