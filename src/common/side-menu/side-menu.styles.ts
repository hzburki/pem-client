import { createStyles } from "@mantine/core";

export const sideMenuStyles = createStyles((theme) => ({
  rootWrapper: {
    marginTop: "10px",
  },
  stackStyle: {
    color: 'grey'
  },
  iconWrapper: {
    width: "100%",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  }
}))