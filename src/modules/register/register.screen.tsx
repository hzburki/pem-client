import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Title,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";

/** Custom Imports */
import { setTitle } from "../../utils";
import { registerStyles } from "./register.styles";
import { Link, useNavigate } from "react-router-dom";

export function RegisterScreen() {
  setTitle("Register");
  const navigate = useNavigate();
  const { classes } = registerStyles();

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
          Register with your email
        </Title>

        <br />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />

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

            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              size="xs"
              to="/login"
              type="button"
              color="dimmed"
              component={Link}
            >
              Already have an account? Login
            </Anchor>
            <Button radius="xl" onClick={() => navigate("/")}>
              Register
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
