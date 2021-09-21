import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 140,
    height: 190,
    margin: 12,
    backgroundColor: "#e0b43a",
    borderRadius: 6,
  },
  img: {
    width: 110,
    height: 110,
    alignSelf: "center",
    borderRadius: 6,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 15,
    color: "#323133",
  },
  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "200",
    marginLeft: 15,
    marginRight: 55,
    paddingRight: "auto",
  },
  itemBtn: {
    width: 22,
    height: 22,
    backgroundColor: "#323133",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#f0b322",
    fontSize: 16,
  },
});
