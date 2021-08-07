import React from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'
import { width } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    width: width / 2.4,
    paddingVertical: 10
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  h1: {
    paddingTop: 10,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover: {
    width: width / 2.4,
    height: width * 0.63,
    borderRadius: 10
  }
})

const ImageCard = ({ data, onPress }) => {
  const { container, sub, h1, cover } = styles
  const { image, name } = data
 const img = image === null ? 'http://st03.kakprosto.ru/tumb/680/images/article/2011/9/9/1_5255184467fc05255184467ffd.jpg' : image.medium
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{ uri: img }} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}



export { ImageCard }