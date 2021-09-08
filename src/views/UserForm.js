import React, { useContext, useState } from "react"
import { View, Text, TextInput, StyleSheet, Button,TouchableOpacity } from "react-native"
import UsersContext from "../context/UsersContext";

const UserForm = ({route, navigation}) => {
  const [user, setUser] = useState(route.params ?? {});

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChange={name => setUser({...user, name})}
          placeholder='Nome do Usuário'
          value={user.name}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChange={email => setUser({...user, email})}
          placeholder='Email'
          value={user.email}
        />
        <Text>Avatar</Text>
        <TextInput
          style={styles.input}
          onChange={avatarUrl => setUser({...user, avatarUrl})}
          placeholder='Informe a URL do Avatar'
          value={user.avatarUrl}
        />
        <View style={styles.button}>
          <Button 
            title='Salvar'
            onPress={() => {navigation.goBack()}}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#C7EEFF',
    padding: 30,
  },
  inputWrapper: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 30,
  },
  input: {
    textAlign: 'left',
    marginTop: 15,
    marginBottom: 20,
    height: 40,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 20,
    height: 50,
    fontSize: 14,
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    marginTop: 20,
    height: 60,
  }
});


export default UserForm