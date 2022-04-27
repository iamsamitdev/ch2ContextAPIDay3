import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './RootStack'

// ทำการ Import Context
import Context from './../store/Context'

// ทำการ Import CounterState
import CounterState from './../store/CounterState'
import UserState from './../store/UserState'

const Navigation = () => {

  const store = {...CounterState(), ...UserState()}

  return (
    <Context.Provider value={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Context.Provider>
  )
}

export default Navigation