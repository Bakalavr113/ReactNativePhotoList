import React, { useEffect, useRef } from "react";
import { View, SafeAreaView, Text } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
import { gStyles } from "../../assets/style/style";
import PhotoList, { SPACING } from "../PhotoList/PhotoList";
import { FontAwesome5 } from "@expo/vector-icons";
const HomeContainer = ({
  setText,
  SearchText,
  searchingPost,
  isFetch,
  likePhoto,
  getPhotosList,
  dislikePhoto,
}) => {
  
  return (
    <SafeAreaView style={gStyles.container}>
      {searchingPost.length > 0 ? (
        <PhotoList
          data={searchingPost}
          isFetch={isFetch}
          likePhoto={likePhoto}
          refresh={getPhotosList}
          dislikePhoto={dislikePhoto}
        />
      ) : (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Text style={[gStyles.title, { marginBottom: 20 }]}>
            Sorry, photo not found
          </Text>
          <FontAwesome5 name="sad-cry" size={50} color="white" />
        </View>
      )}
    </SafeAreaView>
  );
};
export default HomeContainer;
