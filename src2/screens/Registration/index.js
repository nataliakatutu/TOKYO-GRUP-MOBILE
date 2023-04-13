import {ScrollView, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import Gap from '../../components/atoms/gap';
import Button from '../../components/atoms/button';
import TextInput from '../../components/molecules/textInput';

const Registration = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const onName = text => {
    setName(text);
  };
  const onUsername = text => {
    setUsername(text);
  };
  const onEmail = text => {
    setEmail(text);
  };
  const onAddress = text => {
    setAddress(text);
  };
  const onPhoneNum = text => {
    setPhoneNum(text);
  };

  const onClick = () => {
    console.log(
      `Name: ${name}\nUsername: ${username}\nEmail: ${email}\nAddress: ${address}\nPhone Number: ${phoneNum}`,
    );
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Text style={styles.textRegis}>Registration</Text>
      <TextInput
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={onName}
      />
      <TextInput
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={onUsername}
      />

      <TextInput
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={onEmail}
      />

      <TextInput
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={onAddress}
      />

      <TextInput
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={onPhoneNum}
      />

      <Button label="Register" onClick={onClick} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textRegis: {
    color: 'black',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    fontWeight: 700,
    fontSize: 40,
  },
});

export default Registration;
