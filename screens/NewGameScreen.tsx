import { Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Switch, HStack, FAB, TextInput, Stack, Provider, ListItem, Button } from "@react-native-material/core";
import { Text, View } from '../components/Themed';
import React, { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import PlayerList from '../components/PlayerList';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { getGameList, gameName, nameList, setGameList, setGameName, setNameList } from '../data/data';
import { Game, RootTabScreenProps } from '../types';
import { Snackbar } from "react-native-paper";



export default function NewGameScreen({navigation} : RootTabScreenProps<'NewGame'>) {
  const date = "2022-03-21"
  
  const [name, setName] = useState("");
  const [snackVisible, setSnackVisible] = useState(false);
  return (
    <View style={styles.globalContainer}>
      <ScrollView keyboardShouldPersistTaps='always'>
      <Text style={styles.title}>Création d'une nouvelle partie longue</Text>
      <Text style={{textAlign: 'center'}}>{format(new Date(), "EEEE dd MMMM yyy", { locale: fr })}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.container}>
      <Text style={styles.subtitle}>Nom de la partie :</Text>
      <GameNameInput/> 
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.container}>
      <HStack spacing={10}>
        <TextInput label='Nom' variant='outlined' style={{width: 170}} onChangeText={text => setName(text)}>{name}</TextInput>
        <TouchableOpacity style={{height:32, marginTop:12}} onPress={() => {setNameList(addName(nameList, name)); setName(""); }}>
          <Entypo name="add-to-list" size={32} />
        </TouchableOpacity>
      </HStack>
      </View>
      <PlayerList/>
      <Button style = {{margin: 20}} variant='outlined' title='Créer la partie' onPress={() => {registerGame(nameList, gameName); setSnackVisible(true);  setNameList([]); setGameName(""); navigation.navigate('SpecialGame');}}/>
      <Snackbar
      visible={snackVisible}
      action={{label: 'OK'}}
      onDismiss={() => {setSnackVisible(false);}}
      style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}>
        Partie créée
        </Snackbar>
    </ScrollView>
    </View>
  );
}


function addName(nameList: string[], name: string): string[] {
  if(nameList.length === 1 && nameList[0] === "" && name !== ""){
    nameList[0] = name
  }else if(name !== ""){
    nameList.push(name)
  }
  return nameList
}

function GameNameInput() {

  const [gameTempName, setGameTempName] = useState("");

  return( gameName === "" ?
    <HStack spacing={10}>
      <TextInput  variant='outlined' style={{width: 170}} onChangeText={text => setGameTempName(text)}>{gameTempName}</TextInput>
      <TouchableOpacity style={{height:32, marginTop:12}} onPress={() => {setGameName(gameTempName); setGameTempName(""); }}>
        <Entypo name="check" size={32} />
      </TouchableOpacity>
    </HStack> : 

    <HStack spacing={10}>
      <Text style={styles.title}>{gameName}</Text>
      <TouchableOpacity style={{height:32, marginTop:4}} onPress={() => { setGameTempName(gameName); setGameName(""); }}>
        <Entypo name="edit" size={20} />
      </TouchableOpacity>
    </HStack> 
  )
}

function registerGame(nameList: string[], gameName: string): void {
  let game : Game = {
    id: Math.floor(Math.random() * 100).toString(),
    playerList: nameList,
    gameType: 'special',
    gameName: gameName
  }
  let tempList = getGameList();
  tempList.push(game);
  setGameList(tempList);

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
    textAlign: 'center',
    justifyContent: 'center'
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'left'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
});

