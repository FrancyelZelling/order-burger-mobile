import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353536",
    flex: 1,
    // alignItems: "center"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 30,
    alignItems: "center"
  },
  totalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f0b322"
  },
  totalValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 14
  },
  totalItems: {
    fontSize: 14,
    color: "darkgrey",
    fontWeight: "300",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: 10
  },
})

