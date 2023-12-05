import React, { useContext, useState } from 'react';
import { View, StyleSheet,Text, Alert } from 'react-native';
import { TextInput, Button } from '@react-native-material/core';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppContext } from '../store/context';
import { deleteRoom, storeRoom } from '../util/storage';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const AddRoom = () => {
    const [room, setRoom] = useState('');
    const context = useContext(AppContext);
    const navigation = useNavigation();

    const confirmRoom = () =>{
        //in futuro ci vorrà anche un check per capire se questa stanza esiste già, a seconda del tipo di return del retrieveRoom dell'async storage
        if(room === ''){
            Alert.alert('Ops', 'Riempi uno dei due campi');
            return;
        }
        //set room nel context
        context.setRoom(room);

        //set room nell'async storage
        storeRoom(room);
        
        //navigation verso il main screen, da aggiungere tutta la navigazione
        navigation.navigate('MainScreen')
    }
    return (
        <View>
            <Text>Inserisci Stanza</Text>
            <TextInput
                onChangeText={value => setRoom(value)}
                label="Stanza"
                leading={props => <Icon name="home" {...props} />}
            />
            <Text>Oppure</Text>
            <Text>Creane una</Text>
            <TextInput
                onChangeText={value => setRoom(value)}
                label="Stanza"
                leading={props => <Icon name="home" {...props} />}
            />
            <Button title="Conferma" color='lightblue' tintColor='white' trailing={props => <Icon name="send" {...props} />} onPress={confirmRoom}/> 
        </View>
    );
}

const styles = StyleSheet.create({})

export default AddRoom;
