import { Button } from '@react-native-material/core';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const ConfirmButton = ({ onPress, text, color, textColor, icon, iconColor,size }) => {
    return (
        <View>
            <Button
                title={text}
                color={color}
                tintColor={textColor}
                onPress={onPress}
                leading={props => <Icon name={icon} color={iconColor} {...props} />} />
        </View>

    );
}

const styles = StyleSheet.create({})

export default ConfirmButton;

/*
return (
        <TouchableOpacity style={[tw`flex-row px-10`, { borderColor: 'lightblue', borderWidth: 1, alignItems: 'center' }]} onPress={onPress}>
            <Icon name='done' size={24} color={'green'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: 'lightblue' }}>Confrim</Text>
            </View>
        </TouchableOpacity>
    );
*/