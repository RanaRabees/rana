import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Rapp = () => {
  return (
    <ScrollView>
      <Text style={{ color:"red",fontSize:20,textAlign:'center' }} >This Complex is Mechatronis EngProject Based </Text>
      <View>
        <Text style={{ color:"green",fontSize:20,textAlign:'center' }} >Each Project is Unique in Idea and have best features in it </Text>
        <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffeemachine,Brazil',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
      <Text style={{ color:"black",fontSize:20,textAlign:'center' }} >This project is not only a coffee machine  </Text>

         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffeemaker',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
      <Text style={{ color:"red",fontSize:20,textAlign:'center' }} >Coffee Machine Has a lot of Choices  </Text>

         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?coffee',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
      <Text style={{ color:"orange",fontSize:20,textAlign:'center' }} >Hot and Cold Coffee is Just an old Choice You can do many more now  </Text>

         <Image
          source={{
            uri: 'https://source.unsplash.com/1200x900/?forest,coffee',
          }}
          style={{ width: 350, height: 300, margin:10 }}
        />
      <Text style={{ color:"blue",fontSize:20,textAlign:'center' }} >this is start only you will in your dreamland Soon </Text>

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
            uri: 'https://source.unsplash.com/1200x900/?jungle,coffee',
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

export default Rapp;