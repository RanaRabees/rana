import * as React from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

const image = require('./58.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Hi I am Rana Rabees Hussain React Native Developer
      </Text>
       <Image
          source={image}
          style={{ width: 350, height: 300, margin:10 ,borderRadius:20,borderColor:'red'}}
        />
         <Text style={styles.paragraph}>
       Digital Coffee Maker With Lot Of Choices    
      </Text>
       <Text style={styles.paragraph}>       
     This Is A Project Of My Younger Brother Rana Muhammad Reebaal Hussain
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
