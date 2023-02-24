import { Theme, useMediaQuery } from "@mui/material";
import { Page } from "../Page";
import { Profile } from "../Profile";

export function Home() {
  const isMobile = useMediaQuery(
    ({ breakpoints }: Theme) => breakpoints.down("sm"),
    {
      noSsr: true,
    }
  );

  return (
    <Page>
      <Profile isMobile={isMobile} />
    </Page>
  );
}
