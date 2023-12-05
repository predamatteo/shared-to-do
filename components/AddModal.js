import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { dataToStart } from '../data/rawData';
import tw from 'tailwind-react-native-classnames';
import { Modal } from '@ui-kitten/components';
import { storeExpense } from '../util/http';
import ConfirmButton from './ConfirmButton';

const AddModal = ({ visible, setVisible, setPress, press }) => {
    const [newActivity, setNewActivity] = useState('');
    const [newActivityInformations, setNewActivityInformations] = useState('');

    function onSaveHandler() {
        if (newActivity == '') {
            Alert.alert("Ops", "Fill the Field \"Title\"");
            return;
        }
        const temp = {
            title: newActivity,
            info: newActivityInformations
        }
        setPress(!press);
        setVisible(false);
        storeExpense(temp);
        setNewActivity('');
        setNewActivityInformations('');
    }

    return (
        <Modal transparent={true} visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}>
            <View style={{ backgroundColor: 'white', height: 300, width: 300 ,marginBottom:300 }}>
                <TouchableOpacity style={{ height: 40, justifyContent: 'center', borderBottomColor: 'lightblue', borderBottomWidth: 1 }} onPress={() => setVisible(false)}>
                    <Icon name='close' color='lightblue' size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, marginBottom: 10, marginHorizontal: 10, justifyContent: 'center' }}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ fontSize: 18 }}>Activity Title: </Text>
                        <TextInput style={{ fontSize: 18, marginTop: 10 }} onChangeText={text => setNewActivity(text)} />
                    </View>
                    <Divider />
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 18 }}>Activity Additional Informations: </Text>
                        <TextInput style={{ fontSize: 18, marginTop: 10 }} numberOfLines={2} multiline={true} onChangeText={text => setNewActivityInformations(text)} />
                    </View>
                </View>
                <Divider width={1} color='lightblue' />
                <ConfirmButton onPress={onSaveHandler} text='Save' color='white' textColor='lightblue' icon='save' iconColor='lightblue' />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
})

export default AddModal;