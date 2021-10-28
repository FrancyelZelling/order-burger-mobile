import { StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    paddingBottom: 10,
    borderBottomColor: "#f0b322",
    borderBottomWidth: 1
    },
  img: {
    width: 70,
    height: 70,
    borderRadius: 8
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 12
  },
  itemName: {
    color: "#f0b322",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6
  },
  price: {
    color: "white",
    fontSize: 14,
    fontWeight: "300"
  },
  removeBtn: {
    marginLeft: "auto",
    alignSelf: "center",
    marginRight: 8,
    backgroundColor: "#f0b322",
    borderRadius: 50,
    width: 40,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
})
