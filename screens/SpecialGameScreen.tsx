import { Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed'
import { Text, View } from '../components/Themed';
import { Game, RootTabScreenProps } from '../types';
import React, { useState } from 'react';
import { getGameList } from '../data/data';
import { Entypo } from '@expo/vector-icons';
import 'localstorage-polyfill';
import { EventRegister } from 'react-native-event-listeners'
import { Button } from '@react-native-material/core';


export default function SpecialGameScreen({ navigation }: RootTabScreenProps<'SpecialGame'>) {
  EventRegister.addEventListener('selectedGame', (game: Game) => {
    navigation.navigate('GameScreen', game )
  });
  return (
    <View style={styles.globalContainer}>
      <Text style={styles.title}>Parties en cours</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <GameList/>
    </View>
  );
}

const width = Dimensions.get('window').width; 

function GameList(){
  const [currentGameList, setCurrentGameList] = useState(getGameList());
  EventRegister.addEventListener('localStorageModification', () => {
    setCurrentGameList(getGameList())
  });
  return (
    <ScrollView keyboardShouldPersistTaps='always'>
      {
        currentGameList.map((item, i) => (
            
          <ListItem key={item.id} bottomDivider style={styles.listItem}>
            <Icon name='casino' />
            <ListItem.Content>
            <ListItem.Title>{item.gameName}</ListItem.Title>
            </ListItem.Content>
        <TouchableOpacity onPress={ () => EventRegister.emit('selectedGame', item)}>
              <Entypo name="chevron-right" size={20}/>
            </TouchableOpacity>
          </ListItem>
        ))
      }
    </ScrollView>
  )
}


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
