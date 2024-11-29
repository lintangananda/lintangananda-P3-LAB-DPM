import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import ProfileScreen from './src/pages/profile';

import Constants from 'expo-constants';

export default function App() {

return (

<SafeAreaView style={styles.safeArea}>

<StatusBar style="auto" />

<ProfileScreen />

</SafeAreaView>

  );

}

const styles = StyleSheet.create({

safeArea: {

flex: 1,

paddingTop: Constants.statusBarHeight,

},

});
