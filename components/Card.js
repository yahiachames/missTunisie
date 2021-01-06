import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card} >
      <Image style={[styles.image]} source={image} resizeMode="cover" resizeMethod="auto" />
      <View style={styles.detailsContainer}  >
        <AppText style={styles.title} >{title}</AppText>
        <AppText style={styles.subTitle}  >{subTitle}</AppText>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.grey,
    marginBottom: 20,
    overflow: "hidden",
    width: "96%"
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,

  },
  subTitle: {
    color: colors.primary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
    color: colors.white,



  },
})

export default Card;