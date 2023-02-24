import { Container, Stack } from "@mui/material";
import { Header } from "../NavigationBar";

export type PageProps = {
  children?: React.ReactNode;
};

export function Page({ children }: PageProps) {
  return (
    <Stack>
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          my: 10,
          p: { xs: 2, sm: 5 },
        }}
      >
        {children}
      </Container>
    </Stack>
  );
}
