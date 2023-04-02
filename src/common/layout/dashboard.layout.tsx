import { useState } from "react";
import { AppShell, Navbar, Header, Burger, ActionIcon } from "@mantine/core";

/** Custom Imports */
import { DrawerMenu } from "@/lib";
import { DrawerComponent } from "../drawer";
import { dashboardStyles } from "./dashboard.styles";
import { SideMenuComponent } from "../side-menu";

interface DashoardLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export function DashoardLayout(props: DashoardLayoutProps) {
  const { classes } = dashboardStyles();
  const { children, header } = props;

  const [opened, setOpened] = useState(false);

  return (
    <>
      <AppShell
        padding="md"
        layout="alt"
        navbar={
          <Navbar
            p={0}
            height="100%"
            width={{ base: "85px" }}
            className={classes.navbar}
          >
            <ActionIcon
              className={classes.burgerWrapper}
              onClick={() => setOpened(!opened)}
            >
              <Burger size="sm" color="grey" opened={opened} />
            </ActionIcon>

            <div>
              <SideMenuComponent />
            </div>
          </Navbar>
        }
        header={
          <Header height={65} p="xs">
            {header}
          </Header>
        }
        className={classes.bodyWrapper}
      >
        {children}
      </AppShell>

      <DrawerMenu opened={opened} onClose={() => setOpened(!opened)}>
        <DrawerComponent />
      </DrawerMenu>
    </>
  );
}
