import { createStyles } from "@mantine/core";

export const dashboardStyles = createStyles((theme) => ({  
  burgerWrapper: {
    height: 60,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
    WebkitBoxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  },
  bodyWrapper: {
    backgroundColor: theme.colors.indigo[0],
  }
}));