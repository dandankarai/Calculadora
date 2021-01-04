import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native'

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    // backgroundColor: 'black',
    alignItems: 'flex-end',
  },

  displayValue: {
    fontSize: 60,
    color: '#fff',
  }
})

export default props => 

  <SafeAreaView style={styles.display}>

    <Text style={styles.displayValue}
      numberOfLines={1}>

      {props.value}

    </Text>
  </SafeAreaView>