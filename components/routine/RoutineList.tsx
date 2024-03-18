import { View } from 'react-native'
import React from 'react'
import { Routine } from '@/types/routine'
import RoutineItem from './RoutineItem';

type Props = {
    routines: Routine[];
}

export default function RoutineList({ routines }: Props) {
    return (
        <View>
            {routines.map(routine => (
                <RoutineItem routine={routine} />
            ))}
        </View>
    )
}