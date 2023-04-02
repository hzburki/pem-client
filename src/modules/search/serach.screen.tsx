import { Title } from "@mantine/core";

/** Custom Import */
import { setTitle } from "@/utils";
import { DashoardLayout } from "@/common/layout";
import { WalletMenu } from "@/common/wallet-menu/wallet-menu.component";

const Header = () => <WalletMenu />;

export function SearchScreen() {
  setTitle("Search");

  return (
    <DashoardLayout header={<Header />}>
      <div
        style={{
          flexGrow: 1,
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title>Search Screen</Title>
      </div>
    </DashoardLayout>
  );
}
