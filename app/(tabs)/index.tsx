import { View, Text } from 'react-native'
import React from 'react'
import RoutineList from '@/components/routine/RoutineList'
import routines from '@/data/routines'

export default function Routines() {
  return (
    <View>
      <Text>Routines</Text>
      <RoutineList routines={routines} />
    </View>
  )
}