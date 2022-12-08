import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';


const image = require('../assets/images/68.jpg');
const image1 = require('../assets/images/42.jpg');

const Dapp = () => {
  return (
    <ScrollView>
      <Text style={{ color:"red",fontSize:20,textAlign:'center' }} >Rana Muhammad Reebaal Hussain</Text>
      <View>
        <Text style={{ color:"green",fontSize:20,textAlign:'center' }} >A Grand Project Of Latest Mechatronics Eng</Text>
        <Image 
          source={image}
         
          style={{ width: 350, height: 300, margin:10 }}
        />
      <Text style={{ color:"red",fontSize:20,textAlign:'center' }} >You Can Choose Your Favourite Coffee </Text>

         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee,coffeemaker',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
      <Text style={{ color:"blue",fontSize:20,textAlign:'center' }} >Your Choice is our Choice </Text>

         <Image
         
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffeeshop',
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
          source={image1}
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

export default Dapp;