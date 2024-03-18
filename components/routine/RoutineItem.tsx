import { View, Text } from 'react-native'
import React from 'react'
import { Routine } from '@/types/routine'

type Props = {
    routine: Routine;
}

export default function RoutineItem({ routine }: Props) {
    return (
        <View>
            <Text>{routine.title}</Text>
            <Text>{routine.description}</Text>
        </View>
    )
}
