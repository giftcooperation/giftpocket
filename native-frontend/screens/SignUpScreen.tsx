import { StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import {
  Button,
  CheckBox,
  Datepicker,
  Divider,
  Icon,
  Input,
  Layout,
  Text,
} from '@ui-kitten/components';



export const SignUpScreen = () => {
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon name='star'/>
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        <Icon name='alert-circle-outline'/>
        <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.signUpContainer}>
          <Text style={styles.paragraph} category='h1'>
          UI Kitten x React Hook 
          </Text>         
          <Input
            placeholder='Place your Text'
            style={styles.formInput}
            label="Email"
            value={value}
            size='large'
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
            placeholder='Place your Text'
            style={styles.formInput}
            label="Nickname"
            value={value}
            size='large'
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
            placeholder='Place your Text'
            style={styles.formInput}
            label="Nickname"
            value={value}
            size='large'
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
            value={value}
            label='Password'
            placeholder='Place your Text'
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Button
              style={styles.signUpButton}
              status='primary'>
              Sign Up
          </Button>
      </Layout>
    </SafeAreaView>
  );
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'background-basic-color-1',
    },
    headerContainer: {
      minHeight: 216,
      paddingHorizontal: 16,
      paddingTop: 24,
      paddingBottom: 44,
    },
    signUpContainer: {
      flex : 1,
      justifyContent: 'center',
    },
    socialAuthContainer: {
      marginTop: 24,
    },
    socialAuthButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    paragraph: {
      margin: 24,
      alienSelf: 'left',
    },
    socialAuthHintText: {
      alignSelf: 'center',
      marginBottom: 16,
    },
    formContainer: {
      marginTop: 48,
      paddingHorizontal: 16,
    },
    signInLabel: {
      
    },
    signInButton: {
      margin: 2,
    },
    signUpButton: {
      alignSelf: 'stretch',
      marginTop: 32,
      marginHorizontal: 16,
      height: 50
    },
    socialAuthIcon: {
      tintColor: 'text-basic-color',
    },
    orContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 16,
      marginTop: 52,
    },
    divider: {
      flex: 1,
    },
    orLabel: {
      marginHorizontal: 8,
    },
    emailSignLabel: {
      alignSelf: 'center',
      marginTop: 8,
    },
    formInput: {
      width : '90%',
      marginTop: 16,
      marginHorizontal: 16,
    },
    captionContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    captionIcon: {
      width: 10,
      height: 10,
      marginRight: 5
    },
    captionText: {
      fontSize: 12,
      fontWeight: "400",
      fontFamily: "opensans-regular",
      color: "#8F9BB3",
    }
  });