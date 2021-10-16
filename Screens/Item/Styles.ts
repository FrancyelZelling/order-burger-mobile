import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#353536",
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F0B322",
    marginVertical: 10,
    marginLeft: 16,
    alignSelf: "flex-start",
  },
  desc: {
    fontSize: 18,
    marginVertical: 16,
    color: "white",
  },
  priceSection: {
    marginTop: 45,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    height: 50,
  },
  price: {
    color: "white",
    fontSize: 24,
    fontWeight: "100",
  },
  button: {
    width: 140,
    height: 40,
    backgroundColor: "#F0B322",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 18,
    color: "#353536",
  },
});
