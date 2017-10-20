import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { buttonBackgroundColor, buttonTextColor } from '../utils/colors';

export default function Button ({ onPress, text, customButtonStyles={}, customTextStyles={}}) {
  return (
    <TouchableOpacity
      style={[styles.button, customButtonStyles]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, customTextStyles]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: buttonBackgroundColor,
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: buttonTextColor,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center'
  }
})
