import { Dimensions, StyleSheet } from "react-native";
export const { width, height } = Dimensions.get("screen");
export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    position: "relative",
    //  backgroundColor: "#000",
    alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "black",
    zIndex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
     borderRadius: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  photo: {
    // borderRadius: 100,
    // width: "100%"
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  rowContainer:{
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "flex-end"
  },
  input: {
    color: "white",
    fontSize: 20,
    width: "100%",
    marginTop: 30,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
});
