import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, IconButton, MD3Colors} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {fullDateParsed, addCommas} from '../utils/formats';

const Product = ({data}) => {
  const [parsedDate, setParsedDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setParsedDate(fullDateParsed(data.createdAt));
  }, []);

  const productDetail = () => {
    navigation.navigate('Single Product View', {product: data});
  };

  return (
    <View style={{marginVertical: 2}}>
      <Card>
        <Card.Content style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: data.image,
            }}
          />
          <View>
            <Text variant="titleLarge">{data.product}</Text>
            <Text variant="bodyMedium">{parsedDate}</Text>
          </View>
          <View style={styles.pointSystem}>
            <View style={styles.cardPointsFrame}>
              {data.is_redemption ? (
                <Text variant="bodyMedium" style={styles.plus}>
                  -
                </Text>
              ) : (
                <Text variant="bodyMedium" style={styles.minus}>
                  +
                </Text>
              )}
              <Text variant="bodyMedium" style={styles.points}>
                {addCommas(data.points)}
              </Text>
              <IconButton
                icon="chevron-right"
                color={MD3Colors.error50}
                size={20}
                onPress={productDetail}
              />
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  pointSystem: {
    flex: 1,
    alignContent: 'flex-end',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  cardPointsFrame: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  centeredObject: {
    alignSelf: 'center',
  },
  plus: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#00B833'
  },
  points: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000000'
  },
  minus: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#FF0000'
  },
});

export default Product;
