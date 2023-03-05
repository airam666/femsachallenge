import React from 'react';
import {View} from 'react-native';
import Product from './product';

const ProductsList = ({list}) => {

  return (
    <View >
      {list.map(item => (
        <Product data={item} key={item?.id} />
      ))}
    </View>
  );
};

export default ProductsList;
