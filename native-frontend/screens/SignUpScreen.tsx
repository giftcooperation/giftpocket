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
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const SignUpScreen = ({ navigation }) => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation alignment='center' accessoryLeft={BackAction}/>
      <Layout style={styles.signUpContainer}>
          <Text style={styles.paragraph} category='h1'>
          SignUp
          </Text>         
          <Input
            placeholder='Place your Text'
            style={styles.formInput}
            label="Email"
            value={emailValue}
            size='large'
            onChangeText={nextValue => setEmailValue(nextValue)}
          />
          <Input
            placeholder='Place your Text'
            style={styles.formInput}
            label="Nickname"
            size='large'
          />
          <Input
            value={passwordValue}
            style={styles.formInput}
            label='Password'
            placeholder='Place your Text'
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            size='large'
            onChangeText={nextValue => setPasswordValue(nextValue)}
          />
          <Input
            value={repeatPasswordValue}
            style={styles.formInput}
            label='RepeatPassword'
            placeholder='Place your Text'
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            size='large'
            onChangeText={nextValue => setRepeatPasswordValue(nextValue)}
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
      alignSelf: 'stretch',
      marginTop: 32,
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