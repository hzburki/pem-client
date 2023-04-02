import { ActionIcon, Divider, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { SideMenuData } from "./side-menu.data";

/** Custom Imports */
import { sideMenuStyles } from "./side-menu.styles";

export function SideMenuComponent() {
  const { classes } = sideMenuStyles();

  return (
    <div className={classes.rootWrapper}>
      {SideMenuData.map((item, index) => {
        return (
          <Stack className={classes.stackStyle} my={15} key={index}>
            <ActionIcon
              mih={65}
              to={item.route}
              component={Link}
              title={item.name}
              className={classes.iconWrapper}
            >
              <span>{item.icon}</span>
              <Text fz="xs">{item.name}</Text>
            </ActionIcon>
          </Stack>
        );
      })}

      <Divider mx={10} />
    </div>
  );
}
