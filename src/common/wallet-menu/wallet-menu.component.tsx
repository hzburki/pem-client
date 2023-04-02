import { WalletMenuButton } from "./wallet-menu-button";
import {
  Menu,
  Group,
  Text,
  UnstyledButton,
  Avatar,
  ScrollArea,
} from "@mantine/core";

import { walletMenuButtonStyles } from "./wallet-menu.styles";
import { WalletMenuItem } from "./wallet-menu-item";

export function WalletMenu() {
  const { classes: buttonClasses } = walletMenuButtonStyles();

  return (
    <Group>
      <Menu position="bottom-start" shadow="md" width={300}>
        <Menu.Target>
          <UnstyledButton className={buttonClasses.root}>
            <WalletMenuButton />
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <ScrollArea h={350}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Menu.Label style={{ fontWeight: 600 }}>Select Wallet</Menu.Label>
            </div>

            <Menu.Divider />

            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>

            <Menu.Divider />
            <Menu.Label>Included in Tolal</Menu.Label>
            <Menu.Divider />

            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>

            <Menu.Divider />
            <Menu.Label>Included in Tolal</Menu.Label>
            <Menu.Divider />

            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
            <Menu.Item>
              <WalletMenuItem />
            </Menu.Item>
          </ScrollArea>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
