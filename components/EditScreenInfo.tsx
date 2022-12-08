import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';


import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
// import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <ScrollView>
    <Text style={{ color:"red",fontSize:20,textAlign:'center' }} >Rana Muhammad Reebaal Hussain</Text>
    <View>
      <Text style={{ color:"green",fontSize:20,textAlign:'center' }} >A Grand Project Of Latest Mechatronics Eng</Text>
      <Image
        source={{
          uri: 'https://source.unsplash.com/1200x900/?coffee,industry',
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
          uri: 'https://source.unsplash.com/1200x900/?coffee,whitehouse',
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
          uri: 'https://source.unsplash.com/1200x900/?jungle,beachcoffee',
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



    // <View>
    //   <View style={styles.getStartedContainer}>
    //   <TextInput
    //     style={{
    //       height: 40,
    //       borderColor: 'red',
    //       borderWidth: 1
    //     }}
    //     defaultValue=" Hi I am Rana Reebaal Hussain please Visit my Project"
    //   />
    //   </View>

   
    // </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
