import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  // Using Slot -> Taking index.jsx as a default page
  /*
  return (
    <>
    <Text>Header</Text>
    <Slot />
    <Text>Footer</Text>
    </>
  )
  */
 
  // Using Stack
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})