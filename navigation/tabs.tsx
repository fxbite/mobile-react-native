import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from '../screen/homeScreen'
import FormScreen from '../screen/formScreen'
import ListScreen from '../screen/listScreen'
import MapScreen from '../screen/mapScreen'
import { View, Image } from "react-native";

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                height: 60,
                backgroundColor: '#f2e3d1',
                borderRadius: 10,
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                            source={require('../assets/tabs/house-solid.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#b25829' : '#93877b'
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Log" component={FormScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                            source={require('../assets/tabs/square-plus-solid.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#b25829' : '#93877b'
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="List" component={ListScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                            source={require('../assets/tabs/list-solid.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#b25829' : '#93877b'
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Map" component={MapScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Image 
                            source={require('../assets/tabs/map-location-dot-solid.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#b25829' : '#93877b'
                            }}
                        />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}
