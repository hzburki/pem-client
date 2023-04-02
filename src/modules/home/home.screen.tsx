import { Title, rem } from "@mantine/core";

/** Custom Imports */
import { setTitle } from "@/utils";
import { HomeHeader } from "./home-header";
import { DashoardLayout } from "@/common/layout";

export function HomeScreen() {
  setTitle("Home");

  return (
    <DashoardLayout header={<HomeHeader />}>
      <div
        style={{
          flexGrow: 1,
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title size={rem(60)}>Home Screen</Title>
      </div>
    </DashoardLayout>
  );
}
