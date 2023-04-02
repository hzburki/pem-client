import { createStyles, Title, Text, Button, Group, rem } from "@mantine/core";

import { Link } from "react-router-dom";

const notFoundStyles = createStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#eff6ff",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  description: {
    margin: "auto",
    maxWidth: rem(540),
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export function NotFoundScreen() {
  document.title = "Page not found";
  const { classes } = notFoundStyles();

  return (
    <div className={classes.root}>
      <Title className={classes.title}>Nothing to see here</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Page you are trying to open does not exist. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position="center">
        <Button component={Link} to="/" size="md">
          Take me back to home page
        </Button>
      </Group>
    </div>
  );
}
