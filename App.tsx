import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/modules/auth/view/login';

function App() {
  return (
    <SafeAreaView>
      <View >
        <StatusBar barStyle="dark-content" />
       <Login/>
      </View>
    </SafeAreaView>

  );
}



export default App;
