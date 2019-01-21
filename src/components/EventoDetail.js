import React from 'react';
import { View, Text } from 'react-native';

const EventoDetail = (props) => {

    return (
        <View>
            <Text>{ props.nome }</Text>
            <Text>{ props.descricao }</Text>
        </View>
    )

}

export default EventoDetail;