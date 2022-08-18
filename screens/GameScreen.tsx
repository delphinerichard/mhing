import { Game } from '../types';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed'
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import { getGameList } from '../data/data';
import { Entypo } from '@expo/vector-icons';
import 'localstorage-polyfill';
import { EventRegister } from 'react-native-event-listeners'
import { Button } from '@react-native-material/core';

export default function GameScreen( {route}:any ) {
    return (

<View style={styles.globalContainer}>
      <ScrollView  keyboardShouldPersistTaps='always'>
      <View style={styles.container}>
      <Text style={styles.title}>{route.params.gameName}</Text>
      <Text style={{textAlign: 'center'}}>"yo"</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}>Nom de la partie :</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button style = {{margin: 20}} variant='outlined' title='Créer la partie' onPress={() => {console.log("yo")}}/>
    </ScrollView>
    </View>
    );
}


const width = Dimensions.get('window').width; 


const styles = StyleSheet.create({
    globalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 17,
      textAlign: 'left'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    listItem: {
      width: 0.8*width,
      flex:1
    }
  });
  