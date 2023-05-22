/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import AppButton from './src/components/AppButton';
import { AppText } from './src/components/AppText';
import Spacer from './src/components/Spacer';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const scrollViewStyle = {
    flex: 1
  }

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={[backgroundStyle, {flexGrow: 1, padding: 10}]}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic" 
          contentContainerStyle={{alignItems: 'center'}}
        >
          <AppButton title='Large' />
          <AppButton title='Medium' size='medium' />
          <AppButton title='Small' size='small' />
          <AppButton title='With Loader' loading={true} />
          <AppButton title='Disabled with Loader' disabled={true} loading={true} />
          <Spacer size={20} />
          <AppText textAlign='center' fontSize='XXL'>A custom text component with XXL font size.</AppText>
          <AppText textAlign='center' fontSize='XL'>A custom text component with XL font size.</AppText>
          <AppText textAlign='center' fontSize='LG'>A custom text component with LG font size.</AppText>
          <AppText textAlign='center'>A custom text component with default font size (MD).</AppText>
          <AppText textAlign='center' fontSize='SM'>This is a custom text component with SM font size.</AppText>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
