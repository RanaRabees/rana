// import { StyleSheet } from 'react-native';
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

const PlaceholderImage = require('./1.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,    
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

// export default function TabTwoScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Rana Reebaal Coffee Maker</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
//       <img src="" alt="" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     fontStyle:'italic'
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
