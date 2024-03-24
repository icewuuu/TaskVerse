import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 320,
  },
  todoTitle: {
    marginTop: 10,
    fontSize: 16,
  },
  todoContent: {
    fontSize: 18,
    fontWeight: "bold",
  },
  filterIcon: {
    position: "absolute",
    top: 18,
    right: 20,
    backgroundColor: "transparent",
    zIndex: 999,
  },
});

export default styles;
