import { Drawer, DrawerProps } from "@mantine/core";

interface DrawerMenuProps extends DrawerProps {
  children: React.ReactNode;
}

export function DrawerMenu(props: DrawerMenuProps) {
  const { opened, onClose, children, position = "left" } = props;

  return (
    <Drawer opened={opened} onClose={onClose} position={position}>
      {children}
    </Drawer>
  );
}
