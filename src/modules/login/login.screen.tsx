import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Title,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
} from "@mantine/core";

/** Custom Imports */
import { setTitle } from "../../utils";
import { loginStyles } from "./login.styles";
import { Link, useNavigate } from "react-router-dom";

export function LoginScreen() {
  setTitle("Login");
  const navigate = useNavigate();
  const { classes } = loginStyles();

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <div className={classes.root}>
      <Paper w={400} radius="md" variant="" p="xl" withBorder>
        <Title order={2} weight={600}>
          Login with your email
        </Title>

        <br />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              to="/register"
              component={Link}
              type="button"
              color="dimmed"
              size="xs"
            >
              Don't have an account? Register
            </Anchor>
            <Button radius="xl" onClick={() => navigate("/")}>
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
