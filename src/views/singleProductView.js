import React, {useEffect, useState, Dimensions} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
import {fullDateParsed} from '../utils/formats';

const SingleProductView = ({route, navigation}) => {
  const goToAll = () => {
    navigation.navigate('Products View');
  };
  return (
    <View style={styles.content}>
      <View style={styles.productName}>
        <Text style={styles.productTitle}>{route.params.product.product}</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: route.params.product.image,
        }}
      />
      <View style={styles.productDetail}>
        <Text style={styles.subtitle}>Detalles del producto:</Text>
        <Text style={styles.date}>
          Comprado el {fullDateParsed(route.params.product.createdAt)}
        </Text>
        <Text style={styles.subtitle}>Con esta compra acumulaste:</Text>
        <Text style={styles.pointsBold}>
          {route.params.product.points} puntos
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={goToAll} title="Todos" color="#334FFA" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: 'flex',
  },
  image: {
    width: '90%',
    height: '50%',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 19,
    alignSelf: 'center',
  },
  productName: {
    padding: 30,
    backgroundColor: '#CFD6FF',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    alignSelf: 'baseline',
  },
  productDetail: {
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 800,
    color: '#9B9898',
  },
  date: {
    fontSize: 16,
    fontWeight: 800,
    color: '#000000',
    marginVertical: 15,
  },
  pointsBold: {
    fontSize: 24,
    fontWeight: 800,
    color: '#000000',
    marginVertical: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal:10,
  },
});

export default SingleProductView;
