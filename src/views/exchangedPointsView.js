import React, {useEffect, useState} from 'react';
import {ScrollView, View, Button, StyleSheet} from 'react-native';
import UserInfo from '../components/userInfo';
import TotalPoints from '../components/totalPoints';
import ProductsList from '../components/productsList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExchangedPointsView = ({navigation}) => {
  const [userData, setUserData] = useState([]);
  const [pointsSum, setPointsSum] = useState(0);

  useEffect(() => {
    async function retrieveData() {
      try {
        const myArray = await AsyncStorage.getItem('userdata');
        if (myArray !== null) {
          const arrayParsed = JSON.parse(myArray);
          const achieved = arrayParsed.filter(function (element) {
            return element.is_redemption === true;
          });
          setUserData(achieved);
        }
      } catch (error) {
        console.log('err', error);
      }
    }
    retrieveData();
  }, []);

  const sumPoints = data => {
    var result2 = data.reduce(function (acc, obj) {
      return acc + obj.points;
    }, 0);
    console.log(result2);
    return result2;
  };

  useEffect(() => {
    try {
      async function countPoints() {
        setPointsSum(await sumPoints(userData));
      }
      countPoints();
    } catch (error) {
      console.log(error);
    }
  }, [userData]);

  const goBack = () => {
    navigation.goBack(null);
  };

  return (
    <View style={styles.content}>
      <UserInfo />
      <TotalPoints points={pointsSum} />
      <ScrollView>
        <ProductsList list={userData} />
      </ScrollView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={goBack} title="Todos" color="#334FFA" />
        </View>
      </View>
    </View>
  );
};

export default ExchangedPointsView;

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
    marginHorizontal: 10,
  },
});
