import {Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed'
import React, { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import { deleteName, nameList, setNameList } from '../data/data';



export default function PlayerList(){
    const [deletedItem, setDeletedItem] = useState("");

    if(nameList[0] !==""){
    return (
        <ScrollView keyboardShouldPersistTaps='always'>
        {
            nameList.map((item, i) => (
                <ListItem key={i} bottomDivider style={styles.listItem}>
                    <Icon name='perm-identity' />
                    <ListItem.Content>
                    <ListItem.Title>{item}</ListItem.Title>
                    </ListItem.Content>
                    <TouchableOpacity onPress={ () => {deleteName(item); setDeletedItem(item); }}>
                        <Entypo name="squared-cross" color={'red'} size={20}/>
                    </TouchableOpacity>
                </ListItem>
            ))
        }
        </ScrollView>
    )
    }else{
        return <ScrollView></ScrollView>
    }
}

const width = Dimensions.get('window').width; 

const styles = StyleSheet.create({
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