import {View, StyleSheet, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import List from '../../components/molecules/List';
import Axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState();

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
      setUsers(res.data.data),
    );
  }, []);

  if (loading) {
    return <Text>Data is loading...</Text>;
  }

  // if (error || !Array.isArray(users)) {
  //   return <Text>There was an error loading your data!</Text>;
  // }

  return (
    <View>
      <Text style={styles.textUserList}>Users List</Text>
      <ScrollView>
        {Array.isArray(users)
          ? users.map(item => (
              <List
                key={item.id}
                name={item.name}
                username={item.username}
                email={item.email}
                address={item.address}
                phone={item.phone}
              />
            ))
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textUserList: {
    color: 'black',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    fontWeight: 700,
    fontSize: 40,
  },
});

export default UserList;
