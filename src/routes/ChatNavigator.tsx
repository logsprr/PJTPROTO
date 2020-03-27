import * as React from 'react';
import { Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from '../pages/Chat';
import ChatCall from '../pages/Call';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();
function ChatNavigator({ navigation }) {
    console.log(navigation)

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
            }
        }}>
            <Stack.Screen name="HomeMessage" component={ChatScreen}
                options={{
                    title: 'Mensagens',
                    headerLeft: () => <TouchableOpacity style={{
                        marginLeft: 20
                    }}>
                        <Ionicons name="ios-arrow-back" color='black' size={28} />
                    </TouchableOpacity>
                }}
            />
            <Stack.Screen name="Chat" component={ChatCall}
                options={({ route }) => ({
                    headerLeft: () =>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.setOptions({
                                    tabBarVisible: true
                                })
                                navigation.navigate('HomeMessage')
                            }}
                            style={{
                                marginLeft: 20
                            }}>
                            <Ionicons name="ios-arrow-back" color='black' size={28} />
                        </TouchableOpacity>,
                    title: route.params.name,
                    headerRight: () =>
                        <TouchableOpacity >
                            <Image source={{ uri: route.params.avatar }} style={{
                                width: 38,
                                height: 38,
                                borderRadius: 18,
                                marginRight: 10,
                            }} />
                        </TouchableOpacity>,
                })}
            />
        </Stack.Navigator>

    );
}
export default ChatNavigator;