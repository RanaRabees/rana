import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';



const image2 = require('../assets/images/43.jpg');
const image3 = require('../assets/images/44.jpg');
const image4 = require('../assets/images/45.jpg');
const image5 = require('../assets/images/46.jpg');
const image6 = require('../assets/images/47.jpg');

const Papp = () => {
  return (
    <ScrollView>
      <Text style={{ color:"red",fontSize:20,textAlign:'center' }} >Rana Muhammad Reebaal Hussain</Text>
      <View>
        <Text style={{ color:"green",fontSize:20,textAlign:'center' }} >A Grand Project Of Latest Mechatronics Eng</Text>
        <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffeespot',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee,coffeemaker',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?office,tea',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee,tea',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee,beans',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee,winter',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee,machines',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee,America',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee,dubai',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
        
         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?,coffee',
          }}
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

export default Papp;