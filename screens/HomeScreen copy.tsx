import { StyleSheet } from 'react-native';
import { Provider,
  Stack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  TextInput, } from '@react-native-material/core';

import React, { useState } from "react";
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mhing</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button variant="outlined" title="Nouvelle partie"  onPress={() => setVisible(true)}/>

      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Nouvelle partie" />
        <DialogContent>
          <Stack spacing={2}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
            <TextInput label="Email" variant="standard" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>

    </View>
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


const HomeScreen = () => (
  <Provider>
    <App />
  </Provider>
);

export default HomeScreen;
