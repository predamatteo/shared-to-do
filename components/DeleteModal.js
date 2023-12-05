import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { dataToStart, dataFinished } from '../data/rawData';
import { Divider, Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { Modal } from '@ui-kitten/components';
import { deleteExpense } from '../util/http';
import ConfirmButton from './ConfirmButton';


const DeleteModal = ({item, visible, setVisible, press, setPress}) => {

    function doneActivity(){
        setPress(!press)
        setVisible(false)
        deleteExpense(item.id)
    }
    return (
        <Modal transparent={true} visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}>
            <View style={{backgroundColor:'white',height:300, width:300,marginBottom:300}}>                
                <TouchableOpacity style={{height:40, justifyContent:'center', borderBottomColor:'lightblue', borderBottomWidth:1}} onPress={()=>setVisible(false)}>
                    <Icon name='close' color='lightblue' size={24}/>
                </TouchableOpacity>
                <View style={{flex:1,marginBottom:10, marginHorizontal:10, justifyContent:'center'}}>
                    <View style={{marginBottom:15}}>
                        <Text style={{fontSize:18}}>Activity Title: </Text>
                        <Text style={{fontSize:18,  marginTop:10}}>{item.title}</Text>
                    </View>
                    <Divider />
                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:18}}>Activity Additional Informations: </Text>
                        <Text style={{fontSize:18, marginTop:10}}>{item.info}</Text>
                    </View>
                </View>
                <Divider width={1} color='lightblue'/>
                <ConfirmButton onPress={doneActivity} text='Confirm' color='white' textColor='lightblue' icon='done' iconColor='lightblue'/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
})

export default DeleteModal;
