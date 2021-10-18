import React from 'react';
import {Text, Platform, StyleSheet} from 'react-native';

const Header = () => <Text style={styles.header}>Cryptocurrency Compare</Text>;

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    paddingBottom: 10,
    color: '#FFF',
    backgroundColor: '#5E49E2',
    fontSize: 20,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Header;
