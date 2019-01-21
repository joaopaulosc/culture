import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={ viewStyle }>
            <Text style={ textStyle }>
                Eventos
            </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.8,
        elevation: 1
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;