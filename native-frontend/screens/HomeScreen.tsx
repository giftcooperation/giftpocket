import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Icon } from '@ui-kitten/components';

export const GoogleIcon = (props) => (
    <Icon {...props} name='ios-logo-google' pack='ionicons' />
  );

export const EmailIcon = (props) => (
    <Icon {...props} name='email-outline' />
);

export const HomeScreen = ({ navigation }) => {

  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button accessoryLeft={GoogleIcon} style={styles.loginButton}>Continue with Google</Button>
        <Button accessoryLeft={EmailIcon} style={styles.loginButton} onPress={navigateSignUp}>Continue with Email</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    loginButton : {
        width: 300,
        justifyContent: 'flex-start',
        marginTop: 16,
    },
});