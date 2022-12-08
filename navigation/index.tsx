/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import{ Entypo } from '@expo/vector-icons'; 
import{ Feather } from '@expo/vector-icons'; 
import{ MaterialIcons } from '@expo/vector-icons'; 
import{ AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import About from '../About'; 
import Home from '../Home';
import Contact from '../Contact';
import UserData from '../UserData';
import Course from '../Course';
import CourseDetails from '../CourseDetails';
import Menu from '../Menu';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
// import Rana from '../screens/Rana';
// import Dapp from '../screens/Reebaal';
// import Papp from '../screens/Rabees';
// import Japp from '../screens/Genious';
// import PizzaTranslator from '../screens/Practice';


import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="LatestTech"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'LatestTech',
          tabBarIcon: ({ color }) => 
          <Entypo name="home" size={24} color="red" />,
          // <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="MechatronicsEng"
        component={TabTwoScreen}
        options={{
          title: 'CuttingEdge',
          tabBarIcon: ({ color }) =><MaterialIcons name="science" size={24} color="orange" />,
          //  <TabBarIcon name="code" color={color} />,
        }}
      />
      {/* <BottomTab.Screen
        name="Rana"
        component={Rana}
        options={{
          title: 'Rana',
          tabBarIcon: ({ color }) =><AntDesign name="heart" size={24} color="red" />,
          
          //  <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Reebaal"
        component={Dapp}
        options={{
          title: 'Reebaal',
          tabBarIcon: ({ color }) =><AntDesign name="earth" size={24} color="blue" />,
          //  <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Rabees"
        component={Papp}
        options={{
          title: 'Rabees',
          tabBarIcon: ({ color }) =><AntDesign name="QQ" size={24} color="green" />,
          //  <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Genious"
        component={Japp}
        options={{
          title: 'Genious',
          tabBarIcon: ({ color }) => <Entypo name="aircraft" size={24} color="lightblue" />
          // <TabBarIcon name="code" color={color} />,
        }}
      /> */}

      {/* <BottomTab.Screen
        name="Coffee_Maker"
        component={PizzaTranslator}
        options={{
          title: 'Coffee_Maker',
          tabBarIcon: ({ color }) =>
            <Feather name="coffee" size={24} color="brown" />,
          // <TabBarIcon name="code" color={color} />,
        }}        
      /> */}
          <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={24} color="blue" />,
            // <Feather name="coffee" size={24} color="black" />,
          // <TabBarIcon name="code" color={color} />,
        }}        
      />
          <BottomTab.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={24} color="blue" />,
            // <Feather name="coffee" size={24} color="black" />,
          // <TabBarIcon name="code" color={color} />,
        }}        
      />
         <BottomTab.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={24} color="blue" />,
            // <Feather name="coffee" size={24} color="black" />,
          // <TabBarIcon name="code" color={color} />,
        }}        
      />
               <BottomTab.Screen
        name="Course"
        component={Course}
        options={{
          title: 'Course',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={24} color="blue" />,
            // <Feather name="coffee" size={24} color="black" />,
          // <TabBarIcon name="code" color={color} />,
        }}        
      />
               <BottomTab.Screen
        name="CourseDetails"
        component={CourseDetails}
        options={{
          title: 'CourseDetails',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={24} color="blue" />,
            // <Feather name="coffee" size={24} color="black" />,
          // <TabBarIcon name="code" color={color} />,
        }}        
      />
                 <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={24} color="blue" />,
            // <Feather name="coffee" size={24} color="black" />,
          // <TabBarIcon name="code" color={color} />,
        }}        
      />
                 <BottomTab.Screen
        name="UserData"
        component={UserData}
        options={{
          title: 'UserData',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={24} color="blue" />,
            // <Feather name="coffee" size={24} color="black" />,
          // <TabBarIcon name="code" color={color} />,
        }}        
      />

    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome> ['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}



// @expo/vector-icons@13.0.0
// Details
// coffee
// coffee