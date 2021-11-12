import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  Dimensions,
  Animated,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gStyles } from "../../assets/style/style";

//CONST FOR ANIMATION
export const AVATAR_SIZE = 70;
export const SPACING = 20;
export const ITEM_SIZE = 70 + SPACING * 5;

const PhotoList = ({ isFetch, refresh, likePhoto, dislikePhoto, data,navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView>
      <Animated.FlatList
        refreshControl={
          <RefreshControl
            tintColor={"#94DAFF"}
            colors={"#94DAFF"}
            refreshing={isFetch}
            onRefresh={() => refresh()}
          />
        }
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: 30,
        }}
        data={data}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            (index + 2) * ITEM_SIZE,
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0.4],
          });
          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <PhotoItem
            navigation={navigation}
              item={item}
              dislikePhoto={dislikePhoto}
              scale={scale}
              opacity={opacity}
              likePhoto={likePhoto}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
const PhotoItem = ({ item,navigation, scale, opacity, likePhoto, dislikePhoto }) => {
  return (
    item && (
      <Animated.View
        style={[
          gStyles.item,
          {
            padding: SPACING,
            height: 150,
            marginBottom: SPACING,
            transform: [{ scale }],
            opacity,
          },
        ]}
      >
        <Image
        
          style={[
            gStyles.photo,
            {
              width: "30%",
              height: AVATAR_SIZE,
              marginRight: SPACING / 2,
            },
          ]}
          source={{ uri: `${item.thumbnailUrl}` }}
        />

        <View style={{ width: "60%" }}>
          <Text numberOfLines={2} style={gStyles.title}>
            {item.id}. {item.title}
          </Text>
          <View style={[gStyles.rowContainer, { marginTop: SPACING }]}>
            <TouchableOpacity
              onPress={() => likePhoto(item.id)}
              style={{ marginRight: 30 }}
            >
              <View>
                {item.liked ? (
                  <AntDesign name="like1" size={30} color="#4E9F3D" />
                ) : (
                  <AntDesign name="like2" size={30} color="#4E9F3D" />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dislikePhoto(item.id)}>
              <View>
                {item.disliked ? (
                  <AntDesign name="dislike1" size={30} color="#4E9F3D" />
                ) : (
                  <AntDesign name="dislike2" size={30} color="#4E9F3D" />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    )
  );
};

export default PhotoList;
