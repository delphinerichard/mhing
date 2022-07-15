import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Button } from '@react-native-material/core';
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View style={styles.getStartedContainer}>
      <Button variant="outlined" title="Mhing !" onPress={() => alert("Mhing ! 🎉🎉🎉")}/>

      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
        darkColor="rgba(255,255,255,0.05)"
        lightColor="rgba(0,0,0,0.05)">
        <MonoText>{path}</MonoText>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
