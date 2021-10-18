/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Alert, StyleSheet, TouchableHighlight} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Form = ({
  currency,
  cryptoCurrency,
  setCurrency,
  setCryptoCurrency,
  setFetchDataAPI,
}) => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

  // Fetch data of Cryptocurrency from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const response = await axios.get(url);
        setCryptoCurrencies(response.data.Data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // fn getCurrency
  const getCurrency = coin => {
    setCurrency(coin);
  };

  // fn getCryptoCurrency
  const getCryptocurrency = crypto => {
    setCryptoCurrency(crypto);
  };

  // fn compare
  const compareCurrency = () => {
    // Validation
    if (currency.trim() === '' || cryptoCurrency.trim() === '') {
      showAlert();
      return;
    }
    // Passed validation
    setFetchDataAPI(true);
  };

  // fn showAlert
  const showAlert = () => {
    Alert.alert(
      'Error',
      'Both fields are required to be able to compare them',
      [{text: 'OK'}],
    );
  };

  return (
    <View>
      <Text style={styles.label}>Currency</Text>
      <Picker
        selectedValue={currency}
        onValueChange={coin => getCurrency(coin)}
        itemStyle={{height: 120}}>
        <Picker.Item label="- Select -" value="" />
        <Picker.Item label="United States dollar" value="USD" />
        <Picker.Item label="Argentine peso" value="ARS" />
        <Picker.Item label="Mexican peso" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Pound sterling" value="GBP" />
      </Picker>
      <Text style={styles.label}>Cryptocurrency</Text>
      <Picker
        selectedValue={cryptoCurrency}
        onValueChange={crypto => getCryptocurrency(crypto)}
        itemStyle={{height: 120}}>
        <Picker.Item label="- Select -" value="" />
        {cryptoCurrencies.map(crypto => (
          <Picker.Item
            key={crypto.CoinInfo.Id}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.btnCompare}
        onPress={() => compareCurrency()}>
        <Text style={styles.textCompare}>Compare</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 20,
    fontSize: 22,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    color: '#000',
  },
  btnCompare: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#5E49E2',
  },
  textCompare: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Form;
