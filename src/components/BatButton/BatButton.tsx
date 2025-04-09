import React from 'react';
import {  Text, Pressable, View } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <View >
        <Pressable 
            onPress={()=>{console.log("Copiar")}}
            style = {styles.button}
            >
            <Text style = {styles.texto}> ⚡COPY </Text>
        </Pressable>
        <Pressable 
            onPress={()=>{console.log("Copiar")}}
            style = {styles.button}
            >
            <Text style = {styles.texto}> ⚡COPY </Text>
        </Pressable>
    </View>
  );
}