import { HiChevronDown } from "react-icons/hi";
import { Group, Text, Avatar, Flex, Stack } from "@mantine/core";

export const WalletMenuButton = () => {
  return (
    <Group>
      <Avatar
        src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-orange-wallet-icon-image_1168655.jpg"
        radius="xl"
      />

      <Stack spacing={0}>
        <Flex dir="row" gap={2} align="center">
          <Text size="xs">Total</Text>
          <HiChevronDown />
        </Flex>

        <Text fw="bold" fz="sm">
          +Rs. 821,213.00
        </Text>
      </Stack>
    </Group>
  );
};
