/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Form from './components/Form';
import Header from './components/Header';
import CurrencyComparator from './components/CurrencyComparator';

const App = () => {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [fetchDataAPI, setFetchDataAPI] = useState(false);
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  // fn compareCurrencies
  useEffect(() => {
    const compareCurrencies = async () => {
      if (fetchDataAPI) {
        // fetch compare from API
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
        const response = await axios.get(url);
        // activate loading spinner
        setLoading(true);
        // save result and hide spinner
        setTimeout(() => {
          setResult(response.data.DISPLAY[cryptoCurrency][currency]);
          setFetchDataAPI(false);
          setLoading(false);
        }, 1500);
      }
    };
    compareCurrencies();
  }, [fetchDataAPI]);

  //fn show loading spinner or result
  const loadingResult = loading ? (
    <View style={{marginTop: 40}}>
      <ActivityIndicator size="large" color="#5E49E2" />
    </View>
  ) : (
    <CurrencyComparator result={result} />
  );

  return (
    <>
      <ScrollView>
        <Header />
        <Image
          style={styles.headerImage}
          source={require('./assets/img/cryptocurrencies.png')}
        />
        <View style={styles.container}>
          <Form
            currency={currency}
            cryptoCurrency={cryptoCurrency}
            setCurrency={setCurrency}
            setCryptoCurrency={setCryptoCurrency}
            setFetchDataAPI={setFetchDataAPI}
          />
        </View>
        {loadingResult}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 150,
  },
  container: {
    marginHorizontal: '2.5%',
  },
});

export default App;
