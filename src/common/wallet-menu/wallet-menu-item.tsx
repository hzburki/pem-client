import { Group, Text, Avatar } from "@mantine/core";

export const WalletMenuItem = () => {
  return (
    <Group h={40}>
      <Avatar
        src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-orange-wallet-icon-image_1168655.jpg"
        radius="xl"
      />

      <div style={{ flex: 1 }}>
        <Text size="sm" weight={500}>
          Total
        </Text>

        <Text color="dimmed" size="xs">
          +Rs. 821,213.00
        </Text>
      </div>
    </Group>
  );
};
