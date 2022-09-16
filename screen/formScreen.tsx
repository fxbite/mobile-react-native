import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'

export default function formScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>formScreen</Text>
    </View>
  )
}
