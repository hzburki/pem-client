import { MantineProvider } from "@mantine/core";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

/**
 * Screens
 */
import { HomeScreen } from "@/modules/home";
import { SearchScreen } from "@/modules/search";
import { NotFoundScreen } from "@/misc/not-found.screen";
import { LoginScreen } from "@/modules/login/login.screen";
import { RegisterScreen } from "@/modules/register/register.screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFoundScreen />,
    children: [
      {
        path: "",
        element: <HomeScreen />,
      },
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "register",
        element: <RegisterScreen />,
      },
      {
        path: "search",
        element: <SearchScreen />,
      },
    ],
  },
]);

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
