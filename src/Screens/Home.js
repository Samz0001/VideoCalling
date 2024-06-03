import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useState,
  Alert,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  const [name, setName] = useState('');

  const handleClick = () => {
    if (!name) {
      Alert.alert('Please fill the name');
      return;
    } else {
      navigation.navigate('VideoCall', {name: name});
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 20}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          width: '80%',
          color: 'black',
          letterSpacing: 1,
          top: -40,
        }}>
        Connect with your friends and world around now
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: '700',
          width: '60%',
          color: 'black',
          letterSpacing: 1,
          left: 30,
        }}>
        Please Enter Your Name Below:
      </Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Username"
        style={{
          padding: 10,
          marginHorizontal: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'grey',
          marginTop: 10,
        }}
      />
      <TouchableOpacity
        onPress={handleClick}
        style={{
          backgroundColor: 'skyblue',
          padding: 10,
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Join Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
