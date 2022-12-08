import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const image = require('../assets/images/34.jpg');
const image1 = require('../assets/images/35.jpg');
const image2 = require('../assets/images/36.jpg');
const image3 = require('../assets/images/37.jpg');
const image4 = require('../assets/images/38.jpg');
const image5 = require('../assets/images/39.jpg');
const image6 = require('../assets/images/40.jpg');

const Japp = () => {
  return (
    <ScrollView>
      <Text style={{ color:"red",fontSize:20,textAlign:'center' }} >Rana Muhammad Reebaal Hussain</Text>
      <View>
        <Text style={{ color:"green",fontSize:20,textAlign:'center' }} >A Grand Project Of Latest Mechatronics Eng</Text>
        
        
        <Image
          source={image}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={image1}
         
          style={{ width: 350, height: 300, margin:10 }}
        />
          <Image
          source={image6}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={image2}
         
          style={{ width: 350, height: 300, margin:10 }}
        />
          <Image
          source={image}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={image3}
         
          style={{ width: 350, height: 300, margin:10 }}
        />
          <Image
          source={image1}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={image4}
         
          style={{ width: 350, height: 300, margin:10 }}
        />
          <Image
          source={image2}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={image5}
         
          style={{ width: 350, height: 300, margin:10 }}
        />
          <Image
          source={image}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={image6}
         
          style={{ width: 350, height: 300, margin:10 }}
        />

      </View>
      {/* <TextInput
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 1
        }}
        defaultValue=" Hi I am Rana Reebaal Hussain please Visit my Project"
      /> */}
    </ScrollView>
  );
}

export default Japp;