import React  from "react";
import {
    View,
    TextInput,
  } from "react-native";
import { gStyles } from "../../assets/style/style";
import { SPACING } from "../PhotoList/PhotoList";
const SearchPhoto = ({ SearchText, setText }) => {
    return (
      <View style={{ width: "100%", paddingHorizontal: SPACING, marginTop: 30 }}>
        <TextInput
          value={SearchText}
          onChangeText={(text) => setText(text)}
          style={gStyles.input}
          maxLength={15}
          placeholder={"Enter text"}
          placeholderTextColor={"white"}
        />
      </View>
    );
  };
  export default SearchPhoto