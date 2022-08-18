import { StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Provider,
  Button,
  Text,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  TextInput,
  Stack,Switch, VStack, Chip
} from '@react-native-material/core';

import React, { useState } from "react";
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {initializeApp} from 'firebase/app'
import { getFirestore, collection, query, where, getDocs, Firestore } from "firebase/firestore";
import { firebaseConfig } from '../src/firebase/config';

export default function HomeScreen({navigation} : RootTabScreenProps<'Home'>){

  const [visible, setVisible] = useState(false);


  initializeApp(firebaseConfig);
  const db = getFirestore();
  const colRef = collection(db, 'gameList');
  getDocs(colRef).then((snapshot) => {
    console.log(snapshot.docs)
  })


  return (
    <Provider>
    <View style={styles.container}>
      <Text style={styles.title}>Mhing</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text>
      yo
      </Text>
      <Button variant="outlined" title="Nouvelle partie"  onPress={() => setVisible(true)}/>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Nouvelle Partie" />
        <DialogContent>
            <VStack spacing={15}>
            <Text>Choisissez le type de partie</Text>
            <Button variant='outlined' title='Partie Longue' onPress={() => {navigation.navigate("NewGame"); setVisible(false)}}/>
            <Button variant='outlined' title='Partie Classique' disabled onPress={() => {console.log('coucou'); setVisible(false);}}/>
            </VStack>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </View>
    </Provider>
  );
}

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
});


