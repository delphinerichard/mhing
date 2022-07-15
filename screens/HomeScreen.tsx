import { StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Provider,
  Button,
  Text
} from '@react-native-material/core';

import React, { useState } from "react";
import { View } from '../components/Themed';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({navigation} : RootTabScreenProps<'Home'>){

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mhing</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button variant="outlined" title="Nouvelle partie"  onPress={() => navigation.push("NewGame")} />
      {/* <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.push("NewGame")}>
          <Entypo name="cog" size={32} color="black" />
        </TouchableOpacity>
      </SafeAreaView> */}

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


