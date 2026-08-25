import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#b0b2b8",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "red",
    // borderStyle: "solid",
    paddingTop: 16,
    // paddingBottom: 24,
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    width: "100%",
    paddingHorizontal: 24,
    gap: 7,
    paddingTop: 42,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 32,
    marginTop: 24,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6ec",
    paddingBottom: 12,
  },
  clearButton: {
    marginLeft: "auto",
  },
  clearButtonText: {
    color: "#828282",
    fontSize: 12,
    fontWeight: "600",
  },
});
