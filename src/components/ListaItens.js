import React, { Component } from 'react';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements'

export default class ListaItens extends Component {
    constructor(props){
        super(props);
        this.state  = { list: [] };
    }

    componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then(response => { this.setState({ list: response.data }); })
        .catch(() => {console.log('Erro ao recuperar os dados'); });
    }

    render() {
        return (
                <List containerStyle={{marginBottom: 20}}>
                {
                    this.state.list.map((l) => (
                    <ListItem
                        roundAvatar
                        avatar={{uri:l.foto}}
                        key={l.valor}
                        title={l.titulo}
                    />
                    ))
                }
                </List>
        )
    }
}