import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { width } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  cover: {
    borderRadius: 10,
    width: width / 1.67,
    height: width * 0.9
  }
})

const ImageBigCard = ({ data }) => {
  const { container, sub, cover } = styles
  const { image } = data
  const img = image === null ? 'http://st03.kakprosto.ru/tumb/680/images/article/2011/9/9/1_5255184467fc05255184467ffd.jpg' : image.original

  
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: img }} />
      </View>
    </View>
  )
}


export { ImageBigCard }