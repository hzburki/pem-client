import { WalletMenu } from "@/common/wallet-menu/wallet-menu.component";
import { Button } from "@mantine/core";

export function HomeHeader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          height: "100%",
          display: "flex",
          maxHeight: "45px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <WalletMenu />
      </div>

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          maxHeight: "45px",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button style={{ marginRight: "40px" }}>Add Transaction</Button>
      </div>
    </div>
  );
}
