import { FAB } from '@react-native-material/core';
import React from 'react';
import {View, StyleSheet, TouchableOpacity,Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';


const RenderItem = ({item, onPress}) => {
    function onPressRenderItem(){
        onPress(item)
    }

    /*return (
        <TouchableOpacity onPress={onPressRenderItem} style={[{borderColor:'blue', borderWidth:1},tw `my-2 mx-10` ]}>
            <Text style={tw `px-4 py-4`}>{item.value}</Text>
        </TouchableOpacity>
    );*/
    return(
        <FAB style={tw `mx-4 my-4`} color='lightblue' label={item.title} onPress={onPressRenderItem} variant='extended' tintColor='white'/>

    );
}

const styles = StyleSheet.create({})

export default RenderItem;
