import React from 'react';
import {StyleSheet, View, WebView, Dimensions} from 'react-native';


export default class App extends React.Component {
  render() {
    console.log('test');
    return (
    <View style={{flex:1, marginTop: 30, marginBottom: 30}}>
      <WebView
        style={styles.container}
        source={{uri: 'https://trade-8371c.firebaseapp.com'}}
      >
      </WebView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
