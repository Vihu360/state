import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const RealStateProperty = () => {

    const {id} = useLocalSearchParams();

  return (
    <View>
      <Text>RealStateProperty id is {id}</Text>
    </View>
  )
}

export default RealStateProperty