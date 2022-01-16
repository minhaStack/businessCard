import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Linking } from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        MinhaStack
      </Text>
      <Card onPress={() => Linking.openURL('http://instagram.com/minhastack')} style={styles.card}>
        Instagram
      </Card>
      <Card onPress={() => Linking.openURL('https://twitter.com/StackMinha')} style={styles.card}>
        Twitter
      </Card>
      <Card onPress={() => Linking.openURL('http://facebook.com/minhastack.oficial')} style={styles.card}>
        Facebook
      </Card>
      <Card onPress={() => Linking.openURL('http://minhastack.com')} style={styles.card}>
        Website
      </Card>
      <Card onPress={() => Linking.openURL('http://minhastack.com/blog')} style={styles.card}>
        Blog
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#150039',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 28
  },
  card: {
    fontFamily: 'Arial',
    cursor: 'pointer',
    fontSize: 15,
    padding: 9,
    margin: 5
  }
});
