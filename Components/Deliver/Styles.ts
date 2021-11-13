import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 15,
  },
  infoContainer: {
    display: "flex",
    borderColor: "#f0b322",
    paddingBottom: 6,
    marginBottom: 12,
    borderBottomWidth: 2
  },
  addressContainer: {
  },
  smallContainer: {
    flexDirection: "row"
  },
  label: {
    color: "#f0b322",
    fontSize: 18,
    marginLeft: 10
  },
  input: {
    backgroundColor: '#3c3c3d',
    borderColor: "#f0b322",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 4,
    paddingHorizontal: 10,
    color: "white",
    fontSize: 16
  },
  addressInput: {
    height: 40,
  },
  districtContainer: {
    flex: 1,
    marginRight: 16,
    marginTop: 20
  },
  districtInput: {
    height: 40,
  },
  addressNumberContainer: {
    flex: 1,
    marginTop: 20
  },
  addressNumberInput: {
    height: 40,
  },
  notesContainer: {
    marginTop: 20
  },
  notesInput: {
  },
  paymentContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20
  },
  paymentTitle: {
    fontSize: 24,
    color: "#f0b322",
    fontWeight: "300",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
    marginHorizontal: 10
  },
  iconFocused: {
    color: "#f0b322"
  },
  button: {
    width: 300,
    height: 35,
    backgroundColor: "#f0b322",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    marginTop: 10
  },
  buttonText: {
    color: "#353536",
    fontSize: 18,
    fontWeight: "600"
  },
})
