import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UserList from "./views/UserList"
import UserForm from "./views/UserForm"
import { Button, Icon } from "react-native-elements"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='UserList'
        screenOptions={screenOptions}
      >
        <Stack.Screen 
          name='UserList'
          component={UserList}
          options={({ navigation }) => {
            return {title: "Lista de Usuários",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('UserForm')}
                type='clear'
                icon={
                  <Icon name='add' size={25} />
                }
              />
            )}
          }}
        />
        <Stack.Screen 
          name='UserForm'
          component={UserForm}
          options={{
            title: "Formulário"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const screenOptions = {
  headerStyle: {
    backgroundColor: '#AAA'
  }
}