import React, { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import PredictScreen from './screens/PredictScreen';
import AboutScreen from './screens/AboutScreen';
import { appStyles as styles } from './styles/appStyles';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'Predict':
        return <PredictScreen onNavigate={setCurrentScreen} />;
      case 'About':
        return <AboutScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Model App</Text>
      </View>
      <View style={styles.content}>{renderScreen()}</View>
    </SafeAreaView>
  );
}