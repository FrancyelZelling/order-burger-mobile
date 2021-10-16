import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353536",
    flex: 1,
  },
  containerChildProps: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    alignItems: "center",
    marginTop: 20,
  },
  proceedBtn: {
    width: 100,
    height: 30,
    backgroundColor: "#F0B322",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    fontWeight: "300",
  },
  total: {
    fontSize: 18,
    color: "white",
  },
  itemsContainer: {
    width: 350,
  },
});
