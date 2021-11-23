import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
