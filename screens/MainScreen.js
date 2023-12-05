import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import RenderItem from '../components/renderItem';
import { Button, Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import DeleteModal from '../components/DeleteModal';
import { localData } from '../data/rawData';
import AddModal from '../components/AddModal';
import { fetchExpenses } from '../util/http';
import { deleteRoom } from '../util/storage';

const MainScreen = () => {
    const [press, setPress] = useState(false);
    const [visibleAddModal, setVisibleAddModal] = useState(false);
    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
    const [fetchedExpenses, setFetchedExpense] = useState();

    function onPressStartItemHandler(item) {
        setVisibleDeleteModal(true)
        setPress(!press)
    }
    useEffect(()=>{
        async function dumb(){
            const expenses = await fetchExpenses();
            setFetchedExpense(expenses)
        }
        dumb()
    },[press])
    
    const prez = () => {
        deleteRoom();
        console.log('stanza eliminata')
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 10 }}>
                <FlatList
                    data={fetchedExpenses}
                    keyExtractor={item => item.id}
                    renderItem={(item) =>
                        <>
                            <RenderItem item={item.item} onPress={onPressStartItemHandler} />
                            <DeleteModal item={item.item} visible={visibleDeleteModal} setVisible={setVisibleDeleteModal} press={press} setPress={setPress} />
                        </>
                    } />
            </View>
            <Button title='cancella stanza' onPress={prez} />
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={[tw`flex-row px-10`, { borderColor: 'lightblue', borderWidth: 1, flex: 1, alignItems: 'center' }]} onPress={() => setVisibleAddModal(true)}>
                    <Icon name='add' color={'lightblue'} size={60} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, color: 'lightblue' }}>Add Activity</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <AddModal visible={visibleAddModal} setVisible={setVisibleAddModal} setPress={setPress} press={press} />
        </View>
    );
}

const styles = StyleSheet.create({
})

export default MainScreen;
