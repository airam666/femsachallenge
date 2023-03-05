import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {addCommas} from '../utils/formats';

const TotalPoints = ({points = 0}) => {
  const TotalPointsData = {
    month: 'Diciembre',
  };

  return (
    <View>
      <Text style={styles.infotext}>Tus Puntos</Text>
      <View style={styles.totalpts}>
        <Text style={styles.textColor}>{TotalPointsData.month}</Text>
        <Text style={styles.title}>{addCommas(points)} pts</Text>
      </View>
      <Text style={styles.infotext}>Tus Movimientos</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  textColor: {
    color: '#FFFFFF',
    alignSelf: 'baseline',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    alignSelf: 'center',
  },
  totalpts: {
    backgroundColor: '#334FFA',
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginHorizontal: 40,
    marginVertical: 20,
    borderRadius: 20,
  },
  infotext: {
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
    alignSelf: 'baseline',
  },
});

export default TotalPoints;
