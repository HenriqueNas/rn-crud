import React, { useContext } from "react"
import { Alert, FlatList, View, StyleSheet } from "react-native"
import { Button, Icon, ListItem, Avatar } from "react-native-elements"
import UsersContext from "../context/UsersContext"

const UserList = ( props ) => {

  const { state, dispatch } = useContext(UsersContext);

  function getUserItem({item: user}) {
    return(
      <ListItem
        key={user.id} 
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', user)}
      >
        <Avatar rounded source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          {getActions(user)}
        </ListItem.Content>
        {/* <ListItem.Chevron color='black'/> */}
      </ListItem>
    )
  }

  function getActions(user) {
    return(
      <Button
        onPress={() => confirmUserDeletion(user)}
        type='clear'
        icon={
          <Icon name='delete' size={25} color='red' />
        }
      />
    )
  }

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', `Realmente deseja excluir ${user.name} da lista?`, [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: { user },
          })
        }
      },
      {
        text: 'Não'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default UserList