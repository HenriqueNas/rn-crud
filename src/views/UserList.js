import React from "react"
import { Alert, FlatList, View } from "react-native"
import { Button, Icon, ListItem, Avatar } from "react-native-elements"
import users from '../data/users'

const UserList = ( props ) => {

  function getUserItem({item: user}) {
    return(
      <ListItem
        key={user.id} 
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}
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

        }
      },
      {
        text: 'Não'
      }
    ])
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}

export default UserList