import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CurrencyComparator = ({result}) => {
  if (Object.keys(result).length === 0) {
    return null;
  }
  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price]}>
        <Text style={styles.span}> {result.PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Highest price of the day:
        <Text style={styles.span}> {result.HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Lowest price of the day:
        <Text style={styles.span}> {result.LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Variation of the last 24hrs :
        <Text style={styles.span}> {result.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.text}>
        Last update: <Text style={styles.span}> {result.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#5E49E2',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginVertical: 5,
  },
  price: {fontSize: 30},
  span: {fontFamily: 'Lato-Black'},
});

export default CurrencyComparator;
