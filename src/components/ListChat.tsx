import React from 'react';
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';

// import { Container } from './styles';
interface ListChat {
    image: string,
    name: string,
    message: string,
    date: Date,
    badge: number
}
const { width } = Dimensions.get('screen');
export default function ListChat({ image, name, message, date, badge }: ListChat) {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            height: 60,
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 5,
            elevation: 2,
        }}>
            <Image borderRadius={30} source={{ uri: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', width: 60, height: 60 }} />
            <View style={{
                flexDirection: 'column',
                marginHorizontal: 16,
                width: width / 2
            }}>
                <Text>
                    Joanna Dark
            </Text>
                <Text>
                    Ola como vai ?
            </Text>
            </View>
            <View style={{
                flexDirection: 'column',
                alignItems: "center",
                width: width / 7
            }}>
                <Text>
                    12:45
            </Text>
                <Text>
                    1
            </Text>
            </View>
        </TouchableOpacity>
    );
}
