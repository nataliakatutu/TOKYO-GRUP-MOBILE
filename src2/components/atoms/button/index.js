import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, onClick}) => {
  return (
    <View style={styles.layoutButton}>
      <TouchableOpacity style={styles.button} onPress={onClick}>
        <Text style={styles.textButton}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 355,
    height: 45,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#C238CE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  layoutButton: {
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
