import { Container, Stack, Typography } from "@mui/material";
import { Header } from "../NavigationBar";

export type PageProps = {
  title?: string;
  children?: React.ReactNode;
};

export function Page({ title, children }: PageProps) {
  return (
    <Stack>
      <Header />
      {title && (
        <Typography
          variant="h1"
          color="primary.dark"
          ml={6}
          mt={6}
          sx={{ textDecoration: "underline" }}
        >
          {title}
        </Typography>
      )}
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          my: 2,
          p: { xs: 2, sm: 5 },
        }}
      >
        {children}
      </Container>
    </Stack>
  );
}
