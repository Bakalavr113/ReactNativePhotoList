import React, { useEffect, useRef } from "react";
import {Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeContainer from "../Home/HomeContainer";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikePhotoAC,
  getPhotos,
  likePhotoAC,
  setSearchTextAction,
} from "../../redux/Reducers/home-reducer";
import SearchPhoto from "../SearchInput/SearchPhoto";
import { FontAwesome } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();
const Navigation = () => {
  const dispatch = useDispatch();
  const PhotosList = useSelector((state) => state.homePage.Photos);
  const isFetch = useSelector((state) => state.homePage.isFetch);
  const SearchText = useSelector((state) => state.homePage.searchText);
  const FavoriteList = useSelector((state) => state.homePage.Photos.filter(el => el.liked === true ));
  const searchingPost = useSelector((state) =>
    PhotosList.filter((el) =>
      el.title.toLowerCase().includes(SearchText.toLowerCase().trim())
    )
  );
  useEffect(() => {
    PhotosList.length === 0 && getPhotosList();
    // getPhotosList();
  }, []);
  const getPhotosList = () => {
    dispatch(getPhotos());
  };
  const setText = (text) => {
    dispatch(setSearchTextAction(text));
  };
  const likePhoto = (id) => {
    dispatch(likePhotoAC(id));
  };

  const dislikePhoto = (id) => {
    dispatch(dislikePhotoAC(id));
  };
  // const getData = () => {
  //   getPhotosList();
  // };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Photos"
          children={() => (
            < >
            <Image
        style={[StyleSheet.absoluteFillObject, {}]}
        source={require("../../assets/bg.jpg")}
        blurRadius={40}
      />
             <SearchPhoto  SearchText={SearchText} setText={setText} />
            <HomeContainer
              SearchText={SearchText}
              setText={setText}
              searchingPost={searchingPost}
              SearchText={SearchText}
              isFetch={isFetch}
              likePhoto={likePhoto}
              getPhotosList={getPhotosList}
              dislikePhoto={dislikePhoto}
            />
            </>
          )}
          // component={HomeContainer}
          options={{
            headerShown: false,
            tabBarLabel: "Photos",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="photo" size={size} color={color} />
             
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          // component={HomeContainer}
          children={() => (
            < >
             <Image
        style={[StyleSheet.absoluteFillObject, {}]}
        source={require("../../assets/bg.jpg")}
        blurRadius={40}
      />
            <HomeContainer
              SearchText={SearchText}
              setText={setText}
              searchingPost={FavoriteList}
              SearchText={SearchText}
              isFetch={isFetch}
              likePhoto={likePhoto}
              getPhotosList={getPhotosList}
              dislikePhoto={dislikePhoto}
            />
            </>
          )}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="heart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
