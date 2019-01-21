import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import EventoDetail from './EventoDetail';

class EventoList extends Component {

    state = { eventos: [] }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response.data) );
        axios.get("http://localhost:3000/eventos")
            .then(response => console.log(response.data) )
            .catch(error => console.log(error));
        console.log("Logou");
    }

    getEventos() {
        return this.state.eventos.map(evento => 
            <EventoDetail nome={nome} descricao={descricao} />    
        )
    }

    render() {
        return (
            <ScrollView>
            </ScrollView>
        )
    }

}

export default EventoList;