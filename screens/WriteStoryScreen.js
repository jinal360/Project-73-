import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import { Header } from 'react-native-elements';
import db from "../config.js";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      text: '',
      text: '',
    };
  }

  submitButton = async ()=>{
      ToastAndroid.show("story is submited", ToastAndroid.SHORT);
  }
  render() {
    return (
       <KeyboardAvoidingView  style={styles.container} behavior="padding"        enabled>
     
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Text style={styles.displayText}> WriteStoryScreen </Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: title });
          }}
          value={this.state.title}
        />
        <Text>Story title</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: author });
          }}
          value={this.state.author}
        />
        <Text>Author</Text>

        <TextInput
           style={[styles.inputBox,{multiline: true}]}
          onChangeText={(text) => {
            this.setState({ text: story });
          }}
          value={this.state.story}
        />
        <Text>Story</Text>

        <TouchableOpacity style={styles.submitButton}
        onPress={this.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
       </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  displayText: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
