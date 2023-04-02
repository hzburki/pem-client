import { createStyles } from "@mantine/core";

export const registerStyles = createStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.indigo[0]
  }
}))