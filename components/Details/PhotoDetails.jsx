import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
const PhotoDetails = ({ route, navigation }) => {
  const back = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity>Back</TouchableOpacity>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        quos rerum ad sint molestias, ipsa nemo iusto fugit nulla autem
        obcaecati asperiores fuga magni. Minima mollitia laboriosam vel numquam
        deserunt!
      </Text>
    </View>
  );
};

export default PhotoDetails;
