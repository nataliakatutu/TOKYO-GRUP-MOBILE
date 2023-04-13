import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

const List = ({name, username, email, address, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teks}>{name}</Text>
      <Text style={styles.teks}>{username}</Text>
      <Text style={styles.teks}>{email}</Text>
      <Text style={styles.teks}>{address}</Text>
      <Text style={styles.teks}>{phone}</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    alignItems: 'center',
  },
  teks: {
    fontSize: 18,
    fontWeight: '700',
    color: 'grey',
  },
});
