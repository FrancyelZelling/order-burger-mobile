import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 140,
    height: 190,
    margin: 12,
    backgroundColor: "#444441",
    borderRadius: 6,
  },
  img: {
    width: 118,
    height: 118,
    alignSelf: "center",
    borderRadius: 6,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
    color: "#f0b322",
  },
  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "200",
    marginLeft: 15,
    marginRight: 50,
    paddingRight: "auto",
    color: "white",
  },
  itemBtn: {
    width: 30,
    height: 30,
    backgroundColor: "#f0b322",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#323133",
    fontSize: 20,
    fontWeight: "bold",
  },
});
