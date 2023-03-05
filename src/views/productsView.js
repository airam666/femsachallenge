/* global __DEV__ */
import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import UserInfo from '../components/userInfo';
import TotalPoints from '../components/totalPoints';
import ProductsList from '../components/productsList';
import {getProducts} from '../api/productService';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductsView = ({navigation}) => {
  const [userData, setUserData] = useState([]);
  const [pointsSum, setPointsSum] = useState(0);

  const sumPoints = data => {
    var result2 = data.reduce(function (acc, obj) {
      return obj.is_redemption ? acc - obj.points : acc + obj.points;
    }, 0);
    return result2;
  };

  useEffect(() => {
    try {
      async function countPoints() {
        setPointsSum(await sumPoints(userData));
      }
      countPoints();
    } catch (error) {
      console.log(error)
    }
  }, [userData]);

  useEffect(() => {
    async function asyncQuery() {
      const res = await getProducts();
      setUserData(res);
      try {
        const jsonData = JSON.stringify(res); // convert object to string
        await AsyncStorage.setItem('userdata', jsonData);
        console.log('saved');
      } catch (error) {
        // Error saving data
        console.log('err', error);
      }
    }
    asyncQuery();
  }, []);

  const goToEarnedPoints = () => {
    navigation.navigate('Earned Points View');
  };

  const goToExchangedPoints = () => {
    navigation.navigate('Exchanged Points View');
  };

  return (
    <View style={styles.content}>
      <UserInfo />
      <TotalPoints points={pointsSum}/>
      <ScrollView>
        <ProductsList list={userData} />
      </ScrollView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={goToEarnedPoints} title="Ganados" color="#334FFA" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={goToExchangedPoints}
            title="Canjeados"
            color="#334FFA"
          />
        </View>
      </View>
    </View>
  );
};

export default ProductsView;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: 10,
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
