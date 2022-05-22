import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button style={styles.loginButton}>Login with Google</Button>
        <Button style={styles.loginButton} onPress={navigateSignUp}>Login with Email</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    loginButton : {
        marginTop: 16,
    },
});