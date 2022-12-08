import { Link, useLinkBuilder, useLinkProps, useLinkTo } from '@react-navigation/native';
import React, { useState } from 'react';
// import { Text, TextInput, View } from 'react-native';
// import { View,Text, Image, ScrollView, TextInput } from 'react-native';
import { StyleSheet,Linking, FlatList, SectionList, Button, View, SafeAreaView, Text, Alert, Image, ScrollView, TextInput } from 'react-native';
// import { Button } from 'react-native';
// import { Link } from '@react-navigation/native';
// import { LinkingStatic } from 'react-native';


// const link =  <link rel="stylesheet" href="../test.txt" />


const image7 = require('../assets/images/37.jpg');
const image8 = require('../assets/images/39.jpg');
const image9 = require('../assets/images/45.jpg');
const image10 = require('../assets/images/46.jpg');
const image11 = require('../assets/images/47.jpg');
const image12 = require('./Rabees.tsx');



// function deleivery () :
// function HelloWorld() {
//     return (
//         <View >
//             <Text >Hello, World</Text>
//         </View>
//     );
// };
// HelloWorld() 

const PizzaTranslator = () => {
    const [text, setText] = useState('');
    // const HelloWorld = () => {
    //     return (
    //         <View >
    //             <Text >Hello, World</Text>
    //         </View>
    //     );
    // };
    return (
        <ScrollView style={{ backgroundColor: 'pink' }}>

            <Image style={{ height: 140, width: 360 }} source={image7}></Image>
            <View style={{ padding: 30, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Text style={{ color: "green", fontSize: 20, textAlign: 'center' }} >press me for coffee flavours</Text>

                <Button

                    title="Black_Coffee"
                    color="green"
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}


                />
                {/* onPress={() => HelloWorld()} */}

                <Button

                    title="White_Coffee"
                    color="red"
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}

                />
                <Button

                    title="Milk_Coffee"
                    color=""

                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}

                />
                <Button

                    title="Bean_Coffee"
                    color=""
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}

                />
                <Button

                    title="Instant_Coffee"
                    color="brown"
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}

                />
                <Button

                    title="Powder_Coffee"
                    color="black"
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}

                />

                <Text style={{ color: "green", fontSize: 20, textAlign: 'center' }} >how much cofee cups do you want</Text>


                <Button
                    title="one_cup"
                    color=""
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="two_cup"
                    color=""
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="three_cup"
                    color=""
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="four_cup"
                    color=""
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="five_cup"
                    color=""
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="six_cup"
                    color=""
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Text style={{ color: "green", fontSize: 20, textAlign: 'center' }} >Some Special Varieties Of Drinks Are Also Availabe</Text>

                <Button
                    title="Chaeeyy"
                    color="#f194ff"
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="QAWWA"
                    color="#f194ff"
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="Qehwah"
                    color="#f194ff"
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="Green_tea"
                    color="#f194ff"
                    onPress={() => Alert.alert('THANKS SIR YOUR ORDER WILL BE DELIEVERED SOON')}
                />
                <Button
                    title="Black_tea"
                    color="#f194ff"
                    onPress={() =>Linking.openURL('http://Facebook.com')}
                />
                <Button
                    title="Lemon_Grass_Khas_Qahwa_from_Peshawar"
                    color="#f194ff"
                    onPress={() =>{
                        //  useLinkTo
                        // useLinkBuilder
                        // useLinkProps



                        
                        // Linking.openURL('./test.txt')
            // <Image style={{ height: 140, width: 360 }} source={image11}></Image>
                        
                        
                    }
                }

                />
            </View>
            <Image style={{ height: 140, width: 360 }} source={image8}></Image>


            <Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('http://google.com')}>If You Want To Go For Google</Text>


        </ScrollView>






    );
}

export default PizzaTranslator;






// <View style={{padding: 10}}>
{/* <TextInput
        style={{height: 40}}
        placeholder="Type here Your Choice!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '☕ 🍵').join(' ')}
      </Text> */}

{/* <button>this is for coffee</button> */ }
{/* <Button>'button'</Button> */ }

{/* <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/> */}

{/* <a href='./TabOneScreen.tsx'>Click Me</a> */ }


// export default App;