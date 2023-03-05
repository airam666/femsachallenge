import React, {useEffect, useState} from 'react';
import {getProducts} from './api/productService';
import ProductsView from './views/productsView';
import EarnedPointsView from './views/earnedPointsView';
import ExchangedPointsView from './views/exchangedPointsView';
import SingleProductView from './views/singleProductView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Products View"
          component={ProductsView}
          options={{title: 'Products'}}
        />
        <Stack.Screen
          name="Earned Points View"
          component={EarnedPointsView}
          options={{title: 'Earned Points'}}
        />
        <Stack.Screen
          name="Exchanged Points View"
          component={ExchangedPointsView}
          options={{title: 'Exchanged Points View'}}
        />
        <Stack.Screen
          name="Single Product View"
          component={SingleProductView}
          options={{title: 'Single Product View'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;